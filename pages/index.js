import React, { Fragment, PureComponent } from 'react'

// layouts 
import Layout from '../layouts/carousel'

// styles 
import { PageSection } from './style'

class CarouselPage extends PureComponent {
  render = () => {

    return (
      <Layout>
        <Fragment>
          <PageSection className="previous">1</PageSection>
          <PageSection className="center">2</PageSection>
          <PageSection className="next">3</PageSection>
        </Fragment>
      </Layout>
    )
  }
}

export default CarouselPage