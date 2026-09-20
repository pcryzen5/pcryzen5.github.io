/**
 * Utility to optimize external image URLs via Cloudflare-backed wsrv.nl CDN proxy.
 * Converts heavy raw camera photos (3MB+) into lightweight WebP thumbnails (~15KB).
 */
export function getOptimizedImageUrl(url, options = {}) {
  if (!url || typeof url !== "string") return url;

  // Local assets or SVGs don't need external CDN proxying
  if (url.startsWith("/") || url.startsWith("data:") || url.endsWith(".svg")) {
    return url;
  }

  const {
    width = 360,
    height = 360,
    quality = 80,
    fit = "cover",
    format = "webp",
  } = options;

  // If already proxied, avoid double proxying
  if (url.includes("wsrv.nl")) {
    return url;
  }

  const params = new URLSearchParams();
  params.set("url", url);
  if (width) params.set("w", width.toString());
  if (height) params.set("h", height.toString());
  if (fit) params.set("fit", fit);
  if (quality) params.set("q", quality.toString());
  if (format) params.set("output", format);

  return `https://wsrv.nl/?${params.toString()}`;
}

export function getLightboxImageUrl(url, maxWidth = 1200, quality = 85) {
  if (!url || typeof url !== "string") return url;
  if (url.startsWith("/") || url.startsWith("data:") || url.endsWith(".svg")) {
    return url;
  }
  if (url.includes("wsrv.nl")) return url;

  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${maxWidth}&fit=contain&q=${quality}&output=webp`;
}
