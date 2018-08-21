import { Component, Fragment } from 'react'
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
import { red, blue, blueGrey, green } from '@material-ui/core/colors'
import * as muiColors from '@material-ui/core/colors'
import Button from '@material-ui/core/Button'
import TouchRipple from '@material-ui/core/ButtonBase'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import Slider from '@material-ui/lab/Slider'
import ColorLabel from './ColorLabel'
import ColorPicker from './ColorPicker'
import './App.scss'

class ColorPreferences extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeId: 'primary',
      primary: this.paletteForColor(blue[300]),
      secondary: this.paletteForColor(green[300]),
      accent: this.paletteForColor(blueGrey[500]),
      error: this.paletteForColor(red[500]),
      palette: this.paletteForColor(red[500]),
    }
    this.onColorClick = this.onColorClick.bind(this)
    this.onLabelClick = this.onLabelClick.bind(this)
  }

  onLabelClick(event, id) {
    this.setState({
      activeId: id,
    })
  }

  paletteForColor(color) {
    const theme = createMuiTheme({
      palette: {
        primary: { main: color },
      }
    })
    return theme.palette
  }

  onColorClick(event, color) {
    const palette = this.paletteForColor(color)
    this.props.onColorChange([this.state.activeId], palette.primary.main)
    this.setState((prevState, props) => ({
      [prevState.activeId]: palette,
    }))
  }

  createColorLabel(id) {
    return (
      <ColorLabel
        active={this.state.activeId === id}
        palette={this.state.palette}
        color={this.state[id].primary.main}
        colorKey={id}
        key={id}
        onClick={this.onLabelClick}
        children={id}
      />
    )
  }

  render() {
    return (
      <div className="color-prefs-container">
        <div className="color-prefs-label-container">
          {this.createColorLabel('primary')}
          {this.createColorLabel('secondary')}
          {this.createColorLabel('accent')}
          {this.createColorLabel('error')}
        </div>
        <div className="color-prefs-picker-container">
          <ColorPicker onClick={this.onColorClick} />
        </div>
      </div>
    )
  }
}

export default ColorPreferences
