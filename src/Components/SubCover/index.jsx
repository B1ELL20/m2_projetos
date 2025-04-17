import React from 'react'
import { 
    ContainerImage, 
    SubCoverBox, 
    SubCoverContainer 
} from './SubCoverElements'

import capa01 from "../../images/Capa01.png"
import capa02 from "../../images/Capa02.png"

const SubCover = () => {
  return (
    <SubCoverBox>
        <SubCoverContainer>
            <ContainerImage src={capa01}/>
            <ContainerImage src={capa02}/>
        </SubCoverContainer>
    </SubCoverBox>
  )
}

export default SubCover