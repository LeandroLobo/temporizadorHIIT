import React, {useState, useEffect} from 'react';
import Session from './Session';
import '../css/table.css';

const Table = ({sessions}) => {

    const [index, setIndex] = useState(-1);

    return (
        <div className="table-box">
            <h3>Tablero</h3>
            <div className="table-content">
                {sessions.map((session, i) => (
                    <div
                        key={session.name}
                        onClick={() => {(index === -1)?setIndex(i):setIndex(-1)}}
                    >
                        <h3>{session.name}</h3>
                        {(index === i) && <Session session={session}/>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Table;