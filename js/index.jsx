import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'typeface-roboto'; // eslint-disable-line
import App from './App';
import { create as createJss } from 'jss'
import { JssProvider } from 'react-jss'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import jssCompose from 'jss-compose'

// Configure JSS
const jss = createJss({
  plugins: [
    ...jssPreset().plugins,
    jssCompose(),
  ]
});

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();

// Create root element for React app.
const root = document.createElement('div', { id: 'root' });
document.body.appendChild(root);
const load = () => render(
  (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <App />
    </JssProvider>
  ),
  root,
);

// Hot module replacement
if (module.hot) {
  module.hot.accept('./', load);
}

load();
