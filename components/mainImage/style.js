import styled from 'react-emotion'

export const Header = styled('header')`
  display: grid;
  grid-gap: 3.2rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 12.8rem;

  & img {
    display: block;
    grid-column: 1/3;
    margin: 0 auto;
    max-width: 100%;
  }

  & h1 {
    font-size: 1.3rem;
  }

  & p {
    font-size: 1.3rem;
    text-align: right;
  }
`