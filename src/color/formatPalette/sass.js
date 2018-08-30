import {rgbToHex as formatColor} from '@app/color/utils'

export { format }

export default function format(palette) {
  let codeBlocks = []
  for (var [colorId, color] of Object.entries(palette)) {
    codeBlocks.push(`$${colorId}-color: ${formatColor(color.main)};\n` +
      `$${colorId}-dark-color: ${formatColor(color.dark)};\n` +
      `$${colorId}-light-color: ${formatColor(color.light)};\n` +
      `$${colorId}-text-color: ${formatColor(color.contrastText.main)};\n`)
  }
  return codeBlocks.join('\n')
}
