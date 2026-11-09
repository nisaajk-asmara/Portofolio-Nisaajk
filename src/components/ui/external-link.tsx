import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/utils";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string | null;
  children: ReactNode;
  className?: string;
  disabledLabel?: string;
  direction?: "up" | "down";
};

export function ExternalLink({
  href,
  children,
  className,
  disabledLabel = "Coming soon",
  direction = "up",
  ...props
}: Props) {
  if (!href) {
    return (
      <button className={cx("button-link", "button-link--disabled", className)} type="button" disabled title={disabledLabel}>
        <span>{children}</span>
        <small>{disabledLabel}</small>
      </button>
    );
  }

  const Icon = direction === "down" ? ArrowDownRight : ArrowUpRight;

  return (
    <a
      href={href}
      className={cx("button-link", className)}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      {...props}
    >
      {children}
      <Icon aria-hidden="true" size={13} strokeWidth={1.7} />
    </a>
  );
}
