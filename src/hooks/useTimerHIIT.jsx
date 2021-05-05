import React, {useState, useEffect} from 'react';
import { Donut } from 'react-dial-knob';

const useTimerHIIT = (session, beepSound, bellSound) => {

    const [time, setTime] = useState(3);
    const [actualSet, setActualSet] = useState('Countdown');
    const [actualWork, setActualWork] = useState('READY !');
    const [actualRep, setActualRep] = useState('-----');
    const [pause, setPause] = useState(false);
    const [reset, setReset] = useState(false);
    const [maxTime, setMaxTime] = useState(3);
    const [color, setColor] = useState('coral');

    // variables de control
    const [pointer, setPointer] = useState(0);
    const [pointerRep, setPointerRep] = useState(0);

    useEffect(() => {

        if(actualWork !== 'WORKING...' && time < 4 && time > 0){
            beepSound.current.play();
        }

        const timer = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        if(pause || reset){
            clearInterval(timer);
            return;
        }

        if(time === 0) {
            if(actualWork === 'WORKING...') {
                bellSound.current.play();
                if(pointerRep === session.sets[pointer].reps && pointer +1 === session.sets.length) {
                    clearInterval(timer);
                    bellSound.current.play();
                    setTimeout(() => setReset(true), 2500);
                }
                else {
                    setActualWork('REST');
                    setTime(session.sets[pointer].rest);
                    setMaxTime(session.sets[pointer].rest);
                    setColor('coral');
                }
            }
            else {
                setActualWork('WORKING...');
                if(pointerRep === session.sets[pointer].reps){
                    setActualSet(session.sets[pointer +1].name);
                    setTime(session.sets[pointer +1].work);
                    setMaxTime(session.sets[pointer +1].work);
                    setColor('rgb(80, 255, 185)');
                    setPointerRep(1);
                    setActualRep(`Reps 1 de ${session.sets[pointer +1].reps}`);
                    setPointer(pointer +1);
                }
                else {
                    setActualSet(session.sets[pointer].name);
                    setTime(session.sets[pointer].work);
                    setMaxTime(session.sets[pointer].work);
                    setColor('rgb(80, 255, 185)');
                    setActualRep(`Reps ${pointerRep +1} de ${session.sets[pointer].reps}`);
                    setPointerRep(pointerRep +1);
                }
            }
        }

        return () => {
            clearInterval(timer);
        }
    }, [pause, time, reset, actualWork, pointerRep, session.sets, pointer, beepSound, bellSound]);

    useEffect(() => {
        if(reset){
            setTime(0);
            setActualWork('REST');
            setActualSet('FIN');
            setActualRep('-----');
        }
    }, [reset])
    
    const DonutMeter = () => {
        return (
            <Donut
                diameter={200}
                min={0}
                max={maxTime}
                step={1}
                value={time}
                theme={{
                    donutColor: color,
                    bgrColor: 'rgb(24, 9, 29)',
                    centerColor: 'rgb(24, 9, 29)',
                    donutThickness: 35
                }}
                style={{
                    margin: '5px',
                    color: 'red'
                }}
                spaceMaxFromZero={false}
            />
        );
    }
    

    return [DonutMeter, actualSet, actualWork, actualRep, reset, pause, setPause];

}

export default useTimerHIIT;