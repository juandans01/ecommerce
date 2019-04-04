import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Site from './components/Site'
import theme from './config/theme'
import axios from 'axios'
import store from './redux/store'

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_AERO_TOKEN}`

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Site/>
        </ThemeProvider>
      </Provider>
    )
  }
}