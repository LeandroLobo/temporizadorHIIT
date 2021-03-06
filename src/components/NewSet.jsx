import React, {useState, useEffect} from 'react';
import '../css/formNewSet.css';
import metIconos from '../helpers/iconos';

const NewSet = ({setOpenNewSet, sets, setSets}) => {

    const [name, setName] = useState('');
    const [work, setWork] = useState(0);
    const [rest, setRest] = useState(0);
    const [reps, setReps] = useState(0);
    const [nameError, setNameError] = useState(false);
    const [workError, setWorkError] = useState(false);
    const [restError, setRestError] = useState(false);
    const [repsError, setRepsError] = useState(false);

    const addSet = (e) => {
        e.preventDefault();
        // Manejo de errores (rest puede ser cero)
        name ?setNameError(false) :setNameError(true);
        work ?setWorkError(false) :setWorkError(true);
        rest ?setRestError(false) :setRestError(true);
        reps ?setRepsError(false) :setRepsError(true);
        if(!name || !work || !reps) return;
        //Guardar nuevo set
        setSets([
            ...sets,
            {
                name,
                work: parseInt(work),
                rest: parseInt(rest),
                reps: parseInt(reps)
            }
        ]);
        setOpenNewSet(false);
    }
    useEffect(() => metIconos.inicio(),[]);

    return (
        <form className="form-container" onSubmit={addSet}>
            <div>
                <label htmlFor="set-name">Nombre:</label>
                <input 
                    type="text" id="set-name" name="name" maxLength={15}
                    onChange={e => setName(e.target.value)}
                    placeholder="ejemplo: 'push-ups'"
                />
            </div>
            {nameError && <p className="form-error">Campo Obligatorio</p>}

            <div>
                <label htmlFor="set-work">Work:</label>
                <input 
                    type="number" id="set-work" name="work" min="1" step="1"
                    onChange={e => setWork(e.target.value)}
                />
                <label>segundos</label>
            </div>
            {workError && <p className="form-error">Campo Obligatorio</p>}

            <div>
                <label htmlFor="set-rest">Rest:</label>
                <input
                    type="number" id="set-rest" name="rest" min="0" step="1"
                    onChange={e => setRest(e.target.value)}
                />
                <label>segundos</label>
            </div>
            {restError && <p className="form-error">Campo Obligatorio</p>}

            <div>
                <label htmlFor="set-reps">Repetir:</label>
                <input 
                    type="number" id="set-reps" name="reps" min="1" step="1"
                    onChange={e => setReps(e.target.value)}
                />
                <label>veces</label>
            </div>
            {repsError && <p className="form-error">Campo Obligatorio</p>}
            <div className="form-buttons">
                <input className="btn-green" type="submit" name="add" value="Agregar a la sesión"/>
                <button className="btn-red" onClick={()=>setOpenNewSet(false)}>Cancelar</button>
            </div>
        </form>
    );
}

export default NewSet;
