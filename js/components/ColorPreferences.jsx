import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getContrastRatio } from '@material-ui/core/styles/colorManipulator'
import { assignColor, assignActiveColorId } from '../actions'
import ColorLabel from '../ColorLabel'
import ColorIdSelector from '../ColorIdSelector'
import ColorPicker from '../ColorPicker'

const mapStateToProps = (state, props) => ({
  palette: state.palette,
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatch,
})

class ColorPreferences extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeId: 'primary',
    }
    this.handleLabelClick = this.handleLabelClick.bind(this)
    this.handlePickerClick = this.handlePickerClick.bind(this)
  }

  handlePickerClick(color) {
    this.props.dispatch(assignColor(this.state.activeId, color))
  }

  handleLabelClick(id) {
    this.setState({
      activeId: id,
    })
  }

  createColorSelector() {
    return (
      <ColorIdSelector
        activeId={this.state.activeId}
        palette={this.props.palette}
        onClick={this.handleLabelClick}
      />
    )
  }

  render() {
    return (
      <div className="color-prefs-container">
        <div className="color-prefs-label-container">
          {this.createColorSelector()}
        </div>
        <div className="color-prefs-picker-container">
          <ColorPicker onClick={this.handlePickerClick} />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPreferences)
