import {
  type ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";

type MagnetProps = {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
};

export function Magnet({
  children,
  className,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0px)");

  const handlePointerMove = useCallback(
    (clientX: number, clientY: number) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const expanded = {
        left: rect.left - padding,
        right: rect.right + padding,
        top: rect.top - padding,
        bottom: rect.bottom + padding,
      };

      const inside =
        clientX >= expanded.left &&
        clientX <= expanded.right &&
        clientY >= expanded.top &&
        clientY <= expanded.bottom;

      if (!inside) {
        setActive(false);
        setTransform("translate3d(0px, 0px, 0px)");
        return;
      }

      setActive(true);
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (clientX - cx) / strength;
      const dy = (clientY - cy) / strength;
      setTransform(`translate3d(${dx}px, ${dy}px, 0px)`);
    },
    [padding, strength]
  );

  const onPointerMove = (e: React.PointerEvent) => {
    handlePointerMove(e.clientX, e.clientY);
  };

  const onPointerLeave = () => {
    setActive(false);
    setTransform("translate3d(0px, 0px, 0px)");
  };

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{
        willChange: "transform",
        transform,
        transition: active ? activeTransition : inactiveTransition,
      }}
    >
      {children}
    </div>
  );
}
