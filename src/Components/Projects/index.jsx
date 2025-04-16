import React, { useState } from 'react'
import { 
    BoxAlert,
    BoxArrows,
    ButtonsArrows,
    CarrosselContainer,
    Carrossels,
    ContentText,
    IconAlert,
    ImagePost,
    ImageProject,
    ImagesCarrosel,
    PostContainer,
    ProblemsImage,
    ProjectContent,
    ProjectPost,
    ProjectsBox, 
    ProjectsContainer, 
    ProjectsContainerBack, 
    ProjectsProblems,
    TextAlert
} from './ProjectsElements'

import { RiAlertLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Projects = () => {

    const [position, setPosition] = useState(0);
    
    function goToBack() {

        if (position > 0) {

            setPosition(position - 1);

        } else if (position === 0) {

            setPosition(3);
        }
    }

    function goToNext() {
        
        if (position < 3) {

            setPosition(position + 1);

        } else if (position === 3) {

            setPosition(0);
        }
    }

  return (
    <ProjectsBox>
        <ProjectsContainerBack>
            <ProjectsContainer>

                <CarrosselContainer>

                        <PostContainer>
                            <ImagesCarrosel>
                                <Carrossels $position={position}>
                                    <ImagePost/>
                                    <ImagePost/>
                                    <ImagePost/>
                                    <ImagePost/>
                                </Carrossels>
                            </ImagesCarrosel>
                            <ProjectPost>
                                <ImageProject/>
                                <ProjectContent>
                                    <ContentText>Projeto de piscinas elaborados com qualidade e eficiência</ContentText>
                                    <BoxArrows>
                                        <ButtonsArrows onClick={goToBack}><IoIosArrowBack/></ButtonsArrows>
                                        <ButtonsArrows onClick={goToNext}><IoIosArrowForward/></ButtonsArrows>
                                    </BoxArrows>
                                </ProjectContent>
                            </ProjectPost>
                        </PostContainer>
       
                </CarrosselContainer>

                <ProjectsProblems>
                    <ProblemsImage/>
                    <BoxAlert>
                    <IconAlert><RiAlertLine/></IconAlert>
                    <TextAlert>Evite casos como esses e adquira seu projeto!</TextAlert>
                </BoxAlert>
                </ProjectsProblems>
                
            </ProjectsContainer>
        </ProjectsContainerBack>
    </ProjectsBox>
  )
}

export default Projects