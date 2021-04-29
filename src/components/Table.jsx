import React, {useState} from 'react';
import Session from './Session';
import '../css/table.css';
import Timer from './Timer';
import NewSession from './NewSession';
import EditSession from './EditSession';

const Table = ({sessions, setSessions}) => {

    const [index, setIndex] = useState(-1);
    const [timerMount, setTimerMount] = useState(false);
    const [openNew, setOpenNew] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

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
                        && <Session session={session} setTimerMount={setTimerMount}/>
                        }
                    </div>))}
            </div>
            <nav>
                <button className="btn-table" onClick={()=>setOpenNew(true)} name="new">Nueva Sesión</button>
                <button className="btn-table" onClick={()=>setOpenEdit(true)} name="edit">Editar Sesión</button>
            </nav>
            {(timerMount) && <Timer session={sessions[index]} setTimerMount={setTimerMount}/>}
            {(openNew) && <NewSession setSessions={setSessions}/>}
            {(openEdit) && <EditSession setSessions={setSessions}/>}
        </div>
    );
}

export default Table;
/******************** Leandro Lobo */