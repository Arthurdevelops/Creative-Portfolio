"use client";

import Image from "next/image";
import Text from "../atoms/Text";

interface Image {
  url: string;
  alt: string;
  description: string;
}

interface ThreeImagesBladeProps {
  images: Image[];
}

export default function ThreeImagesBlade({ images }: ThreeImagesBladeProps) {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <Text variant="body" className="dark:text-gray-300">
              {image.description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
