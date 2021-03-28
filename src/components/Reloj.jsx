import React, {useState, useEffect} from 'react';
import '../css/reloj.css';

const Reloj = () => {

    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');

    useEffect(() => {
        getFecha();
        setInterval(() => {
            const DATE = new Date();
            setHora(DATE.toLocaleTimeString('en-GB'));
        }, 1000);
    }, []);

    useEffect(() => {
        if (hora === '00:00:00') getFecha();
    }, [hora]);

    function getFecha() {
        const DATE = new Date();
        let mes = -1;
        switch (DATE.getMonth()) {
            case 0: mes = 'enero'; break;
            case 1: mes = 'febrero'; break;
            case 2: mes = 'marzo'; break;
            case 3: mes = 'abril'; break;
            case 4: mes = 'mayo'; break;
            case 5: mes = 'junio'; break;
            case 6: mes = 'julio'; break;
            case 7: mes = 'agosto'; break;
            case 8: mes = 'septiembre'; break;
            case 9: mes = 'octubre'; break;
            case 10: mes = 'noviembre'; break;
            case 11: mes = 'diciembre'; break;
            default: break;
        }
        let diaSemana = -1;
        switch (DATE.getDay()) {
            case 0: diaSemana = 'Domingo'; break;
            case 1: diaSemana = 'Lunes'; break;
            case 2: diaSemana = 'Martes'; break;
            case 3: diaSemana = 'Miércoles'; break;
            case 4: diaSemana = 'Jueves'; break;
            case 5: diaSemana = 'Viernes'; break;
            case 6: diaSemana = 'Sábado'; break;
            default: break;
        }
        let diaMes = DATE.getDate();
        let anio = DATE.getFullYear();

        setFecha(`${diaSemana}, ${diaMes} de ${mes} de ${anio}`);
        console.log('Fecha formato britanico, zona UTC: ', DATE.toLocaleString('en-GB', { timeZone: 'UTC' }));
    }

    return (
        <div className="reloj">
            <p><span className="icono-calendar"></span>{fecha}</p>
            <p><span className="icono-clock"></span><strong>{hora}</strong></p>
        </div>
    );
}
 
export default Reloj;