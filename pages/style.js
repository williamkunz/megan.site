import styled from 'react-emotion'

export const PageSection = styled('main')`
  background-color: ${ ({ theme }) => theme.teal };
  display: block;
  left: 0;
  margin: auto;
  min-height: 100vw;
  overflow: hidden;
  padding-bottom: 15rem;
  position: absolute;
  right: 0;
  top: 0;
  transition: background .66s ease-in-out, transform .66s ease-in-out;

  &.center {
    background-color: ${ ({ theme }) => theme.white };
    max-width: 70vw;
    position: static;
    transform: translateX(0);
  }

  &.previous {
    transform: translateX(calc( -1 * 100vw + ( ( 100vw - 70vw ) / 2 ) + 8rem ));
  }

  &.next {
    transform: translateX(calc( 100vw - ( ( 100vw - 70vw ) / 2 ) - 8rem ));
  }
`