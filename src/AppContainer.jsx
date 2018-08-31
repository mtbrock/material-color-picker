import { connect } from 'react-redux'

import { assignColor } from '@app/actions'
import App from '@app/App'
import '@app/styles/App.scss'


const mapStateToProps = (state, props) => ({
  palette: state.palette,
})

const mapDispatchToProps = (dispatch, props) => ({
  onColorChange: (id, color) => {
    dispatch(assignColor(id, color))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
