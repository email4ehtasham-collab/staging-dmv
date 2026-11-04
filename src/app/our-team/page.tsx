import Image from "next/image";
import Link from "next/link";
import NavitemActive from "@/components/Common/NavitemActive";
import { TEAM_MEMBERS } from "./data";
import { Metadata } from "next";

import styles from "./style.module.scss";
import { seoFor, toMetadata } from "@/lib/seo/resolve";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await seoFor("/our-team", {
    title: "Our Team at DMV General Contracting Group",
    description:
      "Meet the dedicated professionals who make our projects successful.",
  });

  return toMetadata(seo, "/our-team");
}

export default function OurTeam() {
    const selectedMember = TEAM_MEMBERS[0];

    return (
        <main className="page-wrapper">
            <NavitemActive nav="our-team" />
            <div className={styles['banner-holder']}>
				<div className={`image-holder ${styles["image-holder"]}`}>
					<img src={'/images/our-team-bg.jpg'} alt={'our team'} />
				</div>
				<div className='container'>
					<div className={styles['content-data']}>
						<div className='h-list justify-content-center'>
							<h1>Meet our team</h1>
						</div>
					</div>
				</div>
			</div>
            <section className={styles['team-profile']}>
                <div className={`container ${styles['container']}`}>

                    <div className={styles['team-profile__main']}>
                        <div className={styles['team-profile__top']}>

                            <div className={styles['team-profile__avatar']} title={selectedMember.name}>
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
                            <h3 className={'team-profile__heading'}>BACKGROUND</h3>

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
                            <Link key={member.slug} href={`/our-team/${member.slug}`} className={`${styles['team-profile__thumb'] + " " + (member.slug === selectedMember.slug ? styles['active'] : "")}`} title={member.name}>
                                <img src={member.image} alt={member.name} />
                            </Link>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}