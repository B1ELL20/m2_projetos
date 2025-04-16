import styled from "styled-components";
import logo from '../../images/Logo_M2.png'
import capa from '../../images/Capa.jpeg'

export const CoverBox = styled.header`

    background-color: #ffcc01;
    width: 100%;
    height: 500px;
    margin-top: 250px;
    margin-bottom: 100px;
    position: relative;

    @media screen and (max-width: 765px) {
        
        height: 830px;
    }
`;

export const CoverBar = styled.div`

    background-color: #fff;
    width: 80%;
    height: 33px;
    position: absolute;
    top: 40px;
    left: 0px;
`;

export const CoverContainer = styled.div`

    width: 100%;
    max-width: 1200px;
    padding: 0px 20px;
    padding-top: 100px;
    height: 100%;
    margin: auto;
    position: relative;
`;

export const CoverLogo = styled.div`

    width: 250px;
    height: 260px;
    background-image: url(${logo});
    background-size: cover;
    position: absolute;
    top: -187px;
    right: 10px;
`;

export const BoxContainer = styled.div`

    width: 100%;
    height: 80%;
    top: 20%;
    position: unset;
`;

export const TitleCover = styled.h1`

    width: 100%;
    padding: 10px;
    color: #fff;
    font-size: 110px;
    letter-spacing: 10px;
    font-weight: 500;

    @media screen and (max-width: 765px) {

        text-align: center;
    }
`;

export const SubContainerBox = styled.div`

    width: 100%;
    height: 250px;
    display: flex;
    flex-wrap: wrap;
`;

export const SubContainerImage = styled.div`

    width: 50%;
    background-color: white;
    position: relative;

    @media screen and (max-width: 765px) {
        
        width: 100%;
        position: unset;
    }
`;

export const CoverImage = styled.div`

    width: 100%;
    height: 350px;
    background-image: url(${capa});
    background-size: cover;
    border: 5px solid white;
    position: absolute;

    @media screen and (max-width: 765px) {
        
        width: 100%;
        position: unset;
    }
`;

export const SubContainerContent = styled.div`

    width: 50%;
    margin-top: 20px;
    text-align: end;

    @media screen and (max-width: 765px) {
        
        width: 70%;
        margin-left: auto;
        position: unset;
    }
`;

export const SubTitleCover = styled.p`

    width: 100%;
    padding-bottom: 10px;
    padding-left: 10px;
    color: #fff;
    font-size: 30px;
    text-align: end;
    border-bottom: 7px solid white;

    @media screen and (max-width: 1050px) {
        
        font-size: 26px;
    }

    @media screen and (max-width: 850px) {
        
        font-size: 24px;
    }
`;

export const ButtonCover = styled.button`

    width: 80%;
    padding: 10px 20px;
    margin-top: 30px;
    color: #000;
    background-color: #fff;
    font-size: 30px;
    text-align: center;
    box-shadow: 0px 10px 5px rgba(0,0,0, 0.3);
    border: 0px;
    border-radius: 10px;

    @media screen and (max-width: 1050px) {
        
        font-size: 24px;
    }

    @media screen and (max-width: 850px) {
        
        font-size: 22px;
        padding: 10px 15px;
    }

    @media screen and (max-width: 765px) {
        
        font-size: 24px;
        padding: 10px 20px;
    }
`;

