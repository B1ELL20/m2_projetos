import React from 'react'
import { 
    BottomImageLeft,
    ButtonIcon,
    ContactBox, 
    ContactButton, 
    ContactContainer,
    ContactContent,
    ContactText,
    ContainerBottom,
    ContainerTop,
    TextButton,
    TopImageLeft,
    TopImageRigth,
} from './ContactElements'

import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <ContactBox>
        <ContactContainer>
            <ContainerTop>
                <TopImageLeft/>
                <TopImageRigth/>
            </ContainerTop>
            <ContainerBottom>
                <BottomImageLeft/>
                <ContactContent>
                    <ContactText>Peça já seu projeto de forma rápida e prática</ContactText>
                    <ContactButton><TextButton>Acesse nosso WhatsApp</TextButton> <ButtonIcon><FaWhatsapp/></ButtonIcon></ContactButton>
                </ContactContent>
            </ContainerBottom>
        </ContactContainer>
    </ContactBox>
  )
}

export default Contact