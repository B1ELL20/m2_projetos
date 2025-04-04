import About from "./Components/About"
import Cover from "./Components/Cover"
import NavBar from "./Components/NavBar"
import SubCover from "./Components/SubCover"

function App() {

  return (
    <>
      <NavBar/>
      <Cover/>
      <SubCover/>
      <About wrap={0}/>
      <About wrap={1}/>
    </>
  )
}

export default App
