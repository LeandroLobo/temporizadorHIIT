import React, {useRef, useEffect} from 'react';
import timerHIIT from '../hooks/useTimerHIIT';
import '../css/timer.css';
import beepSound from '../sounds/beep.wav';
import bellSound from '../sounds/bell.wav';

const Timer = ({session, setTimerMount}) => {

    const btnPause = useRef();
    const beepSoundRef = useRef();
    const bellSoundRef = useRef();
    const timeRef = useRef();
    const containerRef = useRef();
    const workRef = useRef();

    const [
        time, actualSet, actualWork, actualRep, reset, setPause
    ] = timerHIIT(session, beepSoundRef, bellSoundRef);

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
        if(actualWork === 'WORKING...') {
            containerRef.current.style.color = 'lightseagreen';
            timeRef.current.style.color = 'springgreen';
            workRef.current.style.color = 'springgreen';
        }
        else{
            containerRef.current.style.color = 'coral';
            timeRef.current.style.color = 'deeppink';
            workRef.current.style.color = 'deeppink';
        }
    }, [actualWork, time])

    useEffect(() => {
        setTimerMount(!reset);
    }, [reset, setTimerMount])

    return (
        <div className="modal-timer">
            <div ref={containerRef} className="timer-container">
                <fieldset>
                <legend>{session.name}</legend>
                <h3 ref={timeRef}>{time}</h3>
                <h4>{actualSet}</h4>
                <p ref={workRef}>{actualWork}</p>
                <h4>{actualRep}</h4>
                </fieldset>
                <div className="timer-buttons">
                    <button ref={btnPause} onClick={handlePause}>PAUSE</button>
                    <button onClick={() => {setTimerMount(false)}}>CLEAR</button>
                </div>
            </div>
            <audio ref={beepSoundRef} src={beepSound}></audio>
            <audio ref={bellSoundRef} src={bellSound}></audio>
        </div>
    );
}

export default Timer;