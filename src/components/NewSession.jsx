import React, {useState} from 'react';
import NewSet from './NewSet';

const NewSession = () => {
    
    const [sets, setSets] = useState([]);
    const [openNewSet, setOpenNewSet] = useState(null);
    return (
        <div className="session">
            <ul>
                {sets.map(set => (
                    <li key={set.name}>
                        <p>{set.name}</p>
                        <p>work: <strong>{set.work}s</strong> rest: <strong>{set.rest}s</strong></p>
                        <p>reps: <strong>{set.reps}</strong></p>
                    </li>
                ))}
            </ul>
            <button onClick={() => {setOpenNewSet(true)}}>Agregar Set</button>
            {sets.length > 0 && <button>Guardar Session</button>}
            {(openNewSet) && <NewSet setOpenNewSet={setOpenNewSet} sets={sets} setSets={setSets}/>}
        </div>
    );
}

export default NewSession;