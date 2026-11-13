/** 与原站点一致，文章日期按上海时区展示。 */
export const TIME_ZONE = 'Asia/Shanghai'

export function parseSiteDate(value: unknown): number {
  if (value instanceof Date) return value.getTime()
  if (value == null || value === '') return 0
  const raw = String(value).trim()
  const normalized = raw
    .replace(
      /^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}:\d{2})(?:\s+)?([+-]\d{2}):?(\d{2})$/,
      '$1T$2$3:$4',
    )
    .replace(/^(\d{4}-\d{2}-\d{2})$/, '$1T00:00:00+08:00')
  const time = Date.parse(normalized)
  return Number.isNaN(time) ? 0 : time
}

export function formatSiteDate(value: unknown): string {
  const time = parseSiteDate(value)
  if (!time) return ''
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(time))
}
