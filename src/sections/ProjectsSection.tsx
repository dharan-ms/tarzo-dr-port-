import { type CSSProperties, type RefObject, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiveProjectButton } from "../components/LiveProjectButton";
import { type ProjectData, PROJECTS } from "../data/assets";

type ProjectStickyCardProps = {
  project: ProjectData;
  index: number;
  totalCards: number;
  containerRef: RefObject<HTMLDivElement | null>;
};

function ProjectStickyCard({
  project,
  index,
  totalCards,
  containerRef,
}: ProjectStickyCardProps) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const start = index / totalCards;
  const end = (index + 1) / totalCards;
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [1, targetScale],
    { clamp: true }
  );

  return (
    <div
      className="sticky-card sticky h-[85vh]"
      style={
        {
          zIndex: index + 1,
          ["--stack-index" as string]: `${index * 28}px`,
        } as CSSProperties & { ["--stack-index"]?: string }
      }
    >
      <motion.div
        style={{ scale }}
        className="mx-auto flex h-full w-full min-w-0 max-w-6xl origin-top flex-col gap-6 rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:gap-8 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap items-end gap-4 sm:gap-8">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 pb-1">
              <span className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/70 sm:text-base">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.url} className="shrink-0 self-start sm:self-auto" />
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 sm:grid-cols-[40%_60%] sm:gap-5 md:gap-6">
          <div className="flex min-h-0 flex-col gap-4 sm:gap-5 md:gap-6">
            <div
              className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            >
              <img
                src={project.col1a}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="min-h-0 flex-1 overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            >
              <img
                src={project.col1b}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="min-h-0 overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
            <img
              src={project.col2}
              alt=""
              className="h-full min-h-[280px] w-full object-cover sm:min-h-0"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const total = PROJECTS.length;

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"
    >
      <div className="mx-auto w-full min-w-0 px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 md:px-10 md:pb-32 md:pt-24">
        <h2
          className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16 md:mb-20"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>

        <div ref={containerRef} className="w-full min-w-0">
          {PROJECTS.map((project, index) => (
            <ProjectStickyCard
              key={project.name}
              project={project}
              index={index}
              totalCards={total}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
