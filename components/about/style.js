import styled from 'react-emotion'

export const Contact = styled.div`
    margin-bottom: 4.8rem;

    h5 {
        margin-bottom: 0.8rem;
    }

    a {
        color: ${ ({ theme }) => theme.black };
        display: block;
    }
`

export const Info = styled.div`
    p {
        margin-bottom: 1.6rem;
    }
`

export const Wrapper = styled.section`
    color: ${ ({ theme }) => theme.black };
    display: grid;
    grid-gap: 3.2rem;
    grid-template-columns: 1fr;
    padding: 0 3.2rem;

    @media only screen and (min-width: 700px) {
        grid-template-columns: 1fr 2fr;
        min-height: calc(100vh - 48rem);
        padding: 0 12.8rem;
    }
`