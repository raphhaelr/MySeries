import React from 'react'
import Header from './Header'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'
import Series from './Series'
import NovaSerie from './NovaSerie'
import InfoSerie from './InfoSerie'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Home = () => {
  return (
    <h1>Home</h1>
  )
}

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/generos' exact component={Generos}></Route>
        <Route path='/generos/novo' exact component={NovoGenero}></Route>
        <Route path='/generos/:id' exact component={EditarGenero}></Route>
        <Route path='/series' exact component={Series}></Route>
        <Route path='/series/novo' exact component={NovaSerie}></Route>
        <Route path='/series/:id' exact component={InfoSerie}></Route>
        </Switch>
      </div>
    </Router>
   
  )
}

export default App;
