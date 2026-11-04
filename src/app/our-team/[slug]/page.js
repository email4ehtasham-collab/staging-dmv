import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TEAM_MEMBERS } from "../data";
import ScrollHandler from "../ScrollHandler";
import { seoFor, toMetadata } from "@/lib/seo/resolve";

import styles from "../style.module.scss";
import NavitemActive from "@/components/Common/NavitemActive";

export function generateStaticParams() {
  return TEAM_MEMBERS.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = TEAM_MEMBERS.find((m) => m.slug === slug);

  const seo = await seoFor(`/our-team/${slug}`, {
    title: member ? `${member.name} | DMV General Contracting Group` : "Our Team",
    description: member
      ? `${member.name} - ${member.role} at DMV General Contracting Group.`
      : "",
  });

  return toMetadata(seo, `/our-team/${slug}`);
}

export default async function OurTeam({ params }) {
  const { slug } = await params;

  const selectedMember = TEAM_MEMBERS.find(
    (m) => m.slug === slug
  );

  if (!selectedMember) return notFound();

  return (
    <main className="page-wrapper">
      <NavitemActive nav="our-team" />

      {/* (optional) banner — include if you want same as main page */}
      <div className={styles['banner-holder']}>
        <div className={`image-holder ${styles["image-holder"]}`}>
          <img src={'/images/our-team-bg.jpg'} alt={'our team'} />
        </div>

        <div className="container">
          <div className={styles['content-data']}>
            <div className="h-list justify-content-center">
              <h1>Meet our team</h1>
            </div>
          </div>
        </div>
      </div>

      <section className={`team-profile ${styles['team-profile']}`}>
        <div className={`container ${styles['container']}`}>

          {/* MAIN */}
          <div className={styles['team-profile__main']}>

            <div className={styles['team-profile__top']}>

              <div className={styles['team-profile__avatar']}>
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={300}
                  height={300}
                />
              </div>

              <div className={styles['team-profile__titlebox']}>
                <h2 className={`fw-bold ${styles['team-profile__name']}`}>
                  {selectedMember.name}
                </h2>

                <p className={styles['team-profile__role']}>
                  {selectedMember.role.toUpperCase()}
                </p>
              </div>

            </div>

            <div className={styles['team-profile__bio']}>
              <h3 className={'team-profile__heading'}>
                BACKGROUND
              </h3>

              <div
                dangerouslySetInnerHTML={{
                  __html: selectedMember.bio,
                }}
              />
            </div>

          </div>

          {/* SIDEBAR */}
          <div className={styles['team-profile__sidebar']}>
            {TEAM_MEMBERS.map((member) => (
              <Link
                key={member.slug}
                href={`/our-team/${member.slug}`}
                className={`
                  ${styles['team-profile__thumb']}
                  ${member.slug === selectedMember.slug ? styles['active'] : ""}
                `}
              >
                <img src={member.image} alt={member.name} />
              </Link>
            ))}
          </div>

        </div>
      </section>
        <ScrollHandler />
    </main>
  );
}