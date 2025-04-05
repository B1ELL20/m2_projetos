import styled from "styled-components";
import servs from '../../images/Servs.png'

export const ServicesBox = styled.section`

    width: 100%;
    height: 450px;
    margin: 200px 0px;
    margin-bottom: 300px;
    background-color: #ffcc01;
`;

export const ServicesContainer = styled.div`

    width: 100%;
    height: 100%;
    max-width: 2000px;
    background-image: url(${servs});
    margin: auto;
`;

export const ContainerServs = styled.div`

    width: 100%;
    height: 100%;
    max-width: 1200px;
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
`;

export const ServIcon = styled.i`

    font-size: 100px;
    color: #ffcc01;
`;

export const ServTitle = styled.h3`

    font-size: 24px;
    padding-bottom: 20px;
    font-weight: bold;
    letter-spacing: 1px;
`;

export const ServText = styled.p`

    font-size: 20px;
    letter-spacing: 1px;
`;