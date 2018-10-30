import React from 'react'

// styles 
import { Contact, Info, Wrapper } from './style'

const About = ({

}) => (
    <Wrapper className="about">
        <aside>
            <Contact>
                <h5>Contact</h5>
                <a href="mailto:meganpeterson83@gmail.com" title="Contact me">meganpeterson83@gmail.com</a>
            </Contact>
        </aside>

        <Info>
            <p>Hello. My name is Megan Peterson and I’m a graphic designer. I’ve been working as a graphic designer for over 10 years. I have experience in packaging, web development, marketing, branding, digital illustration, UX and UI design. </p>
            <p>I’m a sensitive, creative person who takes pride in my work.</p>
            <p>If you’re interested in in contacting me, please feel free to send me an email.</p>
        </Info>
    </Wrapper>
)

export default About