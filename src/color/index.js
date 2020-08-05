import { createPalette, createColorGroup } from '@app/color/utils'
import * as formatters from '@app/color/formatPalette'

export { createColorGroup, createPalette, formatPalette }

function formatPalette(palette, formatType = 'sass') {
  let format = formatters[formatType]
  if (!format) {
    format = formatters.sass
  }
  return format(palette)
}
