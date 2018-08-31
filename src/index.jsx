import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import 'typeface-roboto'

import reducer from '@app/reducers'
import AppContainer from '@app/AppContainer'

// Create Redux store.
const store = createStore(reducer)

// Create root div.
const root = document.createElement('div', { id: 'root' });
document.body.appendChild(root);

const load = () => render(
  (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  ),
  root,
);

// Hot module replacement
if (module.hot) {
  module.hot.accept('./', load);
}

load();
