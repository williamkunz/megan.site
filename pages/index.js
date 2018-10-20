import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux'

// layouts 
import Layout from '../layouts/carousel'

// components 
import PageSection from '../components/pageSection'

class CarouselPage extends PureComponent {
  componentDidMount = () => {
    console.log(this.props)
  }

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
        <PageSection className={pageClasses[0]}>About</PageSection>
        <PageSection className={pageClasses[1]}>Print</PageSection>
        <PageSection className={pageClasses[2]}>Digital</PageSection>
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