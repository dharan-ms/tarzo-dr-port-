import { useEffect, useRef, useState } from "react";
import { MARQUEE_ROW1, MARQUEE_ROW2 } from "../data/assets";

function triple<T>(arr: readonly T[]): T[] {
  return [...arr, ...arr, ...arr];
}

type MarqueeRowProps = {
  images: readonly string[];
  direction: "right" | "left";
  sectionTop: number;
  scrollY: number;
  innerHeight: number;
};

function MarqueeRow({
  images,
  direction,
  sectionTop,
  scrollY,
  innerHeight,
}: MarqueeRowProps) {
  const baseOffset =
    (scrollY - sectionTop + innerHeight) * 0.3;
  const translate =
    direction === "right"
      ? baseOffset - 200
      : -(baseOffset - 200);

  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translateX(${translate}px)`,
        willChange: "transform",
      }}
    >
      {triple(images).map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt=""
          loading="lazy"
          width={420}
          height={270}
          className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
        />
      ))}
    </div>
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionTop, setSectionTop] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [innerHeight, setInnerHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  useEffect(() => {
    const measureTop = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionTop(rect.top + window.scrollY);
      }
    };

    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    const onResize = () => {
      setInnerHeight(window.innerHeight);
      measureTop();
    };

    measureTop();
    setScrollY(window.scrollY);
    setInnerHeight(window.innerHeight);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3 overflow-x-clip">
        <MarqueeRow
          images={MARQUEE_ROW1}
          direction="right"
          sectionTop={sectionTop}
          scrollY={scrollY}
          innerHeight={innerHeight}
        />
        <MarqueeRow
          images={MARQUEE_ROW2}
          direction="left"
          sectionTop={sectionTop}
          scrollY={scrollY}
          innerHeight={innerHeight}
        />
      </div>
    </section>
  );
}
