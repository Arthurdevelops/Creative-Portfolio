import Rectangle from "./components/atoms/Rectangle";
import ProjectCard from "./components/atoms/ProjectCard";

const projects = [
  {
    title: "Projet 1",
    description: "Description du premier projet",
    imageUrl: "/project1.jpg",
    technologies: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Projet 2",
    description: "Description du deuxième projet",
    imageUrl: "/project2.jpg",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Projet 3",
    description: "Description du troisième projet",
    imageUrl: "/project3.jpg",
    technologies: ["Python", "Django", "PostgreSQL"],
  },
];

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-auto">
      <section className="flex flex-col items-center justify-center h-screen bg-background text-foreground snap-start">
        <div className="flex gap-3">
          <div className="flex flex-col gap-2">
            <Rectangle
              color={"bg-red-400"}
              width={"w-[120px]"}
              height={"h-[50px]"}
            ></Rectangle>
            <Rectangle
              color={"bg-amber-400"}
              width={"w-[90px]"}
              height={"h-[50px]"}
            ></Rectangle>
            <Rectangle
              color={"bg-green-400"}
              width={"w-[240px]"}
              height={"h-[50px]"}
            ></Rectangle>
          </div>
          <h1 className="font-bold">
            Welcome to my <br></br>Portfolio
          </h1>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center h-screen bg-gray-100 snap-start">
        <h2 className="text-3xl font-bold mb-8">Mes Projets</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
