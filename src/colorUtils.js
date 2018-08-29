import * as muiColors from '@material-ui/core/colors'
import {
  convertHexToRGB,
  darken,
  decomposeColor,
  getContrastRatio,
  lighten,
  rgbToHex as muiRgbToHex,
} from '@material-ui/core/styles/colorManipulator';

const lightText = 'rgba(0, 0, 0, 0.87)'
const darkText = 'rgb(255, 255, 255)'

export function getContrastText(background) {
  console.log(background)
  if (getContrastRatio(background, darkText) >= 3) {
    return darkText
  }
  return lightText
}

export function createColor(mainColor, rgbFormat=true) {
  const dark = darken(mainColor, .3)
  const light = lighten(mainColor, .2)
  const formatColor = (color) => {
    return color
  }
  return {
    main: formatColor(mainColor),
    dark: formatColor(dark),
    light: formatColor(light),
    contrastText: {
      main: getContrastText(mainColor),
      dark: getContrastText(dark),
      light: getContrastText(light),
    }
  }
}

export function paletteToRgb(palette) {
  Object.entries(entry => {
    const key = entry[0]
  })
}

export function paletteToHex(palette) {

}

/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */
export function rgbToHex(color) {
  // Pass hex straight through
  if (color.indexOf('#') === 0) {
    return color;
  }
  function intToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  let { values } = decomposeColor(color)
  let allSame = true
  let lastValue = values[0]
  let hexValues = values.map((n, index) => {
    if (index < 3) {
      allSame = n === lastValue
      lastValue = n
      return intToHex(n);
    }
  })

  const hexString = hexValues.join('')
  if (allSame) {
    hexString = hexString.substring(0, 3)
  }
  if (color.startsWith('rgba')) {
    return `rgba(${hexString}, ${values[3]})`
  }
  return `#${hexString}`;
}

export function hexToRgb(color) {
  if (color.startsWith('rgb')) {
    return color;
  }
  return convertHexToRGB(color)
}
