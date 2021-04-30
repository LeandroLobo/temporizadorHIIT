import React, {useState, useEffect} from 'react';
import NewSet from './NewSet';

const NewSession = ({sessions, setSessions, setOpenNewSession}) => {
    
    const [name, setName] = useState('Nueva Sesión');
    const [sets, setSets] = useState([]);
    const [openNewSet, setOpenNewSet] = useState(null);
    const [duration, setDuration] = useState(0)

    const handleNewSession = () => {
        const newSession = {
            name,
            duration,
            sets
        };
        setSessions([...sessions, newSession]);
        setOpenNewSession(false);
    }
    useEffect(() => {
        setDuration(sets.reduce((d, set)=> d + (set.work + set.rest)*set.reps, 0));
    }, [sets]);

    return (
        <div className="session">
            <ul>
                <input type="text" name="name" placeholder="Cambiar nombre" onChange={e => setName(e.target.value)}/>
                {sets.map(set => (
                    <li key={set.name}>
                        <p>{set.name}</p>
                        <p>work: <strong>{set.work}s</strong> rest: <strong>{set.rest}s</strong></p>
                        <p>reps: <strong>{set.reps}</strong></p>
                    </li>
                ))}
            </ul>
            <p>Duración: <strong>{Math.floor(duration/60)}</strong> min, <strong>{duration%60}</strong> seg</p>
            <button onClick={() => {setOpenNewSet(true)}}>Agregar Set</button>
            {sets.length > 0 && <button onClick={handleNewSession}>Guardar Session</button>}
            <button onClick={() => {setOpenNewSession(false)}}>Cancelar</button>
            {(openNewSet) && <NewSet setOpenNewSet={setOpenNewSet} sets={sets} setSets={setSets}/>}
        </div>
    );
}

export default NewSession;