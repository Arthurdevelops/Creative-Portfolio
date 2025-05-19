"use client";

import Image from "next/image";
import Text from "../atoms/Text";
import TagList from "../molecules/TagList";
import { motion } from "framer-motion";
import Link from "next/link";

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
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", bounce: 0.5, duration: 0.4 },
        }}
        className="bg-gray-400 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden w-80 hover:scale-105 transition-transform duration-300 cursor-pointer"
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
          <Text variant="h3" className="mb-2 text-black dark:text-white">
            {title}
          </Text>
          <Text variant="body" className="text-black dark:text-white mb-4">
            {description}
          </Text>
          <TagList tags={technologies} />
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
