'use client'
import {QuestionInfo} from "@/components/QuestionInfo";
import {Question} from "@/components/Question";
import {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import useTimer from "@/hooks/timer";
import {Results} from "@/components/Results";
import {SecondsDial} from "@/components/SecondsDial";

export type Answer = {
    id: string,
    content: string,
}

export type Question = {
    id: string,
    content: string,
    answers: Answer[]
}

export function Game() {

    const gameDuration = useRef(1);
    const questions = useRef([
        {
            id: 'q1',
            content: 'what?',
            answers: [
                {
                    'id': 'a1',
                    content: "alpha"
                },
                {
                    'id': 'a2',
                    content: "beta"
                },
                {
                    'id': 'a3',
                    content: "charlie"
                },
                {
                    'id': 'a4',
                    content: "Delta"
                },
            ]
        },
        {
            id: 'q2',
            content: 'why?',
            answers: [
                {
                    'id': 'a5',
                    content: "one"
                },
                {
                    'id': 'a6',
                    content: "two"
                },
                {
                    'id': 'a7',
                    content: "three"
                },
                {
                    'id': 'a8',
                    content: "four"
                },
            ]
        },
        {
            id: 'q3',
            content: 'when?',
            answers: [
                {
                    'id': 'a9',
                    content: "beer"
                },
                {
                    'id': 'a10',
                    content: "chilly"
                },
                {
                    'id': 'a11',
                    content: "mango"
                },
                {
                    'id': 'a12',
                    content: "fries"
                },
            ]
        },
    ]);
    const [currIndex, setCurrIndex] = useState(0);
    const [q, setQ] = useState<Question>(questions.current[currIndex]);
    const {seconds, start:startTimer, stop} = useTimer(gameDuration.current);
    const [gameIsLive, setGameIsLive] = useState<boolean>(false);
    const [gameIsEnded, setGameIsEnded] = useState<boolean>(false);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const correctAnswers = useRef({
        'q1' : 'a2',
        'q2' : 'a7',
        'q3': 'a9'
    });

    useEffect(() => {
        setQ(questions.current[currIndex]);
    }, [currIndex]);

    useEffect(() => {
        if(seconds === 0) {
            setTimeout(() => onNext(), 1000);
        }
    }, [seconds]);

    useEffect(() => {
        if(currIndex + 1 === questions.current.length && seconds === 0) {
            setTimeout(() => {
                endGame();
            }, 1000)
        }
    }, [currIndex, seconds]);

    function endGame() {
        setGameIsEnded(true)
        setGameIsLive(false);
        stop();
    }

    function onNext() {
        const nextIndex = currIndex + 1;
        if(!questions.current[nextIndex]) {
            endGame();
            return
        }
        setCurrIndex(nextIndex);
        startTimer();
    }

    function onStartGame() {
        setGameIsLive(true);
        startTimer();
    }

    function onQuestionChange(questionId: string, answerId: string) {
        setAnswers({
            ...answers,
            [questionId]: answerId
        })
        console.log(questionId, answerId);
    }

    return <div className="p-8">
        {gameIsLive && <div>
            <SecondsDial seconds={seconds}/>
            <QuestionInfo curr={currIndex + 1} total={questions.current.length}/>
            <Question key={q.id} question={q} onChange={onQuestionChange}/>
            <Button onClick={onNext}>Next</Button>
        </div>}

        {!gameIsLive && !gameIsEnded && <div><Button onClick={onStartGame}>Start Game</Button></div>}
        {gameIsEnded && <div>
            <Results questions={questions.current} answers={answers} correctAnswers={correctAnswers.current} />
        </div>}
    </div>
}