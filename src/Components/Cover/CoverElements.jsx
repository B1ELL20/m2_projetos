import styled from "styled-components";
import logo from '../../images/Logo_M2.png'

export const CoverBox = styled.header`

    background-color: #ffcc01;
    width: 100%;
    height: 500px;
    margin-top: 250px;
    margin-bottom: 200px;
    position: relative;
`;

export const CoverBar = styled.div`

    background-color: #fff;
    width: 75%;
    height: 33px;
    position: absolute;
    top: 40px;
    left: 0px;
`;

export const CoverContainer = styled.div`

    width: 100%;
    max-width: 1200px;
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
    right: 0px;
`;

export const BoxContainer = styled.div`

    width: 100%;
    height: 80%;
    border: 1px solid red;
    top: 20%;
    position: absolute;
`;

export const TitleCover = styled.h1`

    width: 100%;
    padding: 10px;
    color: #fff;
    font-size: 110px;
    letter-spacing: 5px;
    font-weight: 500;
`;

export const SubContainerBox = styled.div`

    width: 100%;
    height: 250px;
    border: 1px solid red;
`;

export const SubContainer = styled.div`

    width: 50%;
    border: 1px solid red;
`;

