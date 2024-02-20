import { Navbar, Footer  } from "./components/"
import { MainView } from "./views/MainView";
import './styles/navbar.css'
import './styles/footer.css'

function App() {
  return(
    <>
      <Navbar/>
      <MainView/>
      <Footer/>
    </>
  )
}

export default App;
