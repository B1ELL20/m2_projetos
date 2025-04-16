import styled from "styled-components";
import contact01 from "../../images/Contact01.jpeg"
import contact02 from "../../images/Contact02.jpeg"
import contact03 from "../../images/Contact03.png"
import contactBack from "../../images/contact.png"

export const ContactBox = styled.section`

    width: 100%;
    max-width: 1600px;
    height: 450px;
    margin: 500px 0px 100px 0px;
    background-image: url(${contactBack});
    background-size: cover;
    background-position: center;
`;

export const ContactContainer = styled.div`

    width: 100%;
    height: 100%;
    max-width: 1200px;
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
`;

export const ContainerBottom = styled.div`

    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: absolute;
    left: 0px;
    top: 250px;
`;

export const ContactContent = styled.div`

    width: 50%;
    height: 200px;
    text-align: end;
`;

export const TopImageLeft = styled.div`

    width: 30%;
    height: 100%;
    background-image: url(${contact01});
    background-size: cover;
    background-position: center;
    border: 5px solid white;
`;

export const TopImageRigth = styled.div`

    width: 50%;
    height: 100%;
    background-image: url(${contact02});
    background-size: cover;
    background-position: center;
    border: 5px solid white;
`;

export const BottomImageLeft = styled.div`

    width: 45%;
    height: 100%;
    background-image: url(${contact03});
    background-size: cover;
    background-position: center;
    border: 5px solid white;
`;

export const ContactText = styled.p`

    font-size: 28px;
    letter-spacing: 1px;
    color: white;
`;

export const ContactButton = styled.button`

    padding: 0px 20px;
    margin-top: 30px;
    border-radius: 10px;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.5);
    background-color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-self: end;
`;

export const TextButton = styled.p`

    font-size: 28px;
    letter-spacing: 1px;
    color: black;
`;

export const ButtonIcon = styled.i`

    font-size: 40px;
    margin-left: 20px;
    margin-top: 10px;
    color: #ffcc01;
`;