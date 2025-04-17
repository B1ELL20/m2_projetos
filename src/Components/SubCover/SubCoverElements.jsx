import styled from "styled-components";

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

export const ContainerImage = styled.img`

    width: 48%;

    @media screen and (max-width: 765px) {
        
        width: 100%;
        margin-bottom: 30px;
    }
`;