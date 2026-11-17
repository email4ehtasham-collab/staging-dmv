import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./home-blogs.module.scss";

const posts = [
  {
    category: "Permits",
    title: "Remodeling Permits in Montgomery County and DC",
    text: "Everything homeowners in Montgomery County and DC need to know before filing.",
    image: "/images/banner-v3.jpg",
    alt: "Home renovation permit planning in Maryland",
  },
  {
    category: "Costs",
    title: "What Maryland Remodeling Really Costs in 2026",
    text: "What Maryland remodeling really costs in 2026, line by line.",
    image: "/images/services/kitchen.jpg",
    alt: "Kitchen remodel cost planning in Maryland",
  },
  {
    category: "ADUs",
    title: "ADU Zoning, Rental Rules and Permits",
    text: "ADU zoning, rental rules and permits in Montgomery County and DC.",
    image: "/images/services/additions.jpg",
    alt: "Accessory dwelling unit construction in Maryland",
  },
];

export default function HomeBlogs() {
  return (
    <section id="blog" className={styles.section} aria-labelledby="blog-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            className={styles.heading}
            id="blog-title"
            eyebrow={<Badge>From the Blog</Badge>}
            title="Remodeling Guides for Maryland and DC Homeowners"
          />
          <Button href="/blogs" variant="secondary">
            View All Articles
          </Button>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.title} className={styles.card}>
              <Link href="/blogs" className={styles.media} aria-label={`Read article: ${post.title}`}>
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 464px"
                  className={styles.image}
                />
              </Link>
              <div className={styles.body}>
                <span className={styles.category}>{post.category}</span>
                <h3 className={styles.cardTitle}>
                  <Link href="/blogs">{post.title}</Link>
                </h3>
                <p className={styles.cardText}>{post.text}</p>
                <Link href="/blogs" className={styles.readMore}>
                  Read article
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                    <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
