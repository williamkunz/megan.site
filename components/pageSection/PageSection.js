import React from 'react'
import { Link } from '../../routes'

import { Grid, Wrapper } from './style'

export default ({ 
  className, 
  data = {}, 
  pageType,
}) => {
  if (!data.images) {  
    return (
      <Wrapper className={className} />
    )
  }

  return (
    <Wrapper className={className}>
      <Grid>
        {data.images.map(({ name, thumbnail, uniqueId }, index) => {
          const src = {
            '1x': thumbnail['1x'].replace('<uniqueId>', uniqueId),
            '2x': thumbnail['2x'].replace('<uniqueId>', uniqueId),
          }


          return (
            <Link route={`/${ pageType }/${ uniqueId }`}>
              <a title={name}>
                <img 
                  alt={thumbnail.alt}
                  src={src['1x']}
                  srcSet={`${ src['1x'] } 1x, ${ src['2x'] } 2x`}
                />
                <p>{name}</p>
              </a>
            </Link>
          )
        })}
      </Grid>
    </Wrapper>
  )
}

