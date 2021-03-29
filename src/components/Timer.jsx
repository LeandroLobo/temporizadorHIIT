import React, {useState, useEffect} from 'react';

const Timer = () => {

    const session = {
        name: 'Sesión de Prueba',
        duration: 90,
        sets: [
            {
                name: '',
                work: 10,
                rest: 5,
                reps: 2
            },
            {
                name: '',
                work: 13,
                rest: 7,
                reps: 3
            }
        ]
    }

    const [time, setTime] = useState(0);
    const [actualSet, setActualSet] = useState('');

    useEffect(() => {
        session.sets.map(set => {
            for(let i=0; i<set.reps; i++){
                //acá va algo que funciona
            }
        })
    }, [session])

    return (
        <div>
            <h3>{session.name}</h3>
            <h4>{actualSet}</h4>
            <h3>{time} seg</h3>
        </div>
    );
}

export default Timer;
