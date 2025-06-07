import styled from "styled-components";
import { colors } from "../../settings/colors";
import contact01 from "../../images/Contact01.webp"
import contact02 from "../../images/Contact02.webp"
import contact03 from "../../images/Contact03.webp"
import contactBack from "../../images/contact.webp"

export const ContactBox = styled.section`

    width: 100%;
    max-width: 2000px;
    padding: 0px 20px;
    margin: auto;
    height: 450px;
    margin-top: 500px;
    margin-bottom: 100px;
    background-image: url(${contactBack});
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 970px) {
        
        height: 1300px;
    }

    @media screen and (max-width: 500px) {
        
        margin-top: 400px;
    }
`;

export const ContactContainer = styled.div`

    width: 100%;
    height: 100%;
    max-width: 1200px;
    padding: 0px 20px;
    margin: auto;
    display: flex;
    justify-content: end;
    align-items: end;
    position: relative;
`;

export const ContainerTop = styled.div`

    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: absolute;
    left: 0px;
    top: -100px;

    @media screen and (max-width: 970px) {
        
        height: 600px;
    }

    @media screen and (max-width: 765px) {
        
        height: 700px;
    }
`;

export const ContainerBottom = styled.div`

    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    align-items: start;
    position: absolute;
    left: 0px;
    top: 250px;

    @media screen and (max-width: 970px) {
        
        top: 1050px;
        height: 500px;
    }
`;

export const ContactContent = styled.div`

    width: 50%;
    height: 200px;
    text-align: end;

    @media screen and (max-width: 970px) {
        
        width: 100%;
        text-align: center;
    }

`;

export const TopImageLeft = styled.div`

    width: 30%;
    height: 100%;
    background-image: url(${contact01});
    background-size: cover;
    background-position: center;
    border: 5px solid ${colors.back};

    @media screen and (max-width: 970px) {
        
        width: 80%;
        height: 70%;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 765px) {
        
        width: 90%;
        height: 60%;
    }

    @media screen and (max-width: 380px) {
        
        width: 100%;
    }
`;

export const TopImageRigth = styled.div`

    width: 50%;
    height: 100%;
    background-image: url(${contact02});
    background-size: cover;
    background-position: center;
    border: 5px solid ${colors.back};

    @media screen and (max-width: 970px) {
        
        width: 80%;
        height: 70%;
        margin-left: auto;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 765px) {
        
        width: 90%;
        height: 60%;
    }

    @media screen and (max-width: 380px) {
        
        width: 100%;
    }
`;

export const BottomImageLeft = styled.div`

    width: 45%;
    height: 100%;
    background-image: url(${contact03});
    background-size: cover;
    background-position: center;
    border: 5px solid ${colors.back};

    @media screen and (max-width: 970px) {
        
        width: 100%;
    }

    @media screen and (max-width: 900px) {
        
        margin-top: 0px;
    }

    @media screen and (max-width: 765px) {
        
        height: 90%;
        margin-top: 50px;
    }
`;

export const ContactText = styled.p`

    font-size: 28px;
    letter-spacing: 1px;
    color: ${colors.back}; 

    @media screen and (max-width: 970px) {
        
        font-size: 36px;
    }

    @media screen and (max-width: 900px) {
        
        font-size: 30px;
    }

    @media screen and (max-width: 500px) {
        
        font-size: 26px;
    }
`;

export const ContactButton = styled.button`

    padding: 0px 20px;
    margin-top: 30px;
    border-radius: 10px;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.5);
    background-color: ${colors.back};
    border: none;
    display: flex;
    align-items: center;
    justify-self: end;
    cursor: pointer;

    @media screen and (max-width: 970px) {
        
        justify-self: center;
        padding: 5px 20px;
    }

    @media screen and (max-width: 765px) {
        
        justify-self: center;
        padding: 0px 20px;
    }
    
    @media screen and (max-width: 400px) {
        
        padding: 0px 10px;
    }
`;

export const TextButton = styled.p`

    font-size: 28px;
    letter-spacing: 1px;
    color: ${colors.secundary};

    @media screen and (max-width: 970px) {
        
        font-size: 32px;
    }

    @media screen and (max-width: 765px) {
        
        font-size: 30px;
    }

    @media screen and (max-width: 580px) {
        
        font-size: 26px;
    }

    @media screen and (max-width: 500px) {
        
        font-size: 22px;
    }

    @media screen and (max-width: 440px) {
        
        font-size: 20px;
    }

    @media screen and (max-width: 410px) {
        
        font-size: 18px;
    }
`;

export const ButtonIcon = styled.i`

    font-size: 40px;
    margin-left: 20px;
    margin-top: 10px;
    color: ${colors.primary};

    @media screen and (max-width: 970px) {
        
        font-size: 50px;
    }

    @media screen and (max-width: 765px) {
        
        font-size: 60px;
    }

    @media screen and (max-width: 580px) {
        
        font-size: 50px;
    }

    @media screen and (max-width: 500px) {
        
        font-size: 40px;
    }

    @media screen and (max-width: 400px) {
        
        font-size: 32px;
    }
`;