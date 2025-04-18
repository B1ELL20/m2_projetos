import React, { useEffect } from 'react'
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

    useEffect(() => {

        Aos.init({ duration: 1000 });

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
                        <ButtonCover>
                            <TextButtonCover data-aos="fade-left"> Faça já seu orçamento</TextButtonCover>
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