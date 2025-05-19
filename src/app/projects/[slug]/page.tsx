import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Text from "@/app/components/atoms/Text";
import TagList from "@/app/components/molecules/TagList";
import TitleSubtitleDescriptionBlade from "@/app/components/blades/TitleSubtitleDescriptionBlade";
import TitleSubtitleDescriptionOnSideBlade from "@/app/components/blades/TitleSubtitleDescriptionOnSideBlade";
import ThreeImagesBlade from "@/app/components/blades/ThreeImagesBlade";
import { Project, Blade, ProjectsData } from "@/app/types/blades";
import projectsData from "@/app/data/projects.json";

const getProject = (slug: string): Project | undefined => {
  return (projectsData as ProjectsData).projects.find(
    (project) => project.slug === slug
  );
};

const renderBlade = (blade: Blade) => {
  switch (blade.type) {
    case "TitleSubtitleDescriptionBlade":
      return (
        <TitleSubtitleDescriptionBlade
          key={`${blade.type}-${blade.title}`}
          title={blade.title}
          subtitle={blade.subtitle}
          description={blade.description}
        />
      );
    case "TitleSubtitleDescriptionOnSideBlade":
      return (
        <TitleSubtitleDescriptionOnSideBlade
          key={`${blade.type}-${blade.title}`}
          title={blade.title}
          subtitle={blade.subtitle}
          description={blade.description}
        />
      );
    case "ThreeImagesBlade":
      return (
        <ThreeImagesBlade
          key={`${blade.type}-${blade.images[0].url}`}
          images={blade.images}
        />
      );
    default:
      return null;
  }
};

export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-white bg-gray-400 dark:bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          {/* TODO: creer le fichier svg */}
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Retour aux projets</span>
        </Link>

        <div className="mb-8">
          <Text variant="h1" className="mb-4">
            {project.title}
          </Text>
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <TagList tags={project.technologies} className="mb-6" />
        </div>

        <div className="space-y-12">
          {project.body.map((blade) => renderBlade(blade))}
        </div>
      </div>
    </main>
  );
}
