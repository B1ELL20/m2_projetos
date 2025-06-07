import styled from "styled-components";
import { colors } from "../../settings/colors";
import logo from '../../images/Logo_M2.webp'

export const ThanksBox = styled.div`

    width: 800px;
    padding: 20px;
    margin: auto;
    margin-top: 100px;
    text-align: center;

    @media( max-width: 600px) {

        width: 100%;
    }
`;

export const ThanksMensage = styled.h1`

    width: 100%;
    margin-top: 20px;
    color: ${colors.primary};
    font-size: 50px;
    font-weight: 700;
    word-break: break-word;
    text-align: center;

    @media( max-width: 700px) {

        font-size: 40px;
    }
`;

export const ThanksImg = styled.div`

    width: 300px;
    height: 300px;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    margin: auto;
`;