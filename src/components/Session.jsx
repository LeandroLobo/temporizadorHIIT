import React from 'react';
import '../css/session.css';

const Session = ({session, setTimerMount}) => {

    return (
        <div className="session">
            <ul>
                {session.sets.map(set => (
                    <li key={set.name}>
                        <p>{set.name}</p>
                        <p>work: <strong>{set.work}s</strong> rest: <strong>{set.rest}s</strong></p>
                        <p>reps: <strong>{set.reps}</strong></p>
                    </li>
                ))}
            </ul>
            <p>Duración: <strong>{Math.floor(session.duration/60)}</strong> min, <strong>{session.duration%60}</strong> seg</p>
            <button onClick={() => {setTimerMount(true)}}>Comenzar</button>
        </div>
    );
}

export default Session;
