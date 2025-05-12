"use client";

import ProjectCard from "../organisms/ProjectCard";
import projectsData from "@/app/data/projects.json";
import { ProjectsData } from "@/app/types/blades";

export default function ProjectsSection() {
  const projects = (projectsData as ProjectsData).projects;

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen snap-start"
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
    </section>
  );
}
