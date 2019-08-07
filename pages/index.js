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

      case 'web':
        return ['previous-pad', 'previous', 'center']

      default:
        return ['previous', 'center', 'next']
    }
  }

  render = () => {
    const { currentPage, web, graphic } = this.props

    const pageClasses = this.pageClasses(currentPage)

    return (
      <Layout>
        <PageSection 
          aboutPage
          className={pageClasses[0]}
        >About</PageSection>
        <PageSection 
          className={pageClasses[1]} 
          data={graphic} 
          pageType="graphic"
        />
        <PageSection 
          className={pageClasses[2]} 
          data={web} 
          pageType="web"
        />
      </Layout>
    )
  }
}

export default connect(
  ({ assets, carousel }) => ({
    currentPage: carousel.currentPage,
    web: assets.web, 
    movementDir: carousel.movementDir,
    graphic: assets.graphic,
  }),
)(CarouselPage)