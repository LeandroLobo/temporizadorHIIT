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
            <div className="table-content">
                {sessions.map((session, i) => (
                <div key={session.id}>
                    <h3 className="session-name" onClick={() => (index===i)?setIndex(-1):setIndex(i)}>
                        {session.name} 
                    </h3>
                    {(index === i && !timerMount)
                    && <Session session={session} setTimerMount={setTimerMount} sessions={sessions} setSessions={setSessions}/>}
                </div>
                ))}
            </div>
            {(openNewSession) && <NewSession sessions={sessions} setSessions={setSessions} setOpenNewSession={setOpenNewSession}/>}
            <nav>
                <button className="btn-new" onClick={()=>setOpenNewSession(true)}>
                    <span className="icono-plus"></span>
                    Nueva Sesión
                </button>
            </nav>
            {(timerMount) && <Timer session={sessions[index]} setTimerMount={setTimerMount}/>}
        </div>
    );
}

export default Table;
/******************** Leandro Lobo */