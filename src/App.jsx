import { Component, Fragment } from 'react'

import ColorIdSelector from '@app/ColorIdSelector'
import SwatchPicker from '@app/SwatchPicker'
import CodePreview from '@app/CodePreview'
import {formatPalette} from '@app/color'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeId: 'primary',
    }
    this.handleIdClick = this.handleIdClick.bind(this)
    this.handlePickerClick = this.handlePickerClick.bind(this)
  }

  handlePickerClick(color) {
    this.props.onColorChange(this.state.activeId, color)
  }

  handleIdClick(id) {
    this.setState({
      activeId: id,
    })
  }

  render() {
    const code = formatPalette(this.props.palette)
    return (
      <div className="app-container">
        <ColorIdSelector
          activeId={this.state.activeId}
          palette={this.props.palette}
          onClick={this.handleIdClick}
        />
        <SwatchPicker onClick={this.handlePickerClick} />
        <CodePreview code={code} />
      </div>
    )
  }
}

export default App
