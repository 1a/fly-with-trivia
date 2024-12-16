export function SecondsDial(props: {seconds: number}) {
    const {seconds} = props
    return <div className='flex gap-2 items-center'>
        <div className="border-2 rounded-full p-2 text-white">{seconds + 1}s</div>
    </div>
}