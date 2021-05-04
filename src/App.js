import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Table from './components/Table';
import metIconos from './helpers/iconos';

const App = () => {

  useEffect(() => metIconos.inicio(),[]);

  const defaultSessions = [
    {
      name: 'Sesión Standard',
      duration: 480,
      id: '0000',
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
      id: '0001',
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
      name: 'Test',
      duration: 26,
      id: '0002',
      sets: [
        {
          name: 'anything',
          work: 8,
          rest: 5,
          reps: 2
        }
      ]
    }
  ]
  const [sessions, setSessions] = useState(defaultSessions);

  return (
    <Fragment>
      <Header/>
      <Table sessions={sessions} setSessions={setSessions}/>
    </Fragment>
  );
}

export default App;
