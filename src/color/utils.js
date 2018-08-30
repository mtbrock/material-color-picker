import { red, blue, blueGrey, green } from '@material-ui/core/colors'
import {
  convertHexToRGB,
  darken,
  decomposeColor,
  getContrastRatio,
  lighten,
} from '@material-ui/core/styles/colorManipulator';

export {
  createColorGroup,
  createPalette,
  darken,
  decomposeColor,
  getContrastText,
  hexToRgb,
  lighten,
  rgbToHex,
}


function createColorGroup(mainColor) {
  const dark = darken(mainColor, .3)
  const light = lighten(mainColor, .2)
  const formatColor = (color) => {
    return color
  }
  return {
    main: mainColor,
    dark: dark,
    light: light,
    contrastText: {
      main: getContrastText(mainColor),
      dark: getContrastText(dark),
      light: getContrastText(light),
    }
  }
}

function createPalette(palette = {}) {
  return Object.assign(palette, {
    primary: createColorGroup(blue[600]),
    secondary: createColorGroup(blueGrey[600]),
    accent: createColorGroup(blue[300]),
    error: createColorGroup(red[600]),
  })
}

function hexToRgb(color) {
  if (color.startsWith('rgb')) {
    return color;
  }
  let colorString = color.substr(1);

  let alphaString = ''
  if (colorString.length % 4 === 0) {
    alphaString = colorString.substr(0, colorString.length / 4)
    colorString = colorString.substr(colorString.length / 4)
  }

  const re = new RegExp(`.{1,${colorString.length / 3}}`, 'g');
  let colors = colorString.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }

  const rgb = colors.map(n => parseInt(n, 16)).join(', ')
  if (alphaString) {
    const alphaDecimal = parseInt(n, 16) / 255.0
    return `rgba(${rgb}, ${alphaDecimal})`;
  } else {
    return `rgb(${rgb})`;
  }
}

/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */
function rgbToHex(color) {
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
      allSame = n == lastValue && allSame
      lastValue = n
      return intToHex(n);
    }
  })

  let hexString = hexValues.join('')
  if (allSame) {
    hexString = hexString.substring(0, 3)
  }
  if (color.startsWith('rgba')) {
    return `rgba(#${hexString}, ${values[3]})`
  }
  return `#${hexString}`;
}

function getContrastText(background) {
  const lightText = 'rgba(0, 0, 0, 0.87)'
  const darkText = 'rgb(255, 255, 255)'
  if (getContrastRatio(background, darkText) >= 3) {
    return darkText
  }
  return lightText
}
