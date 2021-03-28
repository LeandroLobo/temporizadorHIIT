import React, {Fragment, useEffect} from 'react'
import FormNewSet from './components/FormNewSet'
import Header from './components/Header'
import Temporizador from './components/Temporizador'
import metIconos from './helpers/iconos'

const App = () => {

  useEffect(() => metIconos.inicio(),[]);

  return (
    <Fragment>
      <Header/>
      <Temporizador/>
      <FormNewSet/>
    </Fragment>
  )
}

export default App
