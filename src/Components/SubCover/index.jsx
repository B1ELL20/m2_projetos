import React, { useEffect } from 'react'
import { 
    ContainerImage, 
    SubCoverBox, 
    SubCoverContainer 
} from './SubCoverElements'

import capa01 from "../../images/Capa01.png"
import capa02 from "../../images/Capa02.png"

import Aos from "aos"
import "aos/dist/aos.css"

const SubCover = () => {

    useEffect(() => {

        Aos.init({ duration: 1000 });

    }, []);

  return (
    <SubCoverBox>
        <SubCoverContainer>
            <ContainerImage data-aos="fade-down-right" src={capa01}/>
            <ContainerImage data-aos="fade-down-left" src={capa02}/>
        </SubCoverContainer>
    </SubCoverBox>
  )
}

export default SubCover