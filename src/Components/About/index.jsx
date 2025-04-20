import React, { useEffect, useState } from 'react'
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

    const links = ["footer", "contact"];
    const [offset_button, setOffset] = useState(0);
    const [offset_effect, setOffsetEffect] = useState(0);

    useEffect(() => {

        Aos.init({ duration: 500 });
        
        if (window.screen.width < 965) {

            setOffsetEffect(50);

            if (links[wrap] === "contact") {

                setOffset(400);

            } else {

                setOffset(-150);
            }
    
        } else {

            setOffsetEffect(300);
            setOffset(-150);
        }

    }, []);

  return (
    <AboutBox $wrap={wrap}>
        <AboutContainer $wrap={wrap}>
            <AboutContent $wrap={wrap}>
                <ContentTitle>{contents_about[wrap].title}</ContentTitle>
                <TitleBorderBottom $wrap={wrap}/>
                <ContentText>{contents_about[wrap].content}</ContentText>
                <ContentButton $wrap={wrap} spy={true} offset={offset_button} smooth={true} duration={800} to={links[wrap]}>
                    <ButtonText data-aos="fade-left" data-aos-offset={offset_effect}>{contents_about[wrap].button}</ButtonText>
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