import { type CSSProperties, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = useMemo(() => Array.from(text), [text]);
  const total = Math.max(chars.length, 1);

  return (
    <p
      ref={containerRef}
      className={`relative w-full min-w-0 break-words text-pretty ${className ?? ""}`}
      style={style}
    >
      {chars.map((char, i) => (
        <CharSpan
          key={`${i}-${char}`}
          char={char}
          index={i}
          total={total}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}

function CharSpan({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  if (char === "\n") {
    return <br />;
  }

  const display = char;

  return (
    <span className="relative inline">
      <span className="invisible select-none" aria-hidden>
        {display}
      </span>
      <motion.span
        className="pointer-events-none absolute left-0 top-0 inline-block whitespace-pre"
        style={{ opacity }}
      >
        {display}
      </motion.span>
    </span>
  );
}
