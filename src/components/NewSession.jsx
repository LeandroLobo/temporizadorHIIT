import React, {useState, useEffect} from 'react';
import NewSet from './NewSet';
import '../css/session.css';
import metIconos from '../helpers/iconos';

const NewSession = ({sessions, setSessions, setOpenNewSession, setEditStage}) => {
    
    const [name, setName] = useState('');
    const [sets, setSets] = useState([]);
    const [openNewSet, setOpenNewSet] = useState(null);
    const [duration, setDuration] = useState(0);

    const handleNewSession = () => {
        const newSession = {
            id: Date.now(),
            name: name || 'Nueva Sesión',
            duration,
            sets
        };
        setSessions([...sessions, newSession]);
        setOpenNewSession(false);
    }
    useEffect(() => {
        setDuration(sets.reduce((d, set)=> d + (set.work + set.rest)*set.reps, 0));
    }, [sets]);
    useEffect(() => metIconos.inicio(),[]);
    useEffect(() => {
        openNewSet?setEditStage('Nuevo Set'):setEditStage('Nueva Sesión');
    }, [openNewSet, setEditStage]);

    return (
        <div className="session new-session">
            {(openNewSet)
            ?<NewSet setOpenNewSet={setOpenNewSet} sets={sets} setSets={setSets}/>
            :<div>
                <ul>
                    <div>
                        <input
                            type="text"
                            name="name"
                            maxLength={18}
                            placeholder="Cambiar Nombre"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    {(sets.length === 0)?
                        <li>
                            <p className="set-name">Vacío.</p>
                            <p className="set-name">Prueba agregando algunos Sets a tu Sesión de Trabajo.</p>
                        </li>
                    :sets.map(set => (
                        <li key={set.name}>
                            <p className="set-name">{set.name}</p>
                            <p>work: <strong>{set.work}s</strong> rest: <strong>{set.rest}s</strong></p>
                            <p>reps: <strong>{set.reps}</strong></p>
                        </li>
                    ))}
                </ul>
                <p>Duración: <strong>{Math.floor(duration/60)}</strong> min, <strong>{duration%60}</strong> seg</p>
                <div className="form-buttons">
                    <button className="btn-green" onClick={() => {setOpenNewSet(true)}}>Agregar Set</button>
                    {sets.length > 0 && <button className="btn-green" onClick={handleNewSession}>Guardar Session</button>}
                    <button className="btn-red" onClick={() => {setOpenNewSession(false)}}>Cancelar</button>
                </div>
            </div>
            }
        </div>
    );
}

export default NewSession;