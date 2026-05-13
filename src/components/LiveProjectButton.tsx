import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";

type LiveProjectButtonProps = {
  className?: string;
  href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href">;

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base";

export function LiveProjectButton({
  className = "",
  href,
  ...props
}: LiveProjectButtonProps) {
  const merged = `${baseClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={merged}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        Live Project
        <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
      </a>
    );
  }

  return (
    <button
      type="button"
      className={merged}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      Live Project
      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
    </button>
  );
}
