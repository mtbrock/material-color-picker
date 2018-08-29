import { Component, Fragment } from 'react'
import ColorPreferences from './ColorPreferences'
import CodePreview from '../components/CodePreview'
import { createMuiTheme } from '@material-ui/core/styles'
import { red, blue, blueGrey, green } from '@material-ui/core/colors'
import { assignColor, assignActiveColorId } from '../actions'
import { connect } from 'react-redux'
//import './ColorApp.scss'

const mapStateToProps = (state, props) => ({
  palette: state.palette,
})


const mapDispatchToProps = (dispatch, props) => ({
  onColorChange: (color) => {
    dispatch(assignColor(props.activeId, color))
  },
  onActiveIdChange: (id) => {
    dispatch(assignActiveColorId(id))
  },
})

class ColorApp extends Component {
  constructor(props) {
    super(props)
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
    console.log('change from ca')
  }

  handleActiveIdChange(id) {
    this.setState({ activeId: id })
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <ColorPreferences onColorChange={this.handleColorChange} />
        <CodePreview palette={this.props.palette} />
      </Fragment>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorApp)
