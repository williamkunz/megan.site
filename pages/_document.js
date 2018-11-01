import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)

    return {
      ...page,
      ...styles,
    }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props

    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Megan Peterson</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="apple-touch-icon" sizes="180x180" href="/static/web-icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/web-icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/web-icons/favicon-16x16.png" />
          <link rel="manifest" href="/static/web-icons/site.webmanifest" />
          <link rel="mask-icon" href="/static/web-icons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed|Sacramento" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
