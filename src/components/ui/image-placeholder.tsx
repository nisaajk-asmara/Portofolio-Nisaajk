import { existsSync } from "node:fs";
import path from "node:path";
import { ImageWithFallbackClient } from "@/components/ui/image-with-fallback-client";
import { withBasePath } from "@/lib/base-path";
import type { PlaceholderKind } from "@/types/portfolio";

const placeholderSources: Record<PlaceholderKind, string> = {
  portrait: "/images/placeholders/portrait-placeholder.svg",
  project: "/images/placeholders/project-placeholder.svg",
  research: "/images/placeholders/research-placeholder.svg",
  credential: "/images/placeholders/credential-placeholder.svg",
};

export function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  kind = "project",
  priority = false,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  sizes?: string;
  kind?: PlaceholderKind;
  priority?: boolean;
}) {
  const localPath = path.join(process.cwd(), "public", src.replace(/^\/+/, ""));
  const available = existsSync(localPath);

  return (
    <ImageWithFallbackClient
      src={withBasePath(src)}
      alt={alt}
      label={label}
      fallbackSrc={withBasePath(placeholderSources[kind])}
      className={className}
      sizes={sizes}
      kind={kind}
      available={available}
      priority={priority}
    />
  );
}
