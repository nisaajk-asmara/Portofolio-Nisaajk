"use client";

import Image from "next/image";
import { useState } from "react";
import type { PlaceholderKind } from "@/types/portfolio";

export function ImageWithFallbackClient({
  src,
  alt,
  label,
  fallbackSrc,
  className,
  sizes,
  kind,
  available,
  priority,
}: {
  src: string;
  alt: string;
  label: string;
  fallbackSrc: string;
  className: string;
  sizes: string;
  kind: PlaceholderKind;
  available: boolean;
  priority: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const showOriginal = available && !failed;

  return (
    <div
      className={`asset-frame ${className}`}
      role={!showOriginal ? "img" : undefined}
      aria-label={!showOriginal ? `${label}. Replace image here.` : undefined}
      data-fallback={!showOriginal || undefined}
    >
      <Image
        src={showOriginal ? src : fallbackSrc}
        alt={showOriginal ? alt : ""}
        fill
        sizes={sizes}
        priority={priority}
        className={`asset-frame__image${showOriginal ? "" : " asset-frame__image--placeholder"}`}
        onError={() => {
          if (showOriginal) setFailed(true);
        }}
      />
      {!showOriginal && (
        <div className={`asset-placeholder asset-placeholder--${kind}`}>
          <span className="asset-placeholder__label">{label}</span>
          <span className="asset-placeholder__note">Replace image here</span>
        </div>
      )}
    </div>
  );
}
