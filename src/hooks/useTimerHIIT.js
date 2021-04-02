import {useState, useEffect} from 'react';

const useTimerHIIT = (session) => {

    const [time, setTime] = useState(3);
    const [actualSet, setActualSet] = useState('Countdown');
    const [actualWork, setActualWork] = useState('READY !');
    const [actualRep, setActualRep] = useState('-----');
    const [pause, setPause] = useState(false);
    const [reset, setReset] = useState(false);

    // variables de control
    const [pointer, setPointer] = useState(0);
    const [pointerRep, setPointerRep] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        if(pause || reset){
            clearInterval(timer);
            return;
        }

        if(time === 0) {
            if(actualWork === 'WORKING...') {
                if(pointerRep === session.sets[pointer].reps && pointer +1 === session.sets.length) setReset(true);
                else {
                    setActualWork('REST');
                    setTime(session.sets[pointer].rest);
                }
            }
            else {
                setActualWork('WORKING...');
                if(pointerRep === session.sets[pointer].reps){
                    setActualSet(session.sets[pointer +1].name);
                    setTime(session.sets[pointer +1].work);
                    setPointerRep(1);
                    setActualRep(`Reps 1 de ${session.sets[pointer +1].reps}`);
                    setPointer(pointer +1);
                }
                else {
                    setActualSet(session.sets[pointer].name);
                    setTime(session.sets[pointer].work);
                    setActualRep(`Reps ${pointerRep +1} de ${session.sets[pointer].reps}`);
                    setPointerRep(pointerRep +1);
                }
            }
        }

        return () => {
            clearInterval(timer);
        }
    }, [pause, time, reset, actualWork, pointerRep, session.sets, pointer]);

    useEffect(() => {
        if(reset){
            setTime(0);
            setActualWork('REST');
            setActualSet('FIN');
            setActualRep('-----');
        }
    }, [reset])
    

    return [time, actualSet, actualWork, actualRep, reset, setPause];

}

export default useTimerHIIT;