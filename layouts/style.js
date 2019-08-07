import styled from 'react-emotion'

export const Header = styled('header')`
  left: 0;
  position: absolute;
  right: 0;
`

export const H1Title = styled('h1')`
  font-family: 'Sacramento', cursive;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 10rem;
  width: 30rem;
  z-index: 1;
  font-size: 7rem;

  & a {
    color: ${ ({ theme }) => theme.black };
    font-size: 5rem;
    text-decoration: none;
    user-select: none;
  }
`

export const MainWrapper = styled('main')`
  background-color: ${ ({ theme }) => theme.white };
  position: relative;
  width: 100%;
  z-index: 0;
`

export const Nav = styled('nav')`
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 24rem;
  width: 80%;
  z-index: 1;
`

export const NavItem = styled('a')`
  cursor: pointer;
  font-size: 2rem;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: center;
  transform: translateX(0);
  width: 10.5rem;

  &.previous {
    transform: translateX(-12.5rem);
  }

  &.next {
    transform: translateX(12.5rem);
  }

  @media only screen and (min-width: 550px) {
    width: 18.5rem;

    &.previous {
      transform: translateX(-18.5rem);
    }

    &.next {
      transform: translateX(18.5rem);
    }
  }
`
