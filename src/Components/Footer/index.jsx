import React from 'react'
import { 
    ContactIcon,
    ContactsItem,
    ContactsList,
    ContainerContacts,
    ContainerMedia,
    FooterBox, 
    FooterContainer, 
    MediaIcon, 
    TextItem, 
    TitleContacts
} from './FooterElements'

import { MdOutlineLocalPhone,  MdAlternateEmail } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <FooterBox id='footer'>
        <FooterContainer>
            <ContainerContacts>
                <TitleContacts>Contatos</TitleContacts>
                <ContactsList>
                    <ContactsItem><ContactIcon><MdOutlineLocalPhone/></ContactIcon><TextItem>(85) 9297-1562</TextItem></ContactsItem>
                    <ContactsItem><ContactIcon><FaInstagram/></ContactIcon><TextItem>m2.projetos</TextItem></ContactsItem>
                    <ContactsItem><ContactIcon><MdAlternateEmail/></ContactIcon><TextItem>contato@m2projetos.com</TextItem></ContactsItem>
                </ContactsList>
            </ContainerContacts>
            <ContainerMedia>
                <MediaIcon aria-label='Instagram da empresa' href="https://www.instagram.com/m2.projetos?igsh=MThzNjFlZm5vbmVk" target='_blank'><FaInstagram/></MediaIcon>
                <MediaIcon aria-label='Twitter da empresa' href="#" target='_blank'><FaXTwitter/></MediaIcon>
                <MediaIcon aria-label='WhatsApp da empresa' href="https://wa.me/558592971562/" target='_blank'><FaWhatsapp/></MediaIcon>
                <MediaIcon aria-label='Youtube da empresa' href="#" target='_blank'><FiYoutube/></MediaIcon>
            </ContainerMedia>
        </FooterContainer>
    </FooterBox>
  )
}

export default Footer