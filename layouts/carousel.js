import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { hydrate, injectGlobal } from 'react-emotion'

// constants 
import { CHANGE_CURRENT_PAGE } from '../constants'

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
    const { children, navChange } = this.props

    return (
      <Fragment>
        <Header>
          <H1Title>MEP</H1Title>

          <Nav>
            <NavItem 
              className="previous"
              onClick={() => navChange('about')}
            >
              About
            </NavItem>
            <NavItem 
              onClick={() => navChange('graphic')}
            >
              Graphic
            </NavItem>
            <NavItem 
              className="next"
              onClick={() => navChange('web')}
            >
              Web
            </NavItem>
          </Nav>
        </Header>
        <MainWrapper>
          {children}
        </MainWrapper>
      </Fragment>
    )
  }
}

export default connect(
  ({ carousel }) => ({
    movementDir: carousel.movementDir,
  }),
  dispatch => ({
    navChange: currentPage => dispatch({
      type: CHANGE_CURRENT_PAGE,
      currentPage,
    })
  })
)(CarouselLayout)