import { FadeIn } from "../components/FadeIn";

const services = [
  {
    num: "01",
    title: "3D Modeling",
    body: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    num: "02",
    title: "Rendering",
    body: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    num: "03",
    title: "Motion Design",
    body: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    num: "04",
    title: "Branding",
    body: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
  },
  {
    num: "05",
    title: "Web Design",
    body: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="mx-auto flex w-full min-w-0 max-w-5xl flex-col items-center">
        <h2
          className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>

        <div className="w-full">
          {services.map((item, i) => (
            <FadeIn
              key={item.num}
              delay={i * 0.1}
              duration={0.7}
              className="border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10 md:gap-14">
                <div
                  className="shrink-0 font-black text-[#0C0C0C]"
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                >
                  {item.num}
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-3">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
