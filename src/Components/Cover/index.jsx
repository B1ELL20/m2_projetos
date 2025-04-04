import React from 'react'
import { 
    BoxContainer,
    ButtonCover,
    CoverBar,
    CoverBox,
    CoverContainer,
    CoverImage,
    CoverLogo,
    SubContainerBox,
    SubContainerContent,
    SubContainerImage,
    SubTitleCover,
    TitleCover
} from './CoverElements'

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
                        <ButtonCover>Faça já seu orçamento</ButtonCover>
                    </SubContainerContent>
                </SubContainerBox>
            </BoxContainer>
        </CoverContainer>
    </CoverBox>
  )
}

export default Cover