export default function (format: string) {
  const result = format
    .replace(/Y/i, 'YYYY')
    .replace(/m/i, 'MM')
    .replace(/d/i, 'DD')
    .replace(/H/i, 'HH')
    .replace(/i/i, 'mm')
    .replace(/s/i, 'ss')

  return result
}
