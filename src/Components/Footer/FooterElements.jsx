import styled from "styled-components";
import { colors } from "../../settings/colors";

export const FooterBox = styled.footer`

    width: 100%;
    margin-top: 300px;
    background-color: ${colors.secundary};
`;

export const FooterContainer = styled.div`

    width: 100%;
    max-width: 1200px;
    padding: 30px 20px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: end;
`;

export const ContainerContacts = styled.div`

    width: 50%;

    @media screen and (max-width: 670px) {
    
        width: 100%;
    }
`;

export const TitleContacts = styled.h2`

    font-size: 36px;
    letter-spacing: 1px;
    padding-bottom: 10px;
    color: ${colors.back};
`;

export const ContactsList = styled.ul`

    width: 100%;
    list-style-type: none;
`;

export const ContactsItem = styled.li`

    margin: 10px 0px;
    display: flex;
    align-items: center;
`;

export const TextItem = styled.p`

    font-size: 24px;
    letter-spacing: 1px;
    margin: 10px 0px;
    color: ${colors.back};

    @media screen and (max-width: 420px) {
        
        font-size: 22px;
    }

    @media screen and (max-width: 380px) {
        
        font-size: 18px;
    }
`;

export const ContactIcon = styled.i`

    font-size: 30px;
    margin-right: 10px;
    margin-top: 7px;
    color: ${colors.primary};

    @media screen and (max-width: 670px) {
        
        font-size: 32px;
    }

    @media screen and (max-width: 380px) {
        
        font-size: 24px;
    }
`;

export const ContainerMedia = styled.div`

    width: 40%;
    display: flex;
    justify-content: end;
    align-items: center;

    @media screen and (max-width: 670px) {
    
        width: 100%;
        justify-content: start;
        margin-top: 20px;
    }
`;

export const MediaIcon = styled.a`

    font-size: 40px;
    margin-left: 10px;
    color: ${colors.primary};
    transition: 0.1s;
    cursor: pointer;

    &:hover {

        color: ${colors.back};
        transform: scale(1.05);
    }

    @media screen and (max-width: 670px) {
    
        margin-right: 10px;
        margin-left: 0px;
    }

    @media screen and (max-width: 380px) {
    
        font-size: 30px;
    }   
`;
