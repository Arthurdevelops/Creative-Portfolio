"use client";

import ProjectCard from "../organisms/ProjectCard";
import Rectangle from "../atoms/Rectangle";
import Circle from "../atoms/Circle";
import projectsData from "@/app/data/projects.json";
import { ProjectsData } from "@/app/types/blades";

export default function ProjectsSection() {
  const projects = (projectsData as ProjectsData).projects;

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen bg-black-900 text-white snap-start"
    >
      <h2 className="text-3xl font-medium my-8">Mes Projets</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 p-6 max-w-7xl">
        {projects.map((project, index) => (
          <div key={index} className={index % 2 === 1 ? "lg:pt-20" : ""}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              slug={project.slug}
            />
          </div>
        ))}
      </div>
      <Rectangle
        color="bg-rose-500"
        width="w-[10px]"
        height="h-[400px]"
        className="relative bottom-180 left-150"
        animationType="bounce"
      />
      <Rectangle
        color="bg-purple-400"
        width="w-[10px]"
        height="h-[600px]"
        className="relative bottom-290 right-180"
        animationType="bounce"
        duration={10}
      />
      <Circle
        color="bg-blue-400"
        size="w-[50px] h-[50px]"
        animationType="slide"
        className="relative bottom-290 left-100"
        duration={10}
      />
    </section>
  );
}
