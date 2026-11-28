// Generates the per-page JSON-LD (schema) in src/data/schema/pageSchema.json.
// src/components/Schema/PageSchema.tsx renders one entry per page; the site-wide
// business and website nodes stay in src/app/layout.tsx.
//
// HOW TO RUN (from the repo root):
//   1. npm run build:static                    (builds the pages into out/)
//   2. node scripts/generate-page-schema.mjs   (reads out/, writes src/data/schema/pageSchema.json)
//   3. npm run build:static                    (builds again, now with the new schema)
//   Then commit src/data/schema/pageSchema.json together with the page change.
//
// WHEN TO RERUN: after any change to a page title, meta description or FAQ
// question/answer, and whenever a page is added or removed. The schema copies
// those texts word for word from the built HTML, so it goes stale otherwise.
//
// Options:
//   --out <dir>      read the build from another folder (default: out)
//   --report <dir>   also write a coverage CSV, an issues list and the full blocks
//
// The script stops with an error (and writes nothing) if any page has a broken
// @id reference, a missing image or a rating, or if a page type is unknown.
// A new city or service must be added to CITIES / SERVICES below first.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import * as cheerio from 'cheerio';
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (name, def) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : def; };
const OUT = path.resolve(REPO, arg('--out', 'out'));
const DEST = arg('--report', '') ? path.resolve(REPO, arg('--report')) : '';
if (!fs.existsSync(path.join(OUT, 'sitemap.xml'))) { console.error(`No build found at ${OUT}. Run "npm run build:static" first.`); process.exit(1); }
const SITE = 'https://www.dmv-gc.com';
const BIZ = { '@id': `${SITE}/#business` };
const WEBSITE = { '@id': `${SITE}/#website` };
if (DEST) fs.mkdirSync(DEST, { recursive: true });

// ---------- reference data ----------
const MD = { '@type': 'State', name: 'Maryland', sameAs: 'https://en.wikipedia.org/wiki/Maryland' };
const DC = { '@type': 'AdministrativeArea', name: 'Washington, DC', sameAs: 'https://en.wikipedia.org/wiki/Washington,_D.C.' };
const MOCO = { '@type': 'AdministrativeArea', name: 'Montgomery County', sameAs: 'https://en.wikipedia.org/wiki/Montgomery_County,_Maryland', containedInPlace: { '@type': 'State', name: 'Maryland' } };
const CITIES = {
  'bethesda-md': ['Bethesda', 'Bethesda, MD', 'Bethesda,_Maryland'],
  'cabin-john-md': ['Cabin John', 'Cabin John, MD', 'Cabin_John,_Maryland'],
  'chevy-chase-md': ['Chevy Chase', 'Chevy Chase, MD', 'Chevy_Chase,_Maryland'],
  'gaithersburg-md': ['Gaithersburg', 'Gaithersburg, MD', 'Gaithersburg,_Maryland'],
  'garrett-park-md': ['Garrett Park', 'Garrett Park, MD', 'Garrett_Park,_Maryland'],
  'kensington-md': ['Kensington', 'Kensington, MD', 'Kensington,_Maryland'],
  'laurel-md': ['Laurel', 'Laurel, MD', 'Laurel,_Maryland'],
  'north-bethesda-md': ['North Bethesda', 'North Bethesda, MD', 'North_Bethesda,_Maryland'],
  'potomac-md': ['Potomac', 'Potomac, MD', 'Potomac,_Maryland'],
  'rockville-md': ['Rockville', 'Rockville, MD', 'Rockville,_Maryland'],
  'silver-spring-md': ['Silver Spring', 'Silver Spring, MD', 'Silver_Spring,_Maryland'],
  'washington-dc': ['Washington', 'Washington, DC', 'Washington,_D.C.'],
  'wheaton-md': ['Wheaton', 'Wheaton, MD', 'Wheaton,_Maryland'],
};
const city = (slug) => {
  const [name, , wiki] = CITIES[slug];
  return slug === 'washington-dc' ? DC : { '@type': 'City', name, sameAs: `https://en.wikipedia.org/wiki/${wiki}`, containedInPlace: MD };
};
// Service name (breadcrumb + Service.name) and serviceType per hub slug.
const SERVICES = {
  'kitchen-remodeling': ['Kitchen Remodeling', 'Kitchen remodeling'],
  'bathroom-remodeling': ['Bathroom Remodeling', 'Bathroom remodeling'],
  'basement-remodeling': ['Basement Remodeling', 'Basement remodeling and finishing'],
  adu: ['ADU Construction', 'Accessory dwelling unit (ADU) construction'],
  'home-additions': ['Home Additions', 'Home addition construction'],
  'design-build': ['Design-Build Remodeling', 'Design-build remodeling'],
  'whole-home-renovation': ['Whole-Home Renovation', 'Whole-home renovation'],
  decks: ['Deck Building', 'Deck construction'],
  patios: ['Patio Installation', 'Patio construction'],
  hardscaping: ['Hardscaping', 'Hardscaping'],
  concrete: ['Concrete Services', 'Concrete work'],
  'fence-installation': ['Fence Installation', 'Fence installation'],
  'flooring-remodeling': ['Flooring Installation', 'Flooring installation'],
  'carpet-installation': ['Carpet Installation', 'Carpet installation'],
  drywall: ['Drywall Installation and Repair', 'Drywall installation and repair'],
  framing: ['Framing', 'Residential framing'],
  'electrical-services': ['Electrical Services', 'Residential electrical work'],
  'plumbing-services': ['Plumbing Services', 'Residential plumbing'],
  hvac: ['HVAC Services', 'HVAC installation and repair'],
  roofing: ['Roofing', 'Roofing installation and repair'],
  'siding-installation': ['Siding Installation', 'Siding installation'],
  'junk-removal': ['Junk Removal', 'Junk removal'],
};
const TOP = { 'about-us': ['AboutPage', 'About Us'], 'contact-us': ['ContactPage', 'Contact Us'], faqs: ['WebPage', 'FAQs'], 'our-stories': ['WebPage', 'Our Stories'], testimonials: ['WebPage', 'Testimonials'], services: ['CollectionPage', 'Services'], projects: ['CollectionPage', 'Projects'], blogs: ['CollectionPage', 'Blog'], 'our-team': ['CollectionPage', 'Our Team'] };

// project data (location + linked services) and team data, read from source with the TypeScript compiler
const req = createRequire(path.join(REPO, 'package.json'));
const ts = req('typescript');
const loadData = (file) => {
  const src = fs.readFileSync(path.join(REPO, file), 'utf8').replace(/^import .*$/gm, '');
  const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React, target: ts.ScriptTarget.ES2019 } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', 'React', 'ResponsiveImage', js)(m, m.exports, () => ({}), { createElement: () => null }, () => null);
  return m.exports;
};
const projects = loadData('src/data/projects/ProjectsData.jsx').default;
const team = loadData('src/app/our-team/data.tsx').TEAM_MEMBERS;
const blogs = loadData('src/data/blogs/BlogsData.jsx').default;

// ---------- page inventory ----------
const sm = fs.readFileSync(path.join(OUT, 'sitemap.xml'), 'utf8');
const entries = [...sm.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({ url: m[1].match(/<loc>([^<]+)/)[1], lastmod: (m[1].match(/<lastmod>([^<]+)/) || [])[1] }));
const fileOf = (u) => { const p = u.replace(SITE, '').replace(/\/$/, ''); return p === '' ? 'index.html' : p.slice(1) + '.html'; };
const raw = (s) => (s || '').replace(/\s+/g, ' ').trim();
// Business rules for schema text: never "DMV-GC Group"; address in the GBP format.
const fixes = {};
const clean = (s, field = 'text') => raw(s).replace(/DMV-GC Group/g, () => ((fixes[field] = (fixes[field] || 0) + 1), 'DMV General Contracting Group'));
// Meta descriptions with Virginia or a rating / review count stay out of schema.
const BANNED_DESC = /virginia|\bVA\b|\b4\.9\b|★|\b\d+\+? (?:google |verified )?reviews/i;
const exists = (p) => fs.existsSync(path.join(OUT, decodeURIComponent(p.split('?')[0])));
const sitemapUrls = new Set(entries.map((e) => e.url));

const blocks = {};
const coverage = [];
const issues = [];
for (const { url, lastmod } of entries) {
  const rel = url.replace(SITE, '');
  const parts = rel.split('/').filter(Boolean);
  const $ = cheerio.load(fs.readFileSync(path.join(OUT, fileOf(url)), 'utf8'));
  const title = clean($('title').first().text(), 'title');
  let desc = clean($('meta[name=description]').attr('content'), 'description');
  if (BANNED_DESC.test(desc)) { issues.push([rel || '/', 'Meta description', `Left out of schema: the meta description mentions Virginia or a rating/review count ("${desc}")`]); desc = ''; }
  const h1 = clean($('h1').first().text());
  const canonical = $('link[rel=canonical]').attr('href') || '';
  if (canonical.replace(/\/$/, '') !== url.replace(/\/$/, '')) issues.push([rel || '/', 'Canonical', `canonical is ${canonical}, sitemap URL is ${url}`]);
  const links = new Set($('a[href]').map((_, e) => { const h = $(e).attr('href'); try { const u = new URL(h, url); return u.hostname.endsWith('dmv-gc.com') || h.startsWith('/') ? SITE + u.pathname.replace(/\/$/, '') : null; } catch { return null; } }).get().filter(Boolean));
  $('script,style,noscript').remove();

  // visible FAQ, verbatim from the HTML
  const faqs = [];
  $('.accordion-item, .faq-item, details').each((_, e) => {
    const el = $(e);
    if (el.parents('.accordion-item, .faq-item, details').length) return;
    const qEl = el.find('.accordion-button, .faq-q, summary').first();
    const q = raw(qEl.text());
    if (!q.endsWith('?')) return;
    let a = raw(el.find('.accordion-body, .faq-a').first().text());
    if (!a) { const c = el.clone(); c.find('summary').remove(); a = raw(c.text()); }
    if (/DMV-GC Group/.test(q + a)) issues.push([rel || '/', 'FAQ name', `Visible FAQ still says "DMV-GC Group": ${q}`]);
    if (a && !faqs.some((f) => f.q === q)) faqs.push({ q, a });
  });

  // first content image outside header/footer that exists in the export
  let image = '';
  $('img').each((_, e) => {
    if (image) return;
    const el = $(e);
    if (el.closest('header, footer, nav, [class*=topBar], [class*=TopBar]').length) return;
    let s = el.attr('src') || '';
    if (s.startsWith('/_next/image')) s = decodeURIComponent(new URL(s, SITE).searchParams.get('url') || '');
    if (!s.startsWith('/images/') || /logo|icon|badge|\.svg$/i.test(s)) return;
    if (exists(s)) image = SITE + encodeURI(decodeURI(s));
  });

  const graph = [];
  const pageId = `${url}#webpage`;
  const crumbs = [['Home', `${SITE}/`]];
  let pageType = 'WebPage', kind = '', mainEntity = null, about = null;

  if (!parts.length) {
    kind = 'Homepage'; about = BIZ;
    crumbs[0] = ['Home', `${SITE}/`, 'keep'];
  } else if (parts[0] === 'service' && parts.length === 2) {
    kind = 'Service hub';
    const [name, type] = SERVICES[parts[1]];
    crumbs.push(['Services', `${SITE}/services`], [name]);
    mainEntity = { '@type': 'Service', '@id': `${url}#service`, name, serviceType: type, url, description: desc, provider: BIZ, areaServed: [MD, MOCO] };
  } else if (parts[0] === 'service' && parts.length === 3) {
    kind = 'Service x city';
    const [name, type] = SERVICES[parts[1]];
    if (!CITIES[parts[2]]) throw new Error('unknown city ' + parts[2]);
    crumbs.push(['Services', `${SITE}/services`], [name, `${SITE}/service/${parts[1]}`], [CITIES[parts[2]][1]]);
    mainEntity = { '@type': 'Service', '@id': `${url}#service`, name: `${name} in ${CITIES[parts[2]][1]}`, serviceType: type, url, description: desc, provider: BIZ, areaServed: city(parts[2]) };
  } else if (parts[0] === 'service-area' && parts.length === 1) {
    kind = 'Service areas'; pageType = 'CollectionPage'; about = BIZ;
    crumbs.push(['Service Areas']);
    const kids = [...links].filter((l) => sitemapUrls.has(l) && //service-area/[^/]+$/.test(l));
    if (kids.length) mainEntity = { '@type': 'ItemList', '@id': `${url}#itemlist`, numberOfItems: kids.length, itemListElement: kids.map((k, i) => ({ '@type': 'ListItem', position: i + 1, url: k })) };
  } else if (parts[0] === 'service-area') {
    kind = 'Area hub'; about = BIZ;
    // Matches the visible breadcrumb: Home > Service Areas > area
    crumbs.push(['Service Areas', `${SITE}/service-area`], [CITIES[parts[1]][1]]);
    mainEntity = { '@type': 'Service', '@id': `${url}#service`, name: `General Contracting and Home Remodeling in ${CITIES[parts[1]][1]}`, serviceType: 'General contracting', url, description: desc, provider: BIZ, areaServed: city(parts[1]) };
  } else if (parts[0] === 'blog') {
    kind = 'Blog post';
    const b = blogs.find((x) => x.slug === parts[1]);
    crumbs.push(['Blog', `${SITE}/blogs`], [h1 || title]);
    const img = b?.image ? b.image.replace(/^\.\//, '/') : '';
    mainEntity = { '@type': 'BlogPosting', '@id': `${url}#article`, headline: h1 || title, description: desc, url, mainEntityOfPage: { '@id': pageId }, author: BIZ, publisher: BIZ, isPartOf: WEBSITE, inLanguage: 'en-US' };
    if (img && exists(img)) mainEntity.image = SITE + img; else if (image) mainEntity.image = image;
    if (!mainEntity.image) issues.push([rel, 'Image', 'No usable image for BlogPosting']);
  } else if (parts[0] === 'project') {
    kind = 'Project';
    const p = projects.find((x) => x.slug === parts[1]);
    crumbs.push(['Projects', `${SITE}/projects`], [title]);
    mainEntity = { '@type': 'Article', '@id': `${url}#article`, headline: title, description: desc, url, mainEntityOfPage: { '@id': pageId }, author: BIZ, publisher: BIZ, isPartOf: WEBSITE, inLanguage: 'en-US' };
    const img = p?.images?.[0]?.image;
    if (img && exists(img)) mainEntity.image = SITE + img; else if (image) mainEntity.image = image;
    const svc = (p?.serviceTypes || []).filter((s) => SERVICES[s] && sitemapUrls.has(`${SITE}/service/${s}`));
    if (svc.length) mainEntity.about = svc.map((s) => ({ '@id': `${SITE}/service/${s}#service` }));
    const loc = clean((p?.category || '').split('|')[1]);
    if (/virginia|, va\b/i.test(loc)) issues.push([rel, 'Virginia', `Project location "${loc}" left out of schema (business serves MD and DC only; open question with the client)`]);
    else if (loc) mainEntity.contentLocation = { '@type': 'Place', name: loc };
    if (h1 === 'Project Journey') issues.push([rel, 'H1', 'H1 is the generic "Project Journey"; schema headline uses the page title instead']);
  } else if (parts[0] === 'our-team' && parts.length === 2) {
    kind = 'Team profile'; pageType = 'ProfilePage';
    const m = team.find((x) => x.slug === parts[1]);
    crumbs.push(['Our Team', `${SITE}/our-team`], [m?.name || title]);
    mainEntity = { '@type': 'Person', '@id': `${url}#person`, name: m.name, jobTitle: m.role, url, worksFor: BIZ };
    if (m.image && exists(m.image)) mainEntity.image = SITE + m.image;
    if (h1 === 'Meet our team') issues.push([rel, 'H1', 'H1 is "Meet our team" on a personal profile page']);
  } else if (TOP[parts[0]]) {
    [pageType] = TOP[parts[0]]; kind = TOP[parts[0]][1];
    crumbs.push([TOP[parts[0]][1]]);
    if (['about-us', 'contact-us'].includes(parts[0])) about = BIZ;
    const childPrefix = { services: '/service/', projects: '/project/', blogs: '/blog/', 'our-team': '/our-team/' }[parts[0]];
    if (childPrefix) {
      const kids = [...links].filter((l) => sitemapUrls.has(l) && l.replace(SITE, '').startsWith(childPrefix) && (childPrefix !== '/service/' || l.split('/').length === 5));
      const missing = entries.filter((e) => e.url.replace(SITE, '').startsWith(childPrefix) && (childPrefix !== '/service/' || e.url.split('/').length === 5) && !kids.includes(e.url));
      if (missing.length) issues.push([rel, 'ItemList', `${missing.length} child page(s) in the sitemap are not linked from this page, so they are left out of its ItemList: ${missing.map((x) => x.url.replace(SITE, '')).join(', ')}`]);
      if (kids.length) mainEntity = { '@type': 'ItemList', '@id': `${url}#itemlist`, numberOfItems: kids.length, itemListElement: kids.map((k, i) => ({ '@type': 'ListItem', position: i + 1, url: k })) };
    }
  } else {
    throw new Error('unmapped ' + url);
  }

  const page = { '@type': pageType, '@id': pageId, url, name: title, isPartOf: WEBSITE, inLanguage: 'en-US' };
  if (desc) page.description = desc;
  if (about) page.about = about;
  if (image) page.primaryImageOfPage = { '@type': 'ImageObject', url: image };
  if (lastmod) page.dateModified = lastmod;
  page.breadcrumb = { '@id': `${url}#breadcrumb` };
  if (mainEntity) page.mainEntity = { '@id': mainEntity['@id'] };
  graph.push(page);
  if (mainEntity) graph.push(mainEntity);
  graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: crumbs.map(([name, item, keep], i) => ({ '@type': 'ListItem', position: i + 1, name, ...(i < crumbs.length - 1 || keep ? { item } : {}) })) });
  if (faqs.length) graph.push({ '@type': 'FAQPage', '@id': `${url}#faqpage`, isPartOf: { '@id': pageId }, mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });

  blocks[url] = { '@context': 'https://schema.org', '@graph': graph };
  coverage.push({ url, kind, types: graph.map((n) => n['@type']).join(' + '), faq: faqs.length, image: image ? image.replace(SITE, '') : '', dateModified: lastmod || '' });
}

// ---------- validate ----------
const sitewide = JSON.parse(cheerio.load(fs.readFileSync(path.join(OUT, 'index.html'), 'utf8'))('script#schema-org').text());
const defs = new Map();
const problems = [];
const walk = (o, where, refs) => {
  if (Array.isArray(o)) return o.forEach((x) => walk(x, where, refs));
  if (!o || typeof o !== 'object') return;
  const keys = Object.keys(o);
  if (o['@id'] && o['@type']) { const prev = defs.get(o['@id']); if (prev && prev !== [].concat(o['@type']).join('|')) problems.push(`${where}: ${o['@id']} used for ${prev} and ${o['@type']}`); defs.set(o['@id'], [].concat(o['@type']).join('|')); }
  if (keys.length === 1 && o['@id']) refs.push([where, o['@id']]);
  for (const k of keys) walk(o[k], where, refs);
};
const refs = [];
walk(sitewide, 'block1', refs);
let qCount = 0;
for (const [url, b] of Object.entries(blocks)) {
  const txt = JSON.stringify(b);
  JSON.parse(txt);
  if (/[‘’“”]/.test(Object.keys(b).join(''))) problems.push(url + ': smart quotes in keys');
  walk(b, url, refs);
  for (const n of b['@graph']) {
    if (n['@type'] === 'BreadcrumbList') n.itemListElement.forEach((c, i) => { if (c.position !== i + 1) problems.push(url + ': crumb position'); if (i < n.itemListElement.length - 1 && !c.item) problems.push(url + ': crumb without item'); });
    if (n['@type'] === 'Service' && n.provider?.['@id'] !== `${SITE}/#business`) problems.push(url + ': Service without provider');
    if (n['@type'] === 'FAQPage') n.mainEntity.forEach((q) => { qCount++; if (!q.acceptedAnswer?.text) problems.push(url + ': question without answer'); });
  }
  if (/aggregateRating|"review"|ratingValue/i.test(txt)) problems.push(url + ': rating found');
  if (/virginia|, VA\b/i.test(txt)) issues.push([url.replace(SITE, ''), 'Virginia', 'Virginia text in the generated schema (comes from visible page text); check before deploying']);
}
const unresolved = refs.filter(([, id]) => !defs.has(id));
const imgs = new Set();
for (const b of [sitewide, ...Object.values(blocks)]) JSON.stringify(b).replace(/"(?:url|image|logo)":"(https:\/\/www\.dmv-gc\.com\/images\/[^"]+)"/g, (_, u) => imgs.add(u));
const badImgs = [...imgs].filter((u) => !exists(decodeURI(u.replace(SITE, ''))));

const fatal = unresolved.length + problems.length + badImgs.length;
if (fatal) {
  console.error('Schema NOT written. Fix these first:');
  [...unresolved.map(([w, id]) => `${w}: unresolved @id ${id}`), ...problems, ...badImgs.map((u) => 'missing image ' + u)].slice(0, 50).forEach((x) => console.error('  ' + x));
  process.exit(1);
}
const byPath = Object.fromEntries(Object.entries(blocks).map(([u, b]) => [u.replace(SITE, '').replace(/\/$/, '') || '/', b]));
fs.mkdirSync(path.join(REPO, 'src/data/schema'), { recursive: true });
fs.writeFileSync(path.join(REPO, 'src/data/schema/pageSchema.json'), JSON.stringify(byPath) + '\n');
if (DEST) {
  const csvq = (v) => `"${String(v).replace(/"/g, '""')}"`;
  fs.writeFileSync(path.join(DEST, 'sitewide-block1.json'), JSON.stringify(sitewide, null, 2));
  fs.writeFileSync(path.join(DEST, 'page-schema.json'), JSON.stringify(blocks, null, 2));
  fs.writeFileSync(path.join(DEST, 'schema-coverage.csv'), '\uFEFF' + ['URL,Page kind,Block 2 nodes,Visible FAQ questions,Primary image,dateModified', ...coverage.map((c) => [c.url, c.kind, c.types, c.faq, c.image, c.dateModified].map(csvq).join(','))].join('\r\n'));
  fs.writeFileSync(path.join(DEST, 'schema-issues.json'), JSON.stringify(issues, null, 1));
}
console.log(`Wrote src/data/schema/pageSchema.json: ${Object.keys(byPath).length} pages, ${qCount} FAQ questions.`);
const byKind = {}; coverage.forEach((c) => { const k = byKind[c.kind] ??= { pages: 0, faqPages: 0, faqQs: 0, withImage: 0, types: new Set() }; k.pages++; if (c.faq) k.faqPages++; k.faqQs += c.faq; if (c.image) k.withImage++; k.types.add(c.types.replace(/ \+ FAQPage/, '')); });
console.log('Pages by type:', Object.fromEntries(Object.entries(byKind).map(([k, v]) => [k, v.pages])));
if (Object.keys(fixes).length) console.log('"DMV-GC Group" written as "DMV General Contracting Group" in schema:', fixes);
const ik = {}; issues.forEach((x) => (ik[x[1]] = (ik[x[1]] || 0) + 1));
if (issues.length) console.log(`Notes (${issues.length}, not errors; use --report to list them):`, ik);
