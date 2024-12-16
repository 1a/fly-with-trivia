import {useEffect, useRef, useState} from "react";

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function useTimer(seconds: number) {

    const [timespan, setTimespan] = useState(seconds * SECOND);
    const [isRunning, setIsRunning] = useState(false);
    const [isStopped, setIsStopped] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | number>(0);

    useEffect(() => {
        return () => {
            setIsRunning(false)
            clearInterval(intervalRef.current)
        };
    }, []);

    useEffect(() => {
        if(timespan <= 0) {
            clearInterval(intervalRef.current)
            setIsRunning(false)
        }
    }, [timespan])

    function startTimer(ms = timespan) {
        clearInterval(intervalRef.current);
        setTimespan(ms);
        intervalRef.current = setInterval(() => {
            setTimespan((_timespan) => _timespan - SECOND);
        }, SECOND);
    }

    function pause() {
        setIsRunning(false)
        clearInterval(intervalRef.current)
    }
    function resume() {
        if(timespan) {
            setIsRunning(true)
            startTimer();
        }
    }
    function start() {
        setIsRunning(true)
        startTimer(seconds * SECOND)
    }

    function stop() {
        setIsRunning(false)
        clearInterval(intervalRef.current)
        setIsStopped(true)
    }
    return {
        days: Math.floor(timespan / DAY),
        hours: Math.floor((timespan / HOUR) % 24),
        minutes: Math.floor((timespan / MINUTE) % 60),
        seconds: isStopped ? -1 : Math.floor((timespan / SECOND) % 60),
        pause,
        resume,
        start,
        stop,
        isRunning,
    };
}
