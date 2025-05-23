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
                    <ContactsItem><ContactIcon><MdOutlineLocalPhone/></ContactIcon><TextItem>(99) 9999-9999</TextItem></ContactsItem>
                    <ContactsItem><ContactIcon><FaInstagram/></ContactIcon><TextItem>m2.projetos</TextItem></ContactsItem>
                    <ContactsItem><ContactIcon><MdAlternateEmail/></ContactIcon><TextItem>contato@m2projetos.com</TextItem></ContactsItem>
                </ContactsList>
            </ContainerContacts>
            <ContainerMedia>
                <MediaIcon href="https://g3codee.com.br" target='_blank'><FaInstagram/></MediaIcon>
                <MediaIcon href="https://g3codee.com.br" target='_blank'><FaXTwitter/></MediaIcon>
                <MediaIcon href="https://g3codee.com.br" target='_blank'><FaWhatsapp/></MediaIcon>
                <MediaIcon href="https://g3codee.com.br" target='_blank'><FiYoutube/></MediaIcon>
            </ContainerMedia>
        </FooterContainer>
    </FooterBox>
  )
}

export default Footer