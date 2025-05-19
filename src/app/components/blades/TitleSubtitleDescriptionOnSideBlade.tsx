"use client";

import Text from "../atoms/Text";

interface TitleSubtitleDescriptionOnSideBladeProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function TitleSubtitleDescriptionOnSideBlade({
  title,
  subtitle,
  description,
}: TitleSubtitleDescriptionOnSideBladeProps) {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="my-auto">
          <Text variant="h2" className="dark:text-white mb-2">
            {title}
          </Text>
          <Text variant="h3" className="dark:text-gray-400">
            {subtitle}
          </Text>
        </div>
        <div className="bg-gray-400 dark:bg-gray-800/50 p-6 rounded-lg">
          <Text variant="body" className="text-white dark:text-gray-300">
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
}
