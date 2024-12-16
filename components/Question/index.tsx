import {Button} from "@/components/ui/button";
import { Question as QuestionType} from "@/components/Game";
import {useState} from "react";

export function Question(props: {question: QuestionType, onChange?: (questionId: string, answerId: string) => void}){
    const {question, onChange} = props;
    const [selected, setSelected] = useState<string>('');

    function onSelection(questionId: string, answerId: string) {
        setSelected(answerId);
        if(onChange) {
            onChange(questionId, answerId)
        }
    }
    return <>
        <div className="text-2xl text-white font-varela">{question.content}</div>
        <div className="flex flex-col gap-8 mt-16">
            {question.answers.map((a, index) => <Button onClick={() => onSelection(question.id, a.id)} key={index} variant={selected === a.id ? "answer-selection" : 'answer-variant'} size="xl">{a.content}</Button>)}
        </div>
    </>
}