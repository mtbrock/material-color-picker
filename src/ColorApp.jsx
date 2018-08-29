import { Component, Fragment } from 'react'

import ColorIdSelector from '@app/ColorIdSelector'
import SwatchPicker from '@app/SwatchPicker'
import CodePreview from '@app/CodePreview'


class ColorApp extends Component {
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
    return (
      <Fragment>
        <ColorIdSelector
          activeId={this.state.activeId}
          palette={this.props.palette}
          onClick={this.handleIdClick}
        />
        <SwatchPicker onClick={this.handlePickerClick} />
        <CodePreview palette={this.props.palette} />
      </Fragment>
    )
  }
}

export default ColorApp
