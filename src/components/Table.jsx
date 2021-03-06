import React, {useState, useEffect} from 'react';
import Session from './Session';
import '../css/table.css';
import Timer from './Timer';
import NewSession from './NewSession';

const Table = ({sessions, setSessions}) => {

    const [index, setIndex] = useState(-1);
    const [timerMount, setTimerMount] = useState(false);
    const [openNewSession, setOpenNewSession] = useState(false);
    const [editStage, setEditStage] = useState('Nueva Sesión');

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
                <div>
                    <button className="btn-new" onClick={()=>setOpenNewSession(true)}>
                        <span className="icono-plus"></span>
                        {editStage}
                    </button>
                    {(openNewSession) && <NewSession
                        sessions={sessions}
                        setSessions={setSessions}
                        setOpenNewSession={setOpenNewSession}
                        setEditStage={setEditStage}
                    />}
                </div>
                
            </div>
            {(timerMount) && <Timer session={sessions[index]} setTimerMount={setTimerMount}/>}
        </div>
    );
}

export default Table;
/******************** Leandro Lobo */