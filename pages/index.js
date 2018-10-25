import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// layouts
import Layout from '../layouts/carousel'

// components
import PageSection from '../components/pageSection'

class CarouselPage extends PureComponent {
  pageClasses = currentPage => {
    switch(currentPage) {
      case 'about':
        return ['center', 'next', 'next-pad']

      case 'digital':
        return ['previous-pad', 'previous', 'center']

      default:
        return ['previous', 'center', 'next']
    }
  }

  render = () => {
    const { currentPage, digital, print } = this.props

    const pageClasses = this.pageClasses(currentPage)

    return (
      <Layout>
        <PageSection
          className={pageClasses[0]}
        >About</PageSection>
        <PageSection
          className={pageClasses[1]}
          data={print}
          pageType="print"
        />
        <PageSection
          className={pageClasses[2]}
          data={digital}
          pageType="digital"
        />
      </Layout>
    )
  }
}

export default connect(
  ({ assets, carousel }) => ({
    currentPage: carousel.currentPage,
    digital: assets.digital,
    movementDir: carousel.movementDir,
    print: assets.print,
  }),
)(CarouselPage)
