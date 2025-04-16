import styled from "styled-components";
import back from "../../images/back_projects.png"
import piscina from "../../images/piscina_project_01.jpeg"
import project from "../../images/project_01.jpeg"
import problems from "../../images/problems_projects.png"

export const ProjectsBox = styled.section`

    width: 100%;
    margin-top: 100px;
`;

export const ProjectsContainerBack = styled.div`

    width: 100%;
    height: 100%;
    max-width: 1800px;
    margin: auto;
    padding-top: 200px;
    background-image: url(${back});
    background-size: cover;
`;

export const BoxAlert = styled.div`

    width: 400px;
    padding-bottom: 50px;
    position: absolute;
    bottom: 0px;
    left: 0px;
`;

export const IconAlert = styled.i`

    font-size: 70px;
    color: #ffcc01;
`;

export const TextAlert = styled.p`

    font-size: 30px;
    letter-spacing: 1px;
    color: white;
`;

export const ProjectsContainer = styled.div`

    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: auto;
`;

export const CarrosselContainer = styled.div`

    width: 1200px;
    height: 600px;
`;

export const Carrossels = styled.div`

    width: 400%;
    height: 400px;
    display: flex;
    margin-left: ${({ $position }) => ($position === 1 ? '-100%' : $position === 2 ? '-200%' : $position === 3 ? '-300%' : '0')};
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
`;

export const ImagePost = styled.div`

    width: 680px;
    height: 400px;
    margin: auto;
    background-image: url(${piscina});
    background-size: cover;
    background-position: center;
    box-shadow: 0px 0px 10px rgba(0,0,0, 0.8);
`;

export const ProjectPost = styled.div`

    width: 40%;
    height: 100%;
`;

export const ImageProject = styled.div`

    width: 300px;
    height: 300px;
    margin-left: auto;
    background-image: url(${project});
    background-size: cover;
    background-position: center;
    border: 5px solid white;
`;

export const ProjectContent = styled.div`

    width: 70%;
    margin-left: auto;
    margin-top: 40px;
    text-align: end;
`;


export const ContentText = styled.p`

    font-size: 24px;
    letter-spacing: 1px;
    padding: 10px 0px;
    color: white;
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
    background-color: white;
    color: #ffcc01;
    cursor: pointer;
`;

export const ProjectsProblems = styled.div`

    width: 100%;
    height: 650px;
    margin-top: 50px;
    position: relative;
`;

export const ProblemsImage = styled.div`

    width: 100%;
    height: 100%;
    background-image: url(${problems});
    background-size: cover;
`;