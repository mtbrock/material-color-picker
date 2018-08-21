import {
  getContrastRatio,
  darken,
  lighten
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

export function createColor(mainColor) {
  const dark = darken(mainColor, .3)
  const light = lighten(mainColor, .2)
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
