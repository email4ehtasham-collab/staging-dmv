import testimonialVideos from "@/data/testimonials/testimonialsVideosData";
import ProjectsVideosContent from "./ProjectsVideosContent";
import StarsIcon from '@/assets/stars.svg';
import { VideoItem } from "./types";
import styles from "./style.module.scss";

const ProjectsVideos = () => {
  const projectVideos = testimonialVideos.filter(
    (video) => video.video_type === "project"
  ) as VideoItem[];

  return (
    <section className={`section ${styles["project-videos"]}`}>
      <div className="container">
        <div className="h-list justify-content-between flex-lg-nowrap mb-4" data-gap="0" data-gap-lg="40">
          <div className="grid" data-gap="10">
            <h3 className="section-title">
              <div className="stars-icon">
                <StarsIcon />
              </div>
              Our Recent Projects
            </h3>
          </div>
        </div>

        <ProjectsVideosContent videos={projectVideos} />
      </div>
    </section>
  );
};

export default ProjectsVideos;
