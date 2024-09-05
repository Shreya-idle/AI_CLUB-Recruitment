import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Slide from './pages/Slide'
import Challenge from './pages/Challenge'
import Contact from './pages/Contact'

const App= () =>{
  return(
    <div>
        <About />
        <Slide />
        <Challenge />
        <Contact />
    </div>
  )
}

export default App;
