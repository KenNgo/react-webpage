import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import todoApp from './reducers/reducers'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp)
let rootElement = document.getElementById('app')

render(
   <Provider store = {store}>
      <App />
   </Provider>,
	
   rootElement
);
registerServiceWorker();