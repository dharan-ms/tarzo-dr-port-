import { motion, useSpring, useTransform } from "framer-motion";
import { useCallback, useRef } from "react";

type FloatingPortraitProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export function FloatingPortrait({
  src,
  alt,
  className = "",
  imgClassName = "",
}: FloatingPortraitProps) {
  const ref = useRef<HTMLDivElement>(null);
  const pointerX = useSpring(0, { stiffness: 120, damping: 22, mass: 0.4 });
  const pointerY = useSpring(0, { stiffness: 120, damping: 22, mass: 0.4 });

  const rotateX = useTransform(pointerY, [-1, 1], [6, -6]);
  const rotateY = useTransform(pointerX, [-1, 1], [-6, 6]);
  const shiftX = useTransform(pointerX, [-1, 1], [-18, 18]);
  const shiftY = useTransform(pointerY, [-1, 1], [-12, 12]);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    pointerX.set(nx);
    pointerY.set(ny);
  }, [pointerX, pointerY]);

  const resetPointer = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return (
    <motion.div
      ref={ref}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={{ perspective: 1200 }}
      animate={{ y: [0, -16, 0] }}
      transition={{
        y: {
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: shiftX,
          y: shiftY,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={src}
          alt={alt}
          className={imgClassName}
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}
