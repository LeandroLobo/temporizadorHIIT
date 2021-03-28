import React, {useState} from 'react';
import '../css/formNewSet.css';

const FormNewSet = () => {

    const [session, setSession] = useState(
        {
            name: '',
            sets: [],
            duration: 0
        }
    );
    const [sets, setSets] = useState(
        [
            {
                name: '',
                work: 0,
                rest: 0,
                reps: 1
            }
        ]
    );
    const [name, setName] = useState('');
    const [work, setWork] = useState(0);
    const [rest, setRest] = useState(0);
    const [reps, setReps] = useState(1);

    const startSession = ()=> {}
    const addSet = () => {}
    const saveSession = () => {}

    return (
        <div className="modal-form">
            <form className="form-container">
                <fieldset>
                    <legend>New Set</legend>
                    <div>
                        <label htmlFor="set-name">Set name:</label>
                        <input 
                            type="text" id="set-name" name="name"
                            onChange={e => setName(e.target.value)}
                            placeholder="example: 'push-ups'"
                        />
                    </div>
                    <div>
                        <label htmlFor="set-work">Work time:</label>
                        <input 
                            type="number" id="set-work" name="work" min={1} step={1}
                            onChange={e => setWork(e.target.value)}
                        />
                        <label> seconds</label>
                    </div>
                    <div>
                        <label htmlFor="set-rest">Rest time:</label>
                        <input
                            type="number" id="set-rest" name="rest" min={1} step={1}
                            onChange={e => setRest(e.target.value)}
                        />
                        <label> seconds</label>
                    </div>
                    <div>
                        <label htmlFor="set-reps">Reps:</label>
                        <input 
                            type="number" id="set-reps" name="reps" min={1} step={1}
                            onChange={e => setReps(e.target.value)}
                        />
                        <label> time/s</label>
                    </div>
                </fieldset>
                <div className="form-buttons">
                    {/* <input type="button" name="start" value="START" onClick={startSession} /> */}
                    <input type="button" name="add" value="ADD SET" onClick={addSet} />
                    <input type="button" name="save" value="SAVE SESSION" onClick={saveSession} />
                </div>
            </form>
        </div>
    );
}

export default FormNewSet;
