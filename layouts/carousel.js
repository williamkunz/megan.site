import React, { Component, Fragment } from 'react'
import { hydrate, injectGlobal } from 'react-emotion'

// styles 
import global from '../styles/global'
import { 
  H1Title, 
  Header, 
  MainWrapper, 
  Nav,
  NavItem,
} from './style'

if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`${ global }`

class CarouselLayout extends Component {
  render = () => {
    const { children } = this.props

    return (
      <Fragment>
        <Header>
          <H1Title>Logo</H1Title>

          <Nav>
            <NavItem className="previous">link 1</NavItem>
            <NavItem>link 2</NavItem>
            <NavItem className="next">link 3</NavItem>
          </Nav>
        </Header>
        <MainWrapper>
          {children}
        </MainWrapper>
      </Fragment>
    )
  }
}

export default CarouselLayout