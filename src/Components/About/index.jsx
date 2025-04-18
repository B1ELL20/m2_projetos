import React, { useEffect } from 'react'
import { 
    AboutBox, 
    AboutContainer,
    AboutContent,
    AboutImage,
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
                <ContentButton data-aos="fade-left">{contents_about[wrap].button}</ContentButton>
            </AboutContent>
            <AboutImage>
                <ContentImage $wrap={wrap}/>
            </AboutImage>
        </AboutContainer>
    </AboutBox>
  )
}

export default About