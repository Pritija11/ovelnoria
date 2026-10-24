import type { Metadata } from "next";

export const SITE_URL = "https://ovelnoria.ltd";
export const SITE_NAME = "Ovelnoria";

/**
 * Builds a page's metadata so title/description/canonical and the
 * Open Graph + Twitter card fields that mirror them can never drift
 * apart — a page that only overrode `title` would otherwise silently
 * inherit the root layout's openGraph/twitter object (and its og:url).
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  /** Short page title, e.g. "Services" — the root layout's template
   *  turns this into "Services · Ovelnoria" for the <title> tag. */
  title: string;
  description: string;
  /** Route path starting with "/", e.g. "/services". */
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const socialTitle = `${title} · ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
