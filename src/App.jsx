import { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AppContainer from '@app/AppContainer'
import rootReducer from '@app/reducers'
import '@app/styles/App.scss'


const store = createStore(rootReducer)

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <div className="app-container">
          <AppContainer />
        </div>
      </Provider>
    )
  }
}
