import App, { Container } from 'next/app'
import React from 'react'
import withRedux from '../store/withRedux'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'

// theme 
import theme from '../styles/theme'

class MyApp extends App {
  render = () => {
    const {
      Component,
      reduxStore,
      router,
    } = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <ThemeProvider theme={theme}>
            <Component query={router.query} />          
          </ThemeProvider>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(MyApp)