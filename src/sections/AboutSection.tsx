import { FadeIn } from "../components/FadeIn";
import { AnimatedText } from "../components/AnimatedText";
import { ContactButton } from "../components/ContactButton";
import { ABOUT_DECOR } from "../data/assets";

const aboutParagraph =
  "I am a Full Stack Web Developer specializing in building complete, modern, and responsive web applications from start to finish.\n\nI handle both frontend (UI/UX design) and backend development, ensuring your website is fast, secure, scalable, and user-friendly.\n\nI create powerful digital solutions for businesses, startups, and personal brands that want a strong online presence.";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-x-clip px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn
        delay={0.1}
        duration={0.9}
        x={-80}
        y={0}
        className="pointer-events-none absolute left-[1%] top-[4%] z-0 w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
      >
        <img src={ABOUT_DECOR.moon} alt="" className="h-auto w-full" draggable={false} />
      </FadeIn>

      <FadeIn
        delay={0.25}
        duration={0.9}
        x={-80}
        y={0}
        className="pointer-events-none absolute bottom-[8%] left-[3%] z-0 w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
      >
        <img
          src={ABOUT_DECOR.objectLeft}
          alt=""
          className="h-auto w-full"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        duration={0.9}
        x={80}
        y={0}
        className="pointer-events-none absolute right-[1%] top-[4%] z-0 w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
      >
        <img src={ABOUT_DECOR.lego} alt="" className="h-auto w-full" draggable={false} />
      </FadeIn>

      <FadeIn
        delay={0.3}
        duration={0.9}
        x={80}
        y={0}
        className="pointer-events-none absolute bottom-[8%] right-[3%] z-0 w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
      >
        <img
          src={ABOUT_DECOR.groupRight}
          alt=""
          className="h-auto w-full"
          draggable={false}
        />
      </FadeIn>

      <div className="relative z-10 flex w-full min-w-0 max-w-2xl flex-col items-center gap-10 px-1 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} duration={0.7} x={0} y={40} className="w-full min-w-0">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex w-full min-w-0 flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={aboutParagraph}
            className="w-full text-balance text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />
          <ContactButton href="#contact" />
        </div>
      </div>
    </section>
  );
}
