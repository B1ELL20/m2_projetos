import styled from "styled-components";
import capa01 from "../../images/Capa01.png"
import capa02 from "../../images/Capa02.png"

export const SubCoverBox = styled.div`

    width: 100%;
    margin-bottom: 100px;
`;

export const SubCoverContainer = styled.div`

    width: 100%;
    max-width: 1200px;
    padding: 0px 20px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerImage = styled.div`

    width: 48%;
    height: ${({$capa}) => $capa === 1 ? "350px" : "500px"};
    background-image: ${({$capa}) => $capa === 1 ? `url(${capa01})` : `url(${capa02})`};
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 765px) {
        
        width: 100%;
        height: ${({$capa}) => $capa === 1 ? "400px" : "650px"};
        margin-bottom: 100px;
    }
`;