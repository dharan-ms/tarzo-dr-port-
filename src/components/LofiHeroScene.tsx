import { motion } from "framer-motion";

type LofiHeroSceneProps = {
  src: string;
  alt: string;
};

const snowflakes = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 19) % 36)}%`,
  delay: (i % 5) * 0.6,
  duration: 3.5 + (i % 3),
  size: 2 + (i % 2),
}));

export function LofiHeroScene({ src, alt }: LofiHeroSceneProps) {
  return (
    <motion.div
      className="relative mx-auto"
      animate={{ y: [0, -10, 0] }}
      transition={{
        y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <motion.div
        className="relative h-[min(62vw,245px)] w-[min(62vw,245px)] overflow-hidden rounded-full sm:h-[300px] sm:w-[300px] md:h-[365px] md:w-[365px] lg:h-[430px] lg:w-[430px]"
        style={{
          boxShadow:
            "0 0 0 2px rgba(255,255,255,0.9), 0 8px 32px rgba(181, 1, 167, 0.25)",
        }}
        animate={{ scale: [1, 1.015, 1] }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <img
          src={src}
          alt={alt}
          className="lofi-hero-image pointer-events-none h-full w-full select-none object-cover object-center"
          draggable={false}
        />

        <span
          className="lofi-monitor-glow pointer-events-none absolute left-[6%] top-[32%] h-[22%] w-[28%] rounded-sm"
          aria-hidden
        />
        <span
          className="lofi-screen-glow pointer-events-none absolute left-[52%] top-[28%] h-[18%] w-[22%] rounded-sm opacity-70"
          aria-hidden
        />
        <span
          className="lofi-steam pointer-events-none absolute left-[78%] top-[62%]"
          aria-hidden
        />
        <span
          className="lofi-steam lofi-steam-delay pointer-events-none absolute left-[81%] top-[64%]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute inset-y-[8%] left-0 w-[32%] overflow-hidden rounded-full"
          aria-hidden
        >
          {snowflakes.map((flake) => (
            <span
              key={flake.id}
              className="lofi-snowflake absolute rounded-full bg-[#d4e8ff]"
              style={{
                left: flake.left,
                width: flake.size,
                height: flake.size,
                animationDelay: `${flake.delay}s`,
                animationDuration: `${flake.duration}s`,
              }}
            />
          ))}
        </span>
        <span className="lofi-avatar-glow pointer-events-none absolute inset-0 rounded-full" aria-hidden />
        <span
          className="lofi-scanlines pointer-events-none absolute inset-0 rounded-full opacity-30"
          aria-hidden
        />
      </motion.div>
    </motion.div>
  );
}
