export function QuestionInfo(props: {curr?: number, total?: number}) {
    const {curr, total} = props
    return <div className="text-blue-200">Question {curr} out of {total}</div>
}