import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/dharan-ms",
    logoUrl: "https://cdn.simpleicons.org/github/ffffff",
    logoAlt: "GitHub",
    bar: "from-[#24292f] to-[#6e40c9]",
    ring: "hover:border-white/[0.14] hover:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.65)]",
    iconBg: "bg-[#24292f]",
  },
  {
    label: "X",
    href: "https://x.com/shan_dharan",
    logoUrl: "https://cdn.simpleicons.org/x/ffffff",
    logoAlt: "X",
    bar: "from-zinc-900 to-zinc-600",
    ring: "hover:border-white/[0.14] hover:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.55)]",
    iconBg: "bg-black",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dharanesh-raj-028142384/",
    logoUrl: "/icons/linkedin.png",
    logoAlt: "LinkedIn",
    bar: "from-[#0a66c2] to-[#004182]",
    ring: "hover:border-[#0a66c2]/25 hover:shadow-[0_20px_50px_-28px_rgba(10,102,194,0.25)]",
    iconBg: "bg-black",
    iconRound: true,
  },
  {
    label: "Hire me",
    href: "https://www.dharanesh.xyz/",
    logoUrl: "/icons/hire-me.png",
    logoAlt: "Hire me",
    bar: "from-[#dc2626] to-[#f87171]",
    ring: "hover:border-red-500/25 hover:shadow-[0_20px_50px_-28px_rgba(239,68,68,0.25)]",
    iconBg: "bg-black",
    iconRound: true,
  },
  {
    label: "Email",
    href: "mailto:dharanesh.rajms@gmail.com",
    email: "dharanesh.rajms@gmail.com",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
    logoAlt: "Gmail",
    bar: "from-[#ea4335] to-[#fbbc04]",
    ring: "hover:border-[#ea4335]/20 hover:shadow-[0_20px_50px_-28px_rgba(234,67,53,0.2)]",
    iconBg: "bg-white",
  },
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden border-t border-white/[0.08] bg-[#060607] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
        <div className="absolute -left-28 -top-28 h-[380px] w-[380px] rounded-full bg-violet-600/18 blur-[110px]" />
        <div className="absolute -right-16 top-1/3 h-[340px] w-[340px] rounded-full bg-sky-500/14 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full bg-indigo-600/16 blur-[95px]" />
      </div>

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-xl">
        <FadeIn delay={0} duration={0.7} x={0} y={20} className="mb-12 text-center sm:mb-16">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#D7E2EA]/40">
            Get in touch
          </p>
          <h2
            className="mt-3 bg-gradient-to-b from-[#f0f4f8] to-[#9aa3b2] bg-clip-text font-black uppercase leading-none tracking-tight text-transparent"
            style={{ fontSize: "clamp(2.25rem, 7vw, 3.25rem)" }}
          >
            Contact
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#D7E2EA]/55">
            Tap a card to open the site or your inbox — no handles shown here.
          </p>
        </FadeIn>

        <ul className="flex list-none flex-col gap-3 p-0 sm:gap-3.5">
          {contactLinks.map((item, i) => (
            <FadeIn
              key={item.href}
              as="li"
              delay={0.06 + i * 0.07}
              duration={0.6}
              x={0}
              y={12}
              className="min-w-0"
            >
              <a
                href={item.href}
                aria-label={
                  item.label === "Email"
                    ? `Send email to ${item.email}`
                    : `Open ${item.label} (${item.href})`
                }
                target={
                  item.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel={
                  item.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className={`group relative flex w-full min-w-0 cursor-pointer items-center gap-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-zinc-900/35 p-3.5 shadow-sm shadow-black/30 outline-none ring-amber-300/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-px hover:border-white/[0.12] focus-visible:ring-2 sm:gap-5 sm:rounded-2xl sm:p-4 ${item.ring}`}
              >
                <span
                  className={`pointer-events-none absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b ${item.bar}`}
                  aria-hidden
                />

                <span
                  className={`relative ml-1 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden shadow-lg ring-1 ring-white/10 sm:ml-1.5 sm:h-14 sm:w-14 ${
                    "iconRound" in item && item.iconRound
                      ? "rounded-full"
                      : "rounded-xl sm:rounded-[14px]"
                  } ${item.iconBg}`}
                >
                  <img
                    src={item.logoUrl}
                    alt=""
                    width={40}
                    height={40}
                    className={
                      "iconRound" in item && item.iconRound
                        ? "h-full w-full object-cover"
                        : `object-contain ${
                            item.label === "Email"
                              ? "h-9 w-9 sm:h-10 sm:w-10"
                              : "h-7 w-7 sm:h-8 sm:w-8"
                          }`
                    }
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </span>

                <span className="min-w-0 flex-1 text-left">
                  {item.label === "Email" ? (
                    <>
                      <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#D7E2EA]/50">
                        Email
                      </span>
                      <span className="mt-1.5 block break-all text-base font-semibold leading-snug text-white sm:text-lg">
                        {item.email}
                      </span>
                    </>
                  ) : (
                    <span className="block text-lg font-semibold tracking-tight text-[#f1f5f9] transition-colors group-hover:text-white sm:text-xl">
                      {item.label}
                    </span>
                  )}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-[#D7E2EA]/55 transition-colors duration-300 group-hover:border-white/[0.14] group-hover:bg-white/[0.07] group-hover:text-[#D7E2EA] sm:h-10 sm:w-10">
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px sm:h-[18px] sm:w-[18px]"
                    aria-hidden
                  />
                </span>
              </a>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
