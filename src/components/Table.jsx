import React, {useState} from 'react';
import Session from './Session';
import '../css/table.css';
import Timer from './Timer';
import NewSession from './NewSession';

const Table = ({sessions, setSessions}) => {

    const [index, setIndex] = useState(-1);
    const [timerMount, setTimerMount] = useState(false);
    const [openNewSession, setOpenNewSession] = useState(false);

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
                        {(index === i && !timerMount)
                        && <Session session={session} setTimerMount={setTimerMount} sessions={sessions} setSessions={setSessions}/>
                        }
                    </div>))}
            </div>
            <nav>
                <button className="btn-table" onClick={()=>setOpenNewSession(true)}>Nueva Sesión</button>
            </nav>
            {(timerMount) && <Timer session={sessions[index]} setTimerMount={setTimerMount}/>}
            {(openNewSession) && <NewSession sessions={sessions} setSessions={setSessions} setOpenNewSession={setOpenNewSession}/>}
        </div>
    );
}

export default Table;
/******************** Leandro Lobo */