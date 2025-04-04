import React from 'react'
import { 
    AboutBox, 
    AboutContainer,
    AboutContent,
    AboutImage,
    ContentButton,
    ContentImage,
    ContentText,
    ContentTitle,
    TitleBorderBottom
} from './AboutElements'

const About = ({ wrap }) => {
  return (
    <AboutBox $wrap={wrap}>
        <AboutContainer $wrap={wrap}>
            <AboutContent $wrap={wrap}>
                <ContentTitle>Boa Elaboração</ContentTitle>
                <TitleBorderBottom $wrap={wrap}/>
                <ContentText>Se você quiser executar a sua piscina de forma prática, o projeto vai te dar o passo a passo para fazer tudo corretamente. Com um processo prático e eficiente, garantindo qualidade e evitando sua dor de cabeça.</ContentText>
                <ContentButton>Venha conhecer a M2 Projetos</ContentButton>
            </AboutContent>
            <AboutImage>
                <ContentImage/>
            </AboutImage>
        </AboutContainer>
    </AboutBox>
  )
}

export default About