/**
 * Convert a string into a URL-friendly slug.
 * - Removes diacritics
 * - Converts to lowercase
 * - Replaces non-alphanumeric groups with hyphens
 * - Trims leading/trailing hyphens
 */
export function slugify(text: string): string {
  return (
    text
      .toString()
      .normalize("NFD") // split accented characters into base + diacritic
      .replace(/\p{Diacritic}/gu, "") // remove diacritics (requires Unicode property escapes)
      .toLowerCase()
      .trim()
      // replace any non-alphanumeric sequence with a single hyphen
      .replace(/[^a-z0-9]+/g, "-")
      // remove leading/trailing hyphens
      .replace(/^-+|-+$/g, "")
  );
}

export default slugify;
