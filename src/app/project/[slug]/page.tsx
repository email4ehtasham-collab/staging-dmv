import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectData from "@/data/projects/ProjectsData";
import ProjectClient from "./ProjectClient";

export function generateStaticParams() {
  return ProjectData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params; 

  const project = ProjectData.find((p) => p.slug === slug);

  return {
    title: project?.client || "Project",
    description: project?.description || "",

    alternates: {
      canonical: `/project/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = ProjectData.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectClient project={project} />;
}