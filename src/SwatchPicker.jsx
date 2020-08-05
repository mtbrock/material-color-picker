import { Component, Fragment } from 'react'
import * as muiColors from '@material-ui/core/colors'

import '@app/styles/SwatchPicker.scss'

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
      <div className="color-button-container">
          <div
            key={key}
            style={{ backgroundColor: color }}
            className="swatch-picker-button"
            onClick={onClick}
          >
          </div>
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
      <div key={`row-${rowNum}`}className="swatch-picker-row">
        {row}
      </div>
    )
  }

  render(color) {
    let i = 0;
    return (
      <div className="swatch-picker-container">
        {colors.map(color => {
          return this.createRow(this.props, color, i++, colors.length - 3)
        })}
      </div>
    )
  }
}

export default ColorPicker
