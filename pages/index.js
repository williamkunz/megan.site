import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// layouts 
import Layout from '../layouts/carousel'

// components 
import PageSection from '../components/pageSection'

// json
import digitalJson from '../constants/digital'
import printJson from '../constants/print'

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
    const { currentPage } = this.props

    const pageClasses = this.pageClasses(currentPage)

    return (
      <Layout>
        <PageSection 
          className={pageClasses[0]}
        >About</PageSection>
        <PageSection 
          className={pageClasses[1]} 
          data={printJson} 
          pageType="print"
        />
        <PageSection 
          className={pageClasses[2]} 
          data={digitalJson} 
          pageType="digital"
        />
      </Layout>
    )
  }
}

export default connect(
  ({ carousel }) => ({
    currentPage: carousel.currentPage,
    movementDir: carousel.movementDir,
  }),
)(CarouselPage)