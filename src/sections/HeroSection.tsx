import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { ContactButton } from "../components/ContactButton";
import { PORTRAIT_URL } from "../data/assets";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Price", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const heroIntroParagraphs = [
  "Full Stack Developer specialized in building fast, responsive, and scalable web applications.",
  "Experienced with modern JavaScript frameworks, backend APIs, databases, and cloud technologies.",
  "Passionate about writing clean, efficient, and maintainable code.",
  "Always learning new technologies and building impactful digital products.",
];

export function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-0 flex-col overflow-x-clip">
      <FadeIn
        as="nav"
        className="flex justify-between px-6 pt-6 md:px-10 md:pt-8"
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
        <div className="overflow-hidden">
          <FadeIn delay={0.15} duration={0.7} x={0} y={40}>
            <h1 className="hero-heading mt-6 w-full whitespace-nowrap font-black uppercase leading-none tracking-tight text-[8.5vw] sm:mt-4 sm:text-[9.5vw] md:-mt-5 md:text-[10.5vw] lg:text-[11.5vw]">
              Hi, i&apos;m Dharan
            </h1>
          </FadeIn>
        </div>

        <Magnet
          className="pointer-events-auto absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <FadeIn delay={0.6} duration={0.7} x={0} y={30} className="block">
            <img
              src={PORTRAIT_URL}
              alt="Dharan portrait"
              className="pointer-events-none mx-auto block h-auto w-full max-w-none select-none"
              draggable={false}
            />
          </FadeIn>
        </Magnet>

        <div className="relative z-20 mt-auto flex min-w-0 items-end justify-between gap-4 px-6 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
          <FadeIn delay={0.35} duration={0.7} x={0} y={20} className="min-w-0 shrink">
            <div
              className="max-w-[min(100%,18rem)] space-y-2.5 font-light normal-case leading-relaxed tracking-normal text-[#D7E2EA] sm:max-w-xs sm:space-y-3 md:max-w-sm"
              style={{ fontSize: "clamp(0.7rem, 1.35vw, 0.95rem)" }}
            >
              {heroIntroParagraphs.map((text) => (
                <p key={text} className="m-0">
                  {text}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.5} duration={0.7} x={0} y={20} className="shrink-0">
            <ContactButton href="#contact" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
