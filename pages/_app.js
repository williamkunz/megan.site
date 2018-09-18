import App, { Container } from 'next/app'
import React from 'react'
import { initStore } from '../store'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { ThemeProvider } from 'emotion-theming'

// theme 
import theme from '../styles/theme'

class MyApp extends App {
  render = () => {
    const {
      Component,
      pageProps,
      router,
      store,
    } = this.props

    return (
      <Container>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Component />          
          </ThemeProvider>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initStore)(MyApp)