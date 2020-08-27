import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import App from './components/App/App'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import reducers from './reducers'
import * as serviceWorker from './serviceWorker'


const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const store = createStore(reducers, persistedState,)
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
// unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <Header/>
    <App />
    <Footer/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA