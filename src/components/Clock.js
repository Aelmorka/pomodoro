export default function Clock({minutes, seconds}) {
    return (
        <div>
            <span>{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
    )
}