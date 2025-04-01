import React from 'react'
import { 
    BoxContainer,
    CoverBar,
    CoverBox,
    CoverContainer,
    CoverLogo,
    SubContainer,
    SubContainerBox,
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
                    <SubContainer></SubContainer>
                </SubContainerBox>
            </BoxContainer>
        </CoverContainer>
    </CoverBox>
  )
}

export default Cover