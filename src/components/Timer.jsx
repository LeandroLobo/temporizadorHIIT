import React, {useRef, useEffect} from 'react';
import timerHIIT from '../hooks/useTimerHIIT';
import '../css/timer.css';

const Timer = ({session, setTimerMount}) => {

    const [
        time, actualSet, actualWork, actualRep, reset, setPause
    ] = timerHIIT(session);

    const btnPause = useRef();

    const handlePause = () => {
        if(btnPause.current.innerHTML === 'PAUSE'){
            setPause(true);
            btnPause.current.innerHTML = 'PLAY';
        }
        else{
            setPause(false);
            btnPause.current.innerHTML = 'PAUSE';
        }
    }

    useEffect(() => {
        setTimerMount(!reset);
    }, [reset])

    return (
        <div className="modal-timer">
            <div className="timer-container">
                <fieldset>
                <legend>{session.name}</legend>
                <h3>{time}</h3>
                <h4>{actualSet}</h4>
                <p>{actualWork}</p>
                <h4>{actualRep}</h4>
                </fieldset>
                <div className="timer-buttons">
                    <button ref={btnPause} onClick={handlePause}>PAUSE</button>
                    <button onClick={() => {setTimerMount(false)}}>CLEAR</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;