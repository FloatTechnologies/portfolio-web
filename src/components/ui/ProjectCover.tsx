"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";
import {
  getProjectInitials,
  getProjectPlaceholderStyle,
} from "@/lib/projectPlaceholder";

type ProjectCoverProps = {
  title: string;
  image?: string;
  alt: string;
  sizes?: string;
  unoptimized?: boolean;
  imageClassName?: string;
  initialsClassName?: string;
};

export function ProjectCover({
  title,
  image,
  alt,
  sizes = "(max-width: 768px) 100vw, 33vw",
  unoptimized,
  imageClassName,
  initialsClassName,
}: ProjectCoverProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !image || failed;

  if (showPlaceholder) {
    const { background, accentColor } = getProjectPlaceholderStyle(title);
    const initials = getProjectInitials(title);

    return (
      <div className="absolute inset-0 overflow-hidden" role="img" aria-label={alt}>
        <div className="absolute inset-0" style={{ background }} />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 28% 18%, rgba(255,255,255,0.14), transparent 58%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080f]/85 via-[#06080f]/30 to-[#06080f]/10" />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <span
            aria-hidden
            className={cn(
              "font-serif text-4xl font-medium tracking-tight text-white/90 sm:text-5xl",
              initialsClassName,
            )}
            style={{ color: accentColor, textShadow: "0 8px 32px rgba(0,0,0,0.45)" }}
          >
            {initials}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={alt}
      fill
      sizes={sizes}
      unoptimized={unoptimized ?? image.endsWith(".gif")}
      className={cn("object-cover", imageClassName)}
      onError={() => setFailed(true)}
    />
  );
}
