import { FadeIn } from "../components/FadeIn";
import { LofiHeroScene } from "../components/LofiHeroScene";
import { HERO_LOFI_SCENE_URL } from "../data/assets";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Price", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-0 flex-col overflow-x-clip">
      <FadeIn
        as="nav"
        className="relative z-30 flex justify-between px-6 pt-6 md:px-10 md:pt-8"
        delay={0}
        duration={0.7}
        x={0}
        y={-20}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="overflow-visible px-6 md:px-10">
          <FadeIn delay={0.15} duration={0.7} x={0} y={40}>
            <h1 className="hero-heading mt-4 w-full whitespace-nowrap font-black uppercase leading-none tracking-tight text-[#D7E2EA] text-[8.5vw] sm:mt-5 sm:text-[9.5vw] md:mt-6 md:text-[10.5vw] lg:text-[11.5vw]">
              Hi, i&apos;m <span className="hero-name-3d">Dharan</span>
            </h1>
          </FadeIn>
        </div>

        <FadeIn
          delay={0.6}
          duration={0.9}
          x={0}
          y={24}
          className="absolute left-[calc(50%+10px)] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:translate-y-0 md:left-[calc(50%+14px)]"
        >
          <LofiHeroScene
            src={HERO_LOFI_SCENE_URL}
            alt="Lofi coding scene"
          />
        </FadeIn>

        <div className="relative z-20 mt-auto mb-14 px-6 sm:mb-20 sm:px-8 md:mb-24 md:px-10 lg:mb-28">
          <FadeIn
            delay={0.35}
            duration={0.7}
            x={0}
            y={20}
            className="hero-intro-text min-w-0 max-w-[min(100%,19rem)] space-y-3 sm:max-w-sm sm:space-y-3.5 md:max-w-md"
          >
            <p className="m-0">
              Full Stack Developer specialized in building fast, responsive, and{" "}
              <span className="hero-intro-accent hero-intro-accent--cyan">scalable</span> web
              applications.
            </p>
            <p className="m-0">
              Experienced with modern{" "}
              <span className="hero-intro-accent hero-intro-accent--purple">JavaScript</span>{" "}
              frameworks, backend APIs, databases, and cloud technologies.
            </p>
            <p className="m-0">
              Passionate about writing{" "}
              <span className="hero-intro-accent hero-intro-accent--pink">clean</span>, efficient,
              and maintainable code.
            </p>
            <p className="m-0">
              Always learning new technologies and building{" "}
              <span className="hero-intro-accent hero-intro-accent--amber">impactful</span> digital
              products.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
