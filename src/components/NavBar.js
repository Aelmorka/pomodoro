export default function NavBar({changeMode, mode}){
    function setWorkMode() {
        changeMode('work')
    }
    function setBreakMode() {
        changeMode('break')
    }
    return (
        <div>
            <button onClick={setWorkMode} disabled={mode === 'work' ? 'disabled' : ''}>Work mode</button>
            <button onClick={setBreakMode} disabled={mode === 'break' ? 'disabled' : ''}>Break mode</button>
        </div>
    )
}