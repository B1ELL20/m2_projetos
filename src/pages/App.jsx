import About from "../Components/About"
import Contact from "../Components/Contact"
import Cover from "../Components/Cover"
import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"
import Projects from "../Components/Projects"
import Services from "../Components/Services"
import SubCover from "../Components/SubCover"

function App() {

  return (
    <>
      <NavBar/>
      <Cover/>
      <SubCover/>
      <About wrap={0}/>
      <About wrap={1}/>
      <Services/>
      <Contact/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
