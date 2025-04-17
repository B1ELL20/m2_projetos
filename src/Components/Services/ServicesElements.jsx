import styled from "styled-components";
import servs from '../../images/Servs.png'

export const ServicesBox = styled.section`

    width: 100%;
    height: 450px;
    margin: 200px 0px;
    margin-bottom: 300px;
    background-color: #ffcc01;

    @media screen and (max-width: 765px) {
        
        height: 1000px;
        margin: 100px 0px;
    }

    @media screen and (max-width: 420px) {
        
        height: 900px;
        margin: 0px 0px;
        margin-bottom: 0px;
    }
`;

export const ServicesContainer = styled.div`

    width: 100%;
    height: 100%;
    max-width: 2000px;
    background-image: url(${servs});
    background-size: cover;
    margin: auto;
`;

export const ContainerServs = styled.div`

    width: 100%;
    height: 100%;
    max-width: 1200px;
    padding: 0px 20px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;


export const ServItem = styled.div`

    width: 300px;
    height: 300px;
    padding: 20px;
    background-color: #f1f1f1;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    transform: ${({$translate}) => $translate === 0 ? `translateY(0px)` : $translate === 1 ? `translateY(150px)` : `translateY(300px)`};
    text-align: start;

    @media screen and (max-width: 1000px) {
        
        width: 350px;
        height: 350px;
        transform: ${({$translate}) => $translate === 0 ? `translateY(-100px)` : $translate === 1 ? `translateY(25px)` : `translateY(50px)`};
    }

    @media screen and (max-width: 765px) {
        
        width: 400px;
        height: 400px;
        transform: ${({$translate}) => $translate === 0 ? `translateY(-100px)` : $translate === 1 ? `translateY(-25px)` : `translateY(50px)`};
    }

    @media screen and (max-width: 600px) {
        
        width: 350px;
        height: 350px;
    }

    @media screen and (max-width: 420px) {
        
        width: 300px;
        height: 300px;
        transform: ${({$translate}) => $translate === 0 ? `translateY(-100px)` : $translate === 1 ? `translateY(0px)` : `translateY(75px)`};
    }
`;

export const ServIcon = styled.i`

    font-size: 100px;
    color: #ffcc01;

    @media screen and (max-width: 765px) {
        
        font-size: 150px;
    }

    @media screen and (max-width: 600px) {
        
        font-size: 120px;
    }
    
    @media screen and (max-width: 420px) {
        
        font-size: 100px;
    }
`;

export const ServTitle = styled.h3`

    font-size: 24px;
    padding-bottom: 20px;
    font-weight: bold;
    letter-spacing: 1px;

    @media screen and (max-width: 765px) {
        
        font-size: 30px;
    }

    @media screen and (max-width: 600px) {
        
        font-size: 26px;
    }
    
    @media screen and (max-width: 420px) {
        
        font-size: 24px;
    }
`;

export const ServText = styled.p`

    font-size: 20px;
    letter-spacing: 1px;

    @media screen and (max-width: 765px) {
        
        font-size: 24px;
    }

    @media screen and (max-width: 600px) {
        
        font-size: 22px;
    }

    @media screen and (max-width: 420px) {
        
        font-size: 20px;
    }
`;