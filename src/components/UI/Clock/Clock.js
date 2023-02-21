import React, { useEffect, useState } from 'react'

const Clock = () => {

    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()
    let interval;

    const destination = new Date('May 1, 2023').getTime()
    const countDown = () => {
        interval = setInterval(() => {
            const now = new Date().getTime();
            const different = destination - now;
            const days = Math.floor(different / (1000 * 60 * 60 * 24))
            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor(different % (1000 * 60 *60 ) / (1000 * 60))
            const seconds = Math.floor(different % (1000 * 60) / (1000))
            if (destination < 0) clearInterval(interval)
            else {
                setDay(days);
                setHour(hours);
                setMinute(minutes);
                setSecond(seconds);
            }
        })
    }
    
    useEffect(() => {
        countDown()
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="clock__wrapper d-flex gap-3">
            <div className="clock__data ">
                <div className="text-center">
                    <h1>{day} </h1>
                    <h5>Days</h5>
                </div>
                <span className='fs-3'>:</span>
            </div>
            <div className="clock__data ">
                <div className="text-center">
                    <h1>{hour} </h1>
                    <h5>Hours</h5>
                </div>
                <span className='fs-3'>:</span>
            </div>
            <div className="clock__data ">
                <div className="text-center">
                    <h1>{minute} </h1>
                    <h5>Minutes</h5>
                </div>
                <span className='fs-3'>:</span>
            </div>
            <div className="clock__data ">
                <div className="text-center">
                    <h1>{second} </h1>
                    <h5>Seconds</h5>
                </div>
            </div>
        </div>
    )
}

export default Clock