import styled from 'react-emotion'

export const Wrapper = styled('section')`
  background-color: ${ ({ theme }) => theme.primaryColor };
  display: block;
  left: 0;
  margin: auto;
  min-height: 100vw;
  overflow: hidden;
  padding-top: 33rem;
  padding-bottom: 15rem;
  position: absolute;
  right: 0;
  top: 0;
  transition: background-color 650ms ease-in-out, transform 650ms ease-in-out;

  &.center {
    background-color: ${ ({ theme }) => theme.white };
    max-width: 70vw;
    position: static;
    transform: translateX(0);
  }

  &.previous {
    transform: translateX(calc( -1 * 100vw + ( ( 100vw - 70vw ) / 2 ) + 8rem ));
  }

  &.previous-pad {
    transform: translateX(calc( -1 * 100vw + ( ( 100vw - (70vw * 2) ) / 2 ) + 8rem ));
  }

  &.next {
    transform: translateX(calc( 100vw - ( ( 100vw - 70vw ) / 2 ) - 8rem ));
  }

  &.next-pad {
    transform: translateX(calc( 100vw - ( ( 100vw - (70vw * 2) ) / 2 ) - 8rem ));
  }
`