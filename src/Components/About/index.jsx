import React, { useEffect } from 'react'
import { 
    AboutBox, 
    AboutContainer,
    AboutContent,
    AboutImage,
    ButtonText,
    ContentButton,
    ContentImage,
    ContentText,
    ContentTitle,
    TitleBorderBottom
} from './AboutElements'

import { contents_about } from "../../settings/contents"

import Aos from "aos"
import "aos/dist/aos.css"

const About = ({ wrap }) => {

    const links = ["footer", "contact"]

    useEffect(() => {

        Aos.init({ duration: 500 });

    }, []);

  return (
    <AboutBox $wrap={wrap}>
        <AboutContainer $wrap={wrap}>
            <AboutContent $wrap={wrap}>
                <ContentTitle>{contents_about[wrap].title}</ContentTitle>
                <TitleBorderBottom $wrap={wrap}/>
                <ContentText>{contents_about[wrap].content}</ContentText>
                <ContentButton $wrap={wrap} spy={true} offset={-150} smooth={true} duration={800} to={links[wrap]}>
                    <ButtonText data-aos="fade-left" data-aos-offset="300">{contents_about[wrap].button}</ButtonText>
                </ContentButton>
            </AboutContent>
            <AboutImage>
                <ContentImage $wrap={wrap}/>
            </AboutImage>
        </AboutContainer>
    </AboutBox>
  )
}

export default About