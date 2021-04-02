import React, {useState} from 'react';
import Session from './Session';
import '../css/table.css';
import Timer from './Timer';

const Table = ({sessions}) => {

    const [index, setIndex] = useState(-1);
    const [timerMount, setTimerMount] = useState(false)

    return (
        <div className="table-box">
            <h3>Tablero</h3>
            <div className="table-content">
                {sessions.map((session, i) => (
                    <div
                        key={session.name}
                        onClick={() => {setIndex(i)}}
                    >
                        <h3>{session.name}</h3>
                        {(index === i && !timerMount) && <Session session={session} setTimerMount={setTimerMount}/>}
                    </div>))}
            </div>
            {(timerMount) && <Timer session={sessions[index]} setTimerMount={setTimerMount}/>}
        </div>
    );
}

export default Table;
/******************** Leandro Lobo */