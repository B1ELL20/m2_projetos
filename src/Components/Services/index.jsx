import React from 'react'
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

const Services = () => {
  return (
    <ServicesBox>
        <ServicesContainer>
          <ContainerServs>
            <ServItem $translate={0}>
              <ServIcon><IoNewspaperOutline/></ServIcon>
              <ServTitle>Projetos Elaborados</ServTitle>
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