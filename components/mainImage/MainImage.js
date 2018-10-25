import React from 'react'
import PropTypes from 'prop-types'

// style
import { Header } from './style'

export default ({
  description,
  image,
  name,
  uniqueId,
}) => (
  <Header>
    <img
      alt={image.alt}
      src={image['1x'].replace('<uniqueId>', uniqueId)}
      srcSet={`${ image['1x'].replace('<uniqueId>', uniqueId) } 1x, ${ image['2x'].replace('<uniqueId>', uniqueId) } 2x`}
    />

    <h1>{name}</h1>

    <p dangerouslySetInnerHTML={{ __html: description }} />
  </Header>
)