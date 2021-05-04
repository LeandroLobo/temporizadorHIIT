import React, { useState, useEffect } from 'react';
import '../css/session.css';
import metIconos from '../helpers/iconos';

const Session = ({session, setTimerMount, sessions, setSessions}) => {

    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDelete = () => {
        const aux = sessions.filter(sess => (sess !== session));
        setSessions(aux);
    }

    useEffect(() => metIconos.inicio(),[]);

    return (
        <div className="session">
            <ul>
                {session.sets.map(set => (
                    <li key={set.name}>
                        <p className="set-name">{set.name}</p>
                        <p>work: <strong>{set.work}s</strong> rest: <strong>{set.rest}s</strong></p>
                        <p>reps: <strong>{set.reps}</strong></p>
                    </li>
                ))}
            </ul>
            <p>Duración: <strong>{Math.floor(session.duration/60)}</strong> min, <strong>{session.duration%60}</strong> seg</p>
            <div className="form-buttons">
                <button className="btn-green" onClick={() => {setTimerMount(true)}}>
                    <span className="icono-play"></span>
                    <p>Comenzar</p>
                </button>
                <button className="btn-red" onClick={()=>setConfirmDelete(true)}>
                    <span className="icono-trash"></span>
                    <p>Borrar sesión</p>
                </button>
                {(confirmDelete) && <button onClick={handleDelete}><h4>BORRAR</h4></button>}
            </div>
        </div>
    );
}

export default Session;
