import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getContrastRatio } from '@material-ui/core/styles/colorManipulator'
import { assignColor, assignActiveColorId } from '../actions'
import ColorLabel from '../ColorLabel'
import ColorPicker from '../ColorPicker'
//import './ColorApp.scss'

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

  createColorLabel(id) {
    return (
      <ColorLabel
        active={this.state.activeId === id}
        color={this.props.palette[id]}
        colorKey={id}
        key={id}
        onClick={this.handleLabelClick}
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
