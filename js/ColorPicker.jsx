import { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles'
import * as muiColors from '@material-ui/core/colors'
import TouchRipple from '@material-ui/core/ButtonBase'
import './ColorPicker.scss'

const colors = [
  muiColors.pink,
  muiColors.red,
  muiColors.deepOrange,
  muiColors.orange,
  muiColors.amber,
  muiColors.yellow,
  muiColors.lime,
  muiColors.lightGreen,
  muiColors.green,
  muiColors.teal,
  muiColors.cyan,
  muiColors.lightBlue,
  muiColors.blue,
  muiColors.indigo,
  muiColors.purple,
  muiColors.deepPurple,
  muiColors.blueGrey,
  muiColors.brown,
  muiColors.grey,
]

class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.ignores = ['dark', 'light', 'main', 'contrastText']
    this.noAccentsAfter = colors.length - 3
  }

  createColorButton(props, color, key) {
    const onClick = event => {
      props.onClick(color)
    }
    return (
      <div
        key={key}
        style={{ backgroundColor: color }}
        className="color-picker-button"
        onClick={onClick}
      >
      </div>
    )
  }

  createRow(props, colorArray, rowNum) {
    let row = [];
    for (let key in colorArray) {
      const ignore = rowNum >= this.noAccentsAfter && key.startsWith('A')
      let rid = `color${rowNum}-${key}`
      if (!ignore && !this.ignores.includes(key)) {
        const color = colorArray[key]
        row.push(this.createColorButton(props, color, rid))
      }
    }
    return (
      <div key={`row-${rowNum}`}className="color-picker-row">
        {row}
      </div>
    )
  }

  render(color) {
    let i = 0;
    return (
      <div className="color-picker-container">
        {colors.map(color => {
          return this.createRow(this.props, color, i++, colors.length - 3)
        })}
      </div>
    )
  }
}

export default ColorPicker
