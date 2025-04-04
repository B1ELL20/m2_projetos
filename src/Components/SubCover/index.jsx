import React from 'react'
import { 
    ContainerImage, 
    SubCoverBox, 
    SubCoverContainer 
} from './SubCoverElements'

const SubCover = () => {
  return (
    <SubCoverBox>
        <SubCoverContainer>
            <ContainerImage $capa={1}/>
            <ContainerImage $capa={2}/>
        </SubCoverContainer>
    </SubCoverBox>
  )
}

export default SubCover