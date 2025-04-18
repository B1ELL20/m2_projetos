import React, { useEffect } from 'react'
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

import Aos from "aos"
import "aos/dist/aos.css"

const Contact = () => {

    useEffect(() => {

        Aos.init({ duration: 700 });

    }, []);

  return (
    <ContactBox id='contact'>
        <ContactContainer>
            <ContainerTop>
                <TopImageLeft/>
                <TopImageRigth/>
            </ContainerTop>
            <ContainerBottom>
                <BottomImageLeft data-aos="fade-up"/>
                <ContactContent>
                    <ContactText>Peça já seu projeto de forma rápida e prática</ContactText>
                    <ContactButton><TextButton data-aos="fade-left">Acesse nosso WhatsApp</TextButton> <ButtonIcon data-aos="zoom-in"><FaWhatsapp/></ButtonIcon></ContactButton>
                </ContactContent>
            </ContainerBottom>
        </ContactContainer>
    </ContactBox>
  )
}

export default Contact