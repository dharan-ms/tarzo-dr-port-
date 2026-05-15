import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Mail } from "lucide-react";
import {
  heroCircleButtonClass,
  heroCircleButtonStyle,
  heroCircleIconClass,
} from "./heroButtonStyles";

type ContactButtonProps = {
  className?: string;
  href?: string;
  variant?: "pill" | "circle";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href">;

const pillClass =
  "relative inline-flex items-center justify-center rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base";

const pillStyle = {
  background:
    "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
  boxShadow:
    "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1, 0 0 0 2px white",
  outline: "2px solid white",
  outlineOffset: "-3px",
} as const;

export function ContactButton({
  className = "",
  href,
  variant = "pill",
  ...props
}: ContactButtonProps) {
  if (variant === "circle") {
    const circleMerged = `${heroCircleButtonClass} ${className}`.trim();

    if (href) {
      return (
        <a
          href={href}
          className={circleMerged}
          style={heroCircleButtonStyle}
          aria-label="Contact"
          title="Contact"
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          <Mail className={heroCircleIconClass} aria-hidden />
        </a>
      );
    }

    return (
      <button
        type="button"
        className={circleMerged}
        style={heroCircleButtonStyle}
        aria-label="Contact"
        title="Contact"
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        <Mail className={heroCircleIconClass} aria-hidden />
      </button>
    );
  }

  const merged = `${pillClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={merged}
        style={pillStyle}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        Contact
      </a>
    );
  }

  return (
    <button
      type="button"
      className={merged}
      style={pillStyle}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      Contact
    </button>
  );
}
