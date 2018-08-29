import { render } from 'react-dom'
import 'typeface-roboto'

import App from '@app/App'


const root = document.createElement('div', { id: 'root' });
document.body.appendChild(root);
const load = () => render(
  (
    <App />
  ),
  root,
);

// Hot module replacement
if (module.hot) {
  module.hot.accept('./', load);
}

load();
