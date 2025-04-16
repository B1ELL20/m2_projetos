import styled from "styled-components";

export const FooterBox = styled.footer`

    width: 100%;
    margin-top: 300px;
    background-color: black;
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
`;

export const TitleContacts = styled.h2`

    font-size: 36px;
    letter-spacing: 1px;
    padding-bottom: 10px;
    color: white;
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
    color: white;
`;

export const ContactIcon = styled.i`

    font-size: 28px;
    margin-right: 10px;
    margin-top: 7px;
    color: #ffcc01;
`;

export const ContainerMedia = styled.div`

    width: 40%;
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const MediaIcon = styled.i`

    font-size: 40px;
    margin-left: 10px;
    color: #ffcc01;
`;
