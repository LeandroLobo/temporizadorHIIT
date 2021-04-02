import React, {Fragment, useEffect} from 'react';
import Header from './components/Header';
import Table from './components/Table';
import metIconos from './helpers/iconos';

const App = () => {

  useEffect(() => metIconos.inicio(),[]);

  const userSessions = [
    {
      name: 'Sesión Standard',
      duration: 480,
      sets: [
        {
          name: '45/15',
          work: 45,
          rest: 15,
          reps: 8
        }
      ]
    },
    {
      name: 'Sesión Standard Heavy',
      duration: 960,
      sets: [
        {
          name: '90/30',
          work: 90,
          rest: 30,
          reps: 8
        }
      ]
    },
    {
      name: 'Sesión de Prueba',
      duration: 14,
      sets: [
        {
          name: 'set1',
          work: 5,
          rest: 3,
          reps: 2
        }
      ]
    }
  ]

  return (
    <Fragment>
      <Header/>
      <Table sessions={userSessions}/>
    </Fragment>
  );
}

export default App;
