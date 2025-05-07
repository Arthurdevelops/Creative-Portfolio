"use client";

import Image from "next/image";
import Text from "../atoms/Text";
import TagList from "../molecules/TagList";

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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 hover:scale-105 transition-transform duration-300">
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
        <Text variant="h3" className="mb-2 text-black">
          {title}
        </Text>
        <Text variant="body" className="text-gray-600 mb-4">
          {description}
        </Text>
        <TagList tags={technologies} />
      </div>
    </div>
  );
};

export default ProjectCard;
