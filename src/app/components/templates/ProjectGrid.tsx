"use client";

import ProjectCard from "../organisms/ProjectCard";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 p-6 max-w-7xl">
      {projects.map((project, index) => (
        <div key={index} className={index % 2 === 1 ? "lg:pt-20" : ""}>
          <ProjectCard
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
          />
        </div>
      ))}
    </div>
  );
}
