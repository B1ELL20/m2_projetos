import styled from "styled-components";
import { colors } from "../../settings/colors";
import back from "../../images/back_projects.png"
import backMax from "../../images/back_projects_max.png"
import piscina01 from "../../images/piscina_project_01.jpeg"
import piscina02 from "../../images/piscina_project_02.jpeg"
import piscina03 from "../../images/piscina_project_03.jpeg"
import piscina04 from "../../images/piscina_project_04.jpeg"
import project from "../../images/project_01.jpeg"
import problems from "../../images/problems_projects.png"
import problemsTablet from "../../images/problems_projects_tablet.png"
import problemsMobile from "../../images/problems_projects_mobile.png"

export const ProjectsBox = styled.section`

    width: 100%;
    margin-top: 100px;
    background-image: url(${backMax});
`;

export const ProjectsContainerBack = styled.div`

    width: 100%;
    height: 100%;
    max-width: 1800px;
    margin: auto;
    padding-top: 13%;
    background-image: url(${back});
    background-size: cover;

    @media screen and (max-width: 1550px) {
        
        padding-top: 200px;
    }
`;

export const BoxAlert = styled.div`

    width: 50%;
    padding-bottom: 50px;
    position: absolute;
    bottom: 0px;
    left: 0px;

    @media screen and (max-width: 765px) {
        
        width: 60%;
    }

    @media screen and (max-width: 500px) {
        
        width: 80%;
    }

    @media screen and (max-width: 400px) {
        
        width: 90%;
    }
`;

export const IconAlert = styled.i`

    font-size: 70px;
    color: ${colors.primary};

    @media screen and (max-width: 765px) {
        
        font-size: 60px;
    }

    @media screen and (max-width: 400px) {
        
        font-size: 50px;
    }
`;

export const TextAlert = styled.p`

    font-size: 30px;
    letter-spacing: 1px;
    color: ${colors.back};

    @media screen and (max-width: 970px) {
        
        font-size: 24px;
    }
`;

export const ProjectsContainer = styled.div`

    width: 100%;
    height: 100%;
    max-width: 1200px;
    padding: 0px 20px;
    margin: auto;
`;

export const CarrosselContainer = styled.div`

    width: 100%;
    max-width: 1200px;
    height: 600px;

    @media screen and (max-width: 970px) {
        
        height: unset;
    }
`;

export const Carrossels = styled.div`

    width: 300%;
    height: 400px;
    display: flex;
    margin-left: ${({ $position }) => ($position === 1 ? '-100%' : $position === 2 ? '-200%' : '0')};
    transition: 1s;
`;

export const PostContainer = styled.div`

    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const ImagesCarrosel = styled.div`

    width: 60%;
    height: 400px;
    overflow: hidden;

    @media screen and (max-width: 970px) {
        
        width: 100%;
    }
`;

export const ImagePost = styled.div`

    width: 100%;
    height: 380px;
    margin: auto;
    background-image: ${({$select}) => $select === 0 ? `url(${piscina01})` : $select === 1 ? `url(${piscina02})` : $select === 2 ? `url(${piscina03})` : `url(${piscina04})`};
    background-size: cover;
    background-position: bottom;
    box-shadow: 0px 0px 10px rgba(0,0,0, 0.8);
`;

export const ProjectPost = styled.div`

    width: 40%;
    height: 100%;

    @media screen and (max-width: 970px) {
    
       width: 100%;
       margin-top: 50px;
       display: flex;
       flex-wrap: wrap-reverse;
    }
`;

export const ImageProject = styled.div`

    width: 300px;
    height: 300px;
    margin-left: auto;
    background-image: url(${project});
    background-size: cover;
    background-position: center;
    border: 5px solid ${colors.back};

    @media screen and (max-width: 970px) {
    
        width: 50%;
    }

    @media screen and (max-width: 500px) {
        
        width: 100%;
        height: 350px;
    }
`;

export const ProjectContent = styled.div`

    width: 70%;
    margin-left: auto;
    margin-top: 40px;
    text-align: end;

    @media screen and (max-width: 970px) {
    
        width: 40%;
    }

    @media screen and (max-width: 500px) {
    
        width: 100%;
        margin-top: 0px;
        margin-bottom: 20px;
        text-align: center;
    }
`;


export const ContentText = styled.p`

    font-size: 24px;
    letter-spacing: 1px;
    padding: 10px 0px;
    color: ${colors.back};

    @media screen and (max-width: 970px) {
    
        text-shadow: 0px 0px 10px black;
    }

    @media screen and (max-width: 670px) {
    
        font-size: 22px;
    }
`;

export const BoxArrows = styled.div`

    padding: 5px;
`;

export const ButtonsArrows = styled.button`

    width: 50px;
    height: 50px;
    font-size: 40px;
    padding-top: 5px;
    margin: 10px;
    border-radius: 100%;
    border: none;
    background-color: ${colors.back};
    color: ${colors.primary};
    cursor: pointer;
`;

export const ProjectsProblems = styled.div`

    width: 100%;
    height: 650px;
    margin-top: 50px;
    position: relative;
    box-sizing: border-box;

    @media screen and (max-width: 1200px) {
    
        height: 600px;
        display: flex;
        align-items: baseline;
        justify-content: end;
        padding-bottom: 50px;
    }

    @media screen and (max-width: 765px) {
        
        height: 750px;
        padding-bottom: 200px;
    }

    @media screen and (max-width: 500px) {
        
        height: 650px;
        padding-bottom: 200px;
    }

    @media screen and (max-width: 400px) {
        
        height: 600px;
        padding-bottom: 200px;
    }
`;

export const ProblemsImage = styled.div`

    width: 100%;
    height: 100%;
    background-image: url(${problems});
    background-size: cover;

    @media screen and (max-width: 1200px) {
        
        width: 95%;
        height: 100%;
        background-image: url(${problemsTablet});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    @media screen and (max-width: 765px) {
        
        background-image: url(${problemsMobile});
    }
`;