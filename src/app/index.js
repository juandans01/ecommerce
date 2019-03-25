import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import GlobalStyle from './components/GlobalStyle'
import theme from './config/theme'
import axios from 'axios'

//Scenes
import Products from './scenes/products'

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_AERO_TOKEN}`

export default class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle/>
          <Header/>
          <Products/>
        </div>
      </ThemeProvider>
    )
  }
}