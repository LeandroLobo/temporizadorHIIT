import React, {Fragment, useEffect} from 'react'
import Header from './components/Header'
import Temporizador from './components/Temporizador'
import metIconos from './helpers/iconos'

const App = () => {

  useEffect(() => metIconos.inicio(),[]);

  return (
    <Fragment>
      <Header/>
      <Temporizador/>
    </Fragment>
  )
}

export default App
