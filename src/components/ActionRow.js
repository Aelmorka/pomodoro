export default function ActionRow({activateAction, resetClicked, currentAction}){
    return(
        <div>
            <button onClick={activateAction}>{currentAction}</button>
            <button onClick={resetClicked}>Reset</button>
        </div>
    )
}