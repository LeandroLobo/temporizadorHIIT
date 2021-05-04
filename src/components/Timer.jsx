import React, {useRef, useEffect} from 'react';
import timerHIIT from '../hooks/useTimerHIIT.jsx';
import '../css/timer.css';
import beepSound from '../sounds/beep.wav';
import bellSound from '../sounds/bell.wav';
import metIconos from '../helpers/iconos';

const Timer = ({session, setTimerMount}) => {

    const beepSoundRef = useRef();
    const bellSoundRef = useRef();
    const containerRef = useRef();
    const workRef = useRef();

    const [
        RingMeter, actualSet, actualWork, actualRep, reset, pause, setPause
    ] = timerHIIT(session, beepSoundRef, bellSoundRef);

    const handlePause = () => {
        if(!pause){
            setPause(true);;
        }
        else{
            setPause(false);;
        }
    }

    useEffect(() => {
        setTimerMount(!reset);
    }, [reset, setTimerMount]);
    useEffect(() => metIconos.inicio(),[pause]);

    return (
        <div className="modal-timer">
            <div ref={containerRef} className="timer-container">
                <fieldset>
                <legend>{session.name}</legend>
                <RingMeter/>
                <h4>{actualSet}</h4>
                <p ref={workRef}>{actualWork}</p>
                <h4>{actualRep}</h4>
                </fieldset>
                <div className="timer-buttons">
                    <button onClick={handlePause}>
                        {(pause)
                            ?<span style={{color:'rgb(80, 255, 185)'}} className="icono-playCircle"></span>
                            :<span style={{color:'rgb(148, 101, 248)'}} className="icono-pauseCircle"></span>
                        }
                    </button>
                    <button onClick={() => {setTimerMount(false)}}>
                        <span style={{color:'rgb(148, 101, 248)'}} className="icono-stopCircle"></span>
                    </button>
                </div>
            </div>
            <audio ref={beepSoundRef} src={beepSound}></audio>
            <audio ref={bellSoundRef} src={bellSound}></audio>
        </div>
    );
}

export default Timer;