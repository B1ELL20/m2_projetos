import React, { useEffect } from 'react'
import { 
    ContainerServs,
    ServicesBox, 
    ServicesContainer,
    ServIcon,
    ServItem,
    ServText,
    ServTitle
} from './ServicesElements'

import { IoNewspaperOutline } from "react-icons/io5";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { HiMiniCheckBadge } from "react-icons/hi2";

import Aos from "aos"
import "aos/dist/aos.css"

const Services = () => {

    useEffect(() => {

        Aos.init({ duration: 1000 });

    }, []);

  return (
    <ServicesBox>
        <ServicesContainer>
          <ContainerServs data-aos="flip-up">
            <ServItem $translate={0}>
              <ServIcon><IoNewspaperOutline/></ServIcon>
              <ServTitle >Projetos Elaborados</ServTitle>
              <ServText>Fazemos seu projeto atendendo sua necessidade</ServText>
            </ServItem>

            <ServItem $translate={1}>
              <ServIcon><PiPaperPlaneRightFill/></ServIcon>
              <ServTitle>Entrega Rápida</ServTitle>
              <ServText>Seu projeto rápido e sem enrolação</ServText>
            </ServItem>

            <ServItem $translate={2}>
              <ServIcon><HiMiniCheckBadge/></ServIcon>
              <ServTitle>Certificação de Qualidade</ServTitle>
              <ServText>Garantimos um projeto com qualidade</ServText>
            </ServItem>
          </ContainerServs>
        </ServicesContainer>
    </ServicesBox>
  )
}

export default Services