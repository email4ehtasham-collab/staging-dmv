export interface VideoItem {
  id: number;
  thumbnail: string;
  videoUrl: string;
  video_type: "project" | "review";
  projectLink: string;
  title: string;
  slug: string;
  desc?: string;
  bottom_title?: boolean;
  mainVideo?: boolean;
  imageAlt?: string;
}
