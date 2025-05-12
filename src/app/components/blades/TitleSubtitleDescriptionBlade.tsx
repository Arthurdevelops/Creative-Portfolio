"use client";

import Text from "../atoms/Text";

interface TitleSubtitleDescriptionBladeProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function TitleSubtitleDescriptionBlade({
  title,
  subtitle,
  description,
}: TitleSubtitleDescriptionBladeProps) {
  return (
    <div className="mb-12">
      <Text variant="h2" className="text-white mb-2">
        {title}
      </Text>
      <Text variant="h3" className="text-gray-400 mb-4">
        {subtitle}
      </Text>
      <Text variant="body" className="text-gray-300">
        {description}
      </Text>
    </div>
  );
}
