import styled from 'react-emotion'

export const Grid = styled('div')`
  display: grid;
  grid-gap: 10rem;
  grid-template-columns: 30rem;
  grid-template-rows: repeat(auto-fill, 20rem);
  margin: 0 auto;
  padding: 0 1.6rem;
  width: 30rem;

  a {
    color: ${ ({ theme }) => theme.black };
    font-size: 1.6rem;
    transition: filter 200ms cubic-bezier(0,0,0,0);
    text-decoration: none;
  }

  a:hover {
    filter: contrast(150%);
  }

  @media only screen and (min-width: 760px) {
    grid-template-columns: 30rem 30rem;
    width: 70rem;
  }
`

export const Wrapper = styled('section')`
  background-color: ${ ({ theme }) => theme.primaryColor };
  display: block;
  left: 0;
  margin: auto;
  min-height: 200rem;
  max-width: 100vw;
  overflow: hidden;
  padding-top: 33rem;
  padding-bottom: 15rem;
  position: absolute;
  right: 0;
  top: 0;
  transition: background-color 850ms ease-in-out, transform 650ms ease-in-out;

  &.center {
    background-color: ${ ({ theme }) => theme.white };
    position: static;
    transform: translateX(0);
  }

  &.previous {
    transform: translateX(calc( -1 * 100vw ));
  }

  &.previous-pad {
    transform: translateX(calc( -2 * 100vw ));
  }

  &.next {
    transform: translateX(calc( 100vw * 1 ));
  }

  &.next-pad {
    transform: translateX(calc( 100vw * 2 ));
  }

  @media only screen and (min-width: 1050px) {
    max-width: 70vw;

    &.previous {
      transform: translateX(calc( -1 * 100vw + ( ( 100vw - 70vw ) / 2 ) + 8rem ));
    }

    &.previous-pad {
      transform: translateX(calc( -1 * 100vw + ( ( 100vw - (70vw * 2) ) / 2 ) + 8rem ));
    }

    &.next {
      transform: translateX(calc( 100vw - ( ( 100vw - 70vw ) / 2 ) - 5vw ));
    }

    &.next-pad {
      transform: translateX(calc( 100vw - ( ( 100vw - (70vw * 2) ) / 2 ) - 5vw ));
    }
  } 
`
