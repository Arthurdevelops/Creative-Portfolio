"use client";

import Image from "next/image";
import Text from "../atoms/Text";
import TagList from "../molecules/TagList";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  slug,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${slug}`);
  };

  return (
    <div
      className="bg-gray-900 dark:bg-white rounded-lg shadow-lg overflow-hidden w-80 hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={handleClick}
    >
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
        <Text variant="h3" className="mb-2 text-white dark:text-black">
          {title}
        </Text>
        <Text variant="body" className="text-gray-200 dark:text-black mb-4">
          {description}
        </Text>
        <TagList tags={technologies} />
      </div>
    </div>
  );
};

export default ProjectCard;
