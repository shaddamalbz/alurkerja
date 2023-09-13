/**
 *
 * @param str
 * @returns stirng without symbol or something that make it hard to read
 */
export default function labelize(str: string) {
  const words = str
    .replace(/[_\s]+/g, ' ')
    .replace(/[^a-zA-Z0-9 ]/g, '') // remove special character
    .split(' ')
  const capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })
  const formattedText = capitalizedWords.join(' ')
  return formattedText
}
