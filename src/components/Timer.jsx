import React, {useRef} from 'react';
import timerHIIT from '../hooks/useTimerHIIT';

const Timer = ({session}) => {

    const [
        time, actualSet, actualWork, actualRep, setPause, setReset
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

    return (
        <div>
            <h3>{session.name}</h3>
            <h3>{time}</h3>
            <h4>#{actualSet}</h4>
            <p>#{actualWork}</p>
            <h4>Reps {actualRep}</h4>
            <button ref={btnPause} onClick={handlePause}>PAUSE</button>
        </div>
    );
}

export default Timer;