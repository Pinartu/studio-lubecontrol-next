/**
 * Shared URL path rules for site routes (leading slash, lowercase, etc.).
 * Returns the first failing rule only.
 */

export function validateUrlPathString(val: string | undefined | null): true | string {
  if (val == null || typeof val !== 'string') {
    return 'This field is required.'
  }
  const v = val.trim()
  if (!v) {
    return 'This field is required.'
  }
  if (!v.startsWith('/')) {
    return 'URL path must start with /. Example: /products/electronics'
  }
  if (v.length > 1 && v.endsWith('/')) {
    return 'URL path must not end with /.'
  }
  if (v !== v.toLowerCase()) {
    return 'URL path must be all lowercase.'
  }
  if (/\s/.test(v)) {
    return 'URL path cannot contain spaces. Use hyphens instead.'
  }
  if (v !== '/' && !/^\/[a-z0-9-\/]+$/.test(v)) {
    return 'URL path can only contain lowercase letters, numbers, hyphens and slashes.'
  }
  return true
}

/** Internal nav paths; allows http(s), mailto, tel without path rules. */
export function validateNavHrefString(val: string | undefined | null): true | string {
  if (val == null || typeof val !== 'string') {
    return 'This field is required.'
  }
  const v = val.trim()
  if (!v) {
    return 'This field is required.'
  }
  const lower = v.toLowerCase()
  if (
    lower.startsWith('http://') ||
    lower.startsWith('https://') ||
    lower.startsWith('mailto:') ||
    lower.startsWith('tel:')
  ) {
    return true
  }
  return validateUrlPathString(v)
}

const TR_MAP: Record<string, string> = {
  ğ: 'g',
  ü: 'u',
  ş: 's',
  ı: 'i',
  ö: 'o',
  ç: 'c',
  İ: 'i',
  Ğ: 'g',
  Ü: 'u',
  Ş: 's',
  Ö: 'o',
  Ç: 'c',
}

export function transliterateTurkish(input: string): string {
  let s = input
  for (const [from, to] of Object.entries(TR_MAP)) {
    s = s.split(from).join(to)
  }
  return s
}

/** Slug segment: lowercase, hyphens, no leading slash. */
export function slugifyTitleSegment(input: string): string {
  let s = transliterateTurkish(input).toLowerCase()
  s = s.replace(/[^a-z0-9]+/g, '-')
  s = s.replace(/-+/g, '-')
  s = s.replace(/^-|-$/g, '')
  return s
}

/** Supports legacy string or slug object from productCategory.routePath. */
export function resolveRoutePathFromDoc(rp: unknown): string | undefined {
  if (rp == null) return undefined
  if (typeof rp === 'string') return rp
  if (typeof rp === 'object' && rp !== null && 'current' in rp) {
    const c = (rp as {current?: string}).current
    return typeof c === 'string' ? c : undefined
  }
  return undefined
}
