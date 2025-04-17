import React from 'react'
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

import { SiMoneygram } from "react-icons/si";

const Cover = () => {
  return (

    <CoverBox>
        <CoverBar/>
        <CoverContainer>
            <CoverLogo/>
            <BoxContainer>
                <TitleCover>PISCINAS</TitleCover>
                <SubContainerBox>
                    <SubContainerImage>
                        <CoverImage/>
                    </SubContainerImage>
                    <SubContainerContent>
                        <SubTitleCover>Projete com a gente e garanta a qualidade da sua piscina</SubTitleCover>
                        <ButtonCover>
                            <TextButtonCover> Faça já seu orçamento</TextButtonCover>
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