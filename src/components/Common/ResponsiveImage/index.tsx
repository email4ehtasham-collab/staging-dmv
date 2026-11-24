import type { ImgHTMLAttributes } from "react";
import imageData from "@/lib/imageData.json";

type ImageRecord = {
  width: number;
  height: number;
  srcSet: string;
};

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src?: string;
  priority?: boolean;
};

const data = imageData as Record<string, ImageRecord>;

function normalizeSrc(src?: string) {
  if (typeof src !== "string") {
    return "";
  }
  if (src.startsWith("./images/")) {
    return src.slice(1);
  }
  if (src.startsWith("../images/")) {
    return src.slice(2);
  }
  return src;
}

export default function ResponsiveImage({
  src,
  alt = "",
  priority = false,
  sizes,
  width,
  height,
  srcSet,
  loading,
  fetchPriority,
  ...rest
}: ResponsiveImageProps) {
  const meta = data[normalizeSrc(src)];
  const resolvedSrcSet = srcSet ?? meta?.srcSet;

  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      width={width ?? meta?.width}
      height={height ?? meta?.height}
      srcSet={resolvedSrcSet}
      sizes={sizes ?? (resolvedSrcSet ? "100vw" : undefined)}
      loading={priority ? "eager" : loading ?? "lazy"}
      fetchPriority={priority ? "high" : fetchPriority}
    />
  );
}
