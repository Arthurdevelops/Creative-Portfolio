import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-100 hover:scale-105 transition-transform duration-300">
      <div className="h-48 bg-gray-200">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          width={320}
          height={192}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-950 text-white px-2 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
