import React, { useEffect, useState } from 'react'
import { 
    BoxContainer,
    ButtonCover,
    CoverBar,
    CoverBox,
    CoverContainer,
    CoverImage,
    CoverLogo,
    IconButtonCover,
    SubContainerBox,
    SubContainerContent,
    SubContainerImage,
    SubTitleCover,
    TextButtonCover,
    TitleCover
} from './CoverElements'

import Aos from "aos"
import "aos/dist/aos.css"
import { SiMoneygram } from "react-icons/si";

const Cover = () => {

    const [offset_button, setOffset] = useState(0);
    const [offset_effect, setOffsetEffect] = useState(0);

    function goToThanks() {

        window.location.href = "#/thanks"
    }

    useEffect(() => {

        Aos.init({ duration: 1000 });

        if (window.screen.width < 965) {

            setOffsetEffect(-100);
            setOffset(400);
    
        } else {
            
            setOffset(-150);
        }
    
    }, []);


  return (

    <CoverBox>
        <CoverBar/>
        <CoverContainer>
            <CoverLogo/>
            <BoxContainer>
                <TitleCover data-aos="fade-left">PISCINAS</TitleCover>
                <SubContainerBox>
                    <SubContainerImage>
                        <CoverImage data-aos="fade-down"/>
                    </SubContainerImage>
                    <SubContainerContent>
                        <SubTitleCover>Projete com a gente e garanta a qualidade da sua piscina</SubTitleCover>
                        <ButtonCover onClick={goToThanks}>
                            <TextButtonCover data-aos="fade-left" data-aos-offset={offset_effect}> Faça já seu orçamento</TextButtonCover>
                            <IconButtonCover><SiMoneygram/></IconButtonCover>
                        </ButtonCover>
                    </SubContainerContent>
                </SubContainerBox>
            </BoxContainer>
        </CoverContainer>
    </CoverBox>
  )
}

export default Cover