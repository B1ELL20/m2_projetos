import styled from "styled-components";
import about01 from "../../images/About01.png"
import about02 from "../../images/About02.png"

export const AboutBox = styled.section`

    width: 100%;
    margin-top: ${({$wrap}) => $wrap === 0 ? '0px' : '-100px'};;
`;

export const AboutContainer = styled.div`

    width: 100%;
    max-width: 1200px;
    padding: 0px 20px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({$wrap}) => $wrap === 0 ? 'row' : 'row-reverse'};
    justify-content: space-between;
    align-items: ${({$wrap}) => $wrap === 0 ? 'top' : 'end'};
`;

export const AboutContent = styled.div`

    width: 48%;
    text-align: ${({$wrap}) => $wrap === 0 ? 'start' : 'end'};

    @media screen and (max-width: 765px) {
        
        width: 100%;
        margin-bottom: 100px;
    }
`;

export const ContentTitle = styled.h2`

    width: 100%;
    font-size: 40px;
    letter-spacing: 2px;
`;

export const TitleBorderBottom = styled.hr`

    width: 30%;
    margin: 15px 0px 30px 0px;
    border: 4px solid #ffcc01;
    margin-left: ${({$wrap}) => $wrap === 0 ? 'unset' : 'auto'};
`;

export const ContentText = styled.p`

    width: 100%;
    font-size: 22px;
    letter-spacing: 1px;
`;

export const ContentButton = styled.button`

    padding: 10px 20px;
    margin-top: 40px;
    font-size: 24px;
    letter-spacing: 1px;
    color: white;
    background-color: #ffcc01;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;

export const AboutImage = styled.div`

    width: 48%;

    @media screen and (max-width: 765px) {
        
        width: 100%;
        margin-bottom: 200px;
    }
`;

export const ContentImage = styled.div`

    width: 100%;
    height: ${({$wrap}) => $wrap === 0 ? '700px' : '600px'};
    background-image: ${({$wrap}) => $wrap === 0 ? `url(${about01})` : `url(${about02})`};
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 765px) {
        
        height: ${({$wrap}) => $wrap === 0 ? '800px' : '650px'};
    }
`;