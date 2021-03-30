import React, {Fragment, useEffect} from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Timer from './components/Timer';
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
    }
  ]

  const testSession = {
    name: 'Sesión de Prueba',
    duration: 90,
    sets: [
        {
            name: 'Pecho',
            work: 10,
            rest: 5,
            reps: 2
        },
        {
            name: 'ABS',
            work: 13,
            rest: 7,
            reps: 3
        }
    ]
}

  return (
    <Fragment>
      <Header/>
      <Table sessions={userSessions}/>
      <Timer session={testSession}/>
    </Fragment>
  );
}

export default App;
