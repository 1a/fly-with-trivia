import {Check} from 'lucide-react';
import {Question} from "@/components/Game";
import classNames from "classnames";

export function Results(props: {questions: Question[], answers: Record<string, string>, correctAnswers: Record<string, string>}) {
    const {questions, answers, correctAnswers} = props;
    return <div>
        <h1 className="text-2xl">Results</h1>

        {questions.map((q, index) => {

            return <div className="border border-blue-300 p-2 mb-4 rounded" key={q.id}>
                <div>Question {index + 1}</div>
                <div className="font-bold mb-4">{q.content}</div>
                {q.answers.map(a => {
                    return <div className="flex" key={a.id}>
                        <div className={classNames('flex', {
                            'font-bold': a.id === answers[q.id],
                            'text-green-300': a.id === correctAnswers[q.id],
                            'line-through': a.id === answers[q.id] && answers[q.id] !== correctAnswers[q.id]
                        })}>
                            <div>{a.content}</div>
                            <div>{a.id === correctAnswers[q.id] && correctAnswers[q.id] === answers[q.id] && <Check/>}</div>

                        </div>
                    </div>
                })}
            </div>
        })}
    </div>
}