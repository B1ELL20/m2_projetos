import React, { useEffect, useState } from 'react'
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

import Aos from "aos"
import "aos/dist/aos.css"

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

    useEffect(() => {

        Aos.init({ duration: 700 });

    }, []);

  return (
    <ProjectsBox>
        <ProjectsContainerBack>
            <ProjectsContainer>

                <CarrosselContainer>

                        <PostContainer>
                            <ImagesCarrosel data-aos="fade-left">
                                <Carrossels $position={position}>
                                    <ImagePost $select={0}/>
                                    <ImagePost $select={1}/>
                                    <ImagePost $select={2}/>
                                    <ImagePost $select={3}/>
                                </Carrossels>
                            </ImagesCarrosel>
                            <ProjectPost>
                                <ImageProject/>
                                <ProjectContent>
                                    <ContentText>Projeto de piscinas elaborados com qualidade e eficiência</ContentText>
                                    <BoxArrows data-aos="fade-left">
                                        <ButtonsArrows onClick={goToBack}><IoIosArrowBack/></ButtonsArrows>
                                        <ButtonsArrows onClick={goToNext}><IoIosArrowForward/></ButtonsArrows>
                                    </BoxArrows>
                                </ProjectContent>
                            </ProjectPost>
                        </PostContainer>
       
                </CarrosselContainer>

                <ProjectsProblems>
                    <ProblemsImage/>
                    <BoxAlert data-aos="fade-left">
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