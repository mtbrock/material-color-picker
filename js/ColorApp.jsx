import { Component, Fragment } from 'react'
import ColorPreferences from './ColorPreferences'
import { createMuiTheme } from '@material-ui/core/styles'
import { red, blue, blueGrey, green } from '@material-ui/core/colors'
//import './ColorApp.scss'

class ColorApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeId: 'primary',
      primary: this.paletteForColor(blue[400]).primary,
      secondary: this.paletteForColor(green[300]).primary,
      accent: this.paletteForColor(blueGrey[400]).primary,
      error: this.paletteForColor(red[500]).primary,
    }
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleActiveIdChange = this.handleActiveIdChange.bind(this)
  }

  paletteForColor(color) {
    const theme = createMuiTheme({
      palette: {
        primary: { main: color },
      }
    })
    return theme.palette
  }

  handleColorChange(id, color) {
    this.setState({
      [id]: color,
    })
  }

  handleActiveIdChange(id) {
    this.setState({ activeId: id })

  }

  render() {
    return (
      <Fragment>
        <ColorPreferences onColorChange={this.handleColorChange} />
        <pre>
          <code>
            {
`$primary-color: ${this.state.primary.main};
$primary-dark-color: ${this.state.primary.dark};
$primary-light-color: ${this.state.primary.light};
$primary-contrast-color: ${this.state.primary.contrastText};

$secondary-color: ${this.state.secondary.main};
$secondary-dark-color: ${this.state.secondary.dark};
$secondary-light-color: ${this.state.secondary.light};
$secondary-contrast-color: ${this.state.secondary.contrastText};

$accent-color: ${this.state.accent.main};
$accent-dark-color: ${this.state.accent.dark};
$accent-light-color: ${this.state.accent.light};
$accent-contrast-color: ${this.state.accent.contrastText};

$error-color: ${this.state.error.main};
$error-dark-color: ${this.state.error.dark};
$error-light-color: ${this.state.error.light};
$error-contrast-color: ${this.state.error.contrastText};`
            }
          </code>
        </pre>
      </Fragment>
    )
  }
}

export default ColorApp
