import React, {useRef, useState, useEffect} from 'react';
import '../css/ringMeter.css';

const RingMeter = ({time, timeRef}) => {

    const U = 1;
    const [T, setT] = useState(3000);
    const [prevT, setPrevT] = useState(0);
    const ringRef = useRef();
    function drawO(canvas){
        const ctx = canvas.getContext('2d');
        const renderTime = 1000;
        if (canvas && ctx){
            const r = 70*U;
            const increment = (1.51*Math.PI)/(T/renderTime);
            let a = increment;
            let intervalo = setInterval(function(){
                ctx.beginPath();
                ctx.lineWidth = 50*U;
                ctx.strokeStyle = 'rgb(148, 101, 248)';
                ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2, r, 0, a);
                ctx.stroke();
                if(a >= 1.5*Math.PI){
                    clearInterval(intervalo);
                }
                a += increment;
            }, renderTime);
        }
    };

    useEffect(() => {
        if(time*1000 > prevT){
            const ctx = ringRef.current.getContext('2d');
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            setT((time-0.5)*1000);
        }
        setPrevT(time);
    }, [time]);
    useEffect(() => {
        drawO(ringRef.current);
    }, [T]);

    return (
        <div className="ring-meter">
            <canvas height="200px" width="200px" ref={ringRef}></canvas>
            <h3 ref={timeRef}>{time}</h3>
        </div>
    );
}

export default RingMeter;
