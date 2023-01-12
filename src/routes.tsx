import { Routes as Switch, Route } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portifolio from './pages/Portifolio'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' 
        element={ <Home/> } 
      />

      <Route path='/about' 
        element={ <About/> } 
      />

      <Route path='/portifolio' 
        element={ <Portifolio/> } 
      />

      <Route path='/contact' 
        element={ <Contact/> } 
      />
    </Switch>
  )
}

export default Routes