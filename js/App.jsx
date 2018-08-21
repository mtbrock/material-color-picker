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
import ColorApp from './containers/ColorApp'
import ColorPreferences from './ColorPreferences'
import './App.scss'
import Rt from './Rt'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <div className="app-container">
          <ColorApp />
        </div>
      </Provider>
    )
  }
}
