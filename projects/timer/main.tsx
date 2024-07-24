'use client'
import React, { useEffect, useRef, useState } from "react";
import styles from './main.module.css';

const TimerProject = () => {

    const [ timer, setTimer ] = useState<number>(5);
    const [ counter, setCounter ] = useState<number>(0);
    const counterRef = useRef<number>(counter);
    const highScoreRef = useRef(0);

    const incrementCount = () => {
        setCounter( prev => {
            const newValue = prev + 1;
            counterRef.current = newValue;
            return newValue;
        })
    }

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(prev => {

                if(prev === 0) {

                    if(counterRef.current > highScoreRef.current){

                        highScoreRef.current = counterRef.current
                    }
                    setCounter(0);
                    return 5
                }
                
                return prev - 1
            })
        }, 1000)

        return () => {

            clearInterval(timerInterval);
        }
    }, [])


    return (
        <div className={styles.container}>
            <h3> High Score{ highScoreRef.current }</h3>
            <p>Counter: { counter } </p>
            <p>Timer {timer} </p>

            <button onClick={incrementCount}>Increase count</button>
        </div>
    )
};

export default TimerProject;