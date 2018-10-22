import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

// layouts 
import Layout from '../layouts/carousel'

// components
import MainImage from '../components/mainImage'

// styles 
import { Image, Wrapper } from './style'

class FeaturePage extends PureComponent {
  render = () => {
    const { currentItem } = this.props

    return (
      <Layout>
        <Wrapper>
          <MainImage
            description={currentItem.features.description}
            image={currentItem.features.images[0]}
            name={currentItem.name}
            uniqueId={currentItem.uniqueId}
          />

          {currentItem.features.images.map((image, index) => {
            if (index === 0) return null

            return (
              <Image 
                alt={image.alt}
                key={`feature-${ index }-${ currentItem.uniqueId }`}
                src={image['1x'].replace('<uniqueId>', currentItem.uniqueId)}
                srcSet={`${ image['1x'].replace('<uniqueId>', currentItem.uniqueId) } 1x, ${ image['2x'].replace('<uniqueId>', currentItem.uniqueId) } 2x`}
              />
            )
          })}
        </Wrapper>
      </Layout>
    )
  }
}

export default connect(
  ({ assets }, { query }) => ({
    currentItem: assets[query.pageType].images.find(asset => asset.uniqueId === query.assetId),
  }),
)(withRouter(FeaturePage))