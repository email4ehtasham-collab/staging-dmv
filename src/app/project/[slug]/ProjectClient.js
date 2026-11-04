"use client";

import { useState, useEffect } from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import Lightbox from "yet-another-react-lightbox";
import NavitemActive from "@/components/Common/NavitemActive";
import "yet-another-react-lightbox/styles.css";

import StarsIcon from '@/assets/stars.svg';

import styles from "./style.module.scss";

export default function ProjectClient({ project }) {
    const [open, setOpen] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300);
    }, []);

    if (!project) return null;

    const isSpecial = project.id <= -1;

    return (
        <main className="page-wrapper">
            <NavitemActive nav="project" />
            <div className={styles["project-detail-page"]}>

                <div
                    className={styles["top-banner"]}
                    style={{
                        backgroundImage: `url(${isSpecial ? project.images[0].imageUrl2 : project.images[0].image})`,
                    }}>
                    <h1>
                        {isSpecial
                            ? "Project Journey"
                            : project.mainTitle === false
                                ? ""
                                : "Project Journey"}
                    </h1>
                </div>

                <div className="container">
                    <h3 className={`mb-3 section-title ${styles["section-title"]}`}>
                        <div className={'stars-icon'}>
                            <StarsIcon />
                        </div>
                        {project.client}
                    </h3>

                    <p>{project.description}</p>

                    {/* CONDITIONAL CONTENT */}
                    {isSpecial ? (
                        <>
                            {project.titles.map((_, index) => (
                                <div key={index} className="mb-3">
                                    {project.details[index].map((item, i) => (
                                        <div key={i}>
                                            {item.point_title && (
                                                <strong>{item.point_title}</strong>
                                            )}
                                            <p>{item.point_desc}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}

                            <p>
                                <strong>Final result: </strong>
                                {project.lastDescription}
                            </p>

                            <div className={`${styles["images-holder"]}`}>
                                {project.images.map((img, i) => (
                                    <div
                                        key={i}
                                        className={`images-holder ${styles["image-item"]}`}
                                        onClick={() => {
                                            setClickedIndex(i);
                                            setOpen(true);
                                        }}
                                    >
                                        <ReactBeforeSliderComponent
                                            firstImage={{ imageUrl: img.imageUrl2 }}
                                            secondImage={{ imageUrl: img.imageUrl1 }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <p>{project.topdesc}</p>

                            <h4 className="mb-2">
                                <strong>{project.detail_title} :</strong>
                            </h4>

                            {project.titles.map((_, index) => (
                                <div key={index}>
                                    {project.details[index].map((item, i) => (
                                        <div key={i}>
                                            {item.point_title && (
                                                <strong>{item.point_title}</strong>
                                            )}
                                            <p>{item.point_desc}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}

                            <p>
                                <strong>Final result: </strong>
                                {project.lastDescription}
                            </p>

                            <p>{project.dmvdesc}</p>

                            <div className={`images-holder ${styles['images-holder']} ${styles['galary']}`}>
                                {project.images.map((img, i) => (
                                    <div key={i} className={`image-holder ${styles['image-holder']} ${styles['image-item']}`} onClick={() => { setClickedIndex(i); setOpen(true); }}>
                                        <img src={img.image} alt="" />
                                    </div>
                                ))}
                            </div>

                            {/* LIGHTBOX */}
                            <Lightbox
                                open={open}
                                close={() => setOpen(false)}
                                index={clickedIndex}
                                slides={project.images.map((img) => ({
                                    src: img.image,
                                }))}
                            />
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}