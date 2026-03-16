import Image from "next/image";

import { cn } from "@/lib/utils";

type ShowcaseImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectClassName?: string;
  priority?: boolean;
};

export function ShowcaseImage({
  src,
  alt,
  className,
  imageClassName,
  aspectClassName,
  priority = false,
}: ShowcaseImageProps) {
  const isSvg = src.endsWith(".svg");

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))] shadow-[0_24px_70px_-52px_rgba(11,31,51,0.35)]",
        className,
      )}
    >
      <div className={cn("relative aspect-[16/10] w-full", aspectClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          unoptimized={isSvg}
          className={cn("object-cover object-top", imageClassName)}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
        />
      </div>
    </div>
  );
}
