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
    <section className="relative flex min-h-[100dvh] flex-col overflow-x-clip md:h-screen md:min-h-0">
      <FadeIn
        as="nav"
        className="relative z-30 grid grid-cols-4 items-center gap-1 px-4 pt-5 sm:gap-2 sm:px-6 sm:pt-6 md:flex md:justify-between md:px-10 md:pt-8"
        delay={0}
        duration={0.7}
        x={0}
        y={-20}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-center text-[0.65rem] font-medium uppercase tracking-wide text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-sm md:text-left md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="relative flex flex-1 flex-col gap-6 overflow-hidden px-4 pb-10 pt-2 sm:gap-8 sm:px-6 sm:pb-12 md:min-h-0 md:gap-0 md:px-0 md:pb-0 md:pt-0">
        <div className="overflow-visible md:px-10">
          <FadeIn delay={0.15} duration={0.7} x={0} y={40}>
            <h1 className="hero-heading mt-2 w-full text-center font-black uppercase leading-[0.95] tracking-tight text-[#D7E2EA] text-[clamp(1.75rem,8.5vw,3.25rem)] sm:mt-4 sm:leading-none md:mt-6 md:text-left md:text-[10.5vw] md:whitespace-nowrap lg:text-[11.5vw]">
              Hi, i&apos;m <span className="hero-name-3d">Dharan</span>
            </h1>
          </FadeIn>
        </div>

        <FadeIn
          delay={0.6}
          duration={0.9}
          x={0}
          y={24}
          className="relative z-10 flex shrink-0 justify-center md:absolute md:left-[calc(50%+14px)] md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
        >
          <LofiHeroScene src={HERO_LOFI_SCENE_URL} alt="Lofi coding scene" />
        </FadeIn>

        <div className="relative z-20 mt-auto md:mb-24 md:px-10 lg:mb-28">
          <FadeIn
            delay={0.35}
            duration={0.7}
            x={0}
            y={20}
            className="hero-intro-text mx-auto min-w-0 max-w-md space-y-3 text-center text-white sm:space-y-3.5 md:mx-0 md:max-w-md md:text-left"
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
