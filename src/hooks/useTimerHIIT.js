import {useState, useEffect} from 'react';

const useTimerHIIT = (session) => {

    const [time, setTime] = useState(3);
    const [actualSet, setActualSet] = useState('');
    const [actualWork, setActualWork] = useState('');
    const [actualRep, setActualRep] = useState('');
    const [pause, setPause] = useState(false);
    const [reset, setReset] = useState(false);

    useEffect(() => {

        const timer = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        if(pause || reset || time === 0) clearInterval(timer);

        return () => {
            clearInterval(timer);
        }
    }, [pause, time, reset]);
    

    return [time, actualSet, actualWork, actualRep, setPause, setReset];

}

export default useTimerHIIT;
