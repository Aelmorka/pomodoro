import './App.css';

import { useState, useEffect } from 'react';

import { initialWorkTimer, initialBreakTimer} from './components/utils'
import NavBar from './components/NavBar'
import Clock from './components/Clock'
import ActionBar from './components/ActionRow'

function App() {
	const [timer, setTimer] = useState({...initialWorkTimer})
	const [timeoutId, setTimeoutId] = useState(null)
	
	function start() {
		setTimer({...timer, isActive: true})
	}
	function pause() {
		setTimer({...timer, isActive: false})
	}
	function reset(){
		setTimer({...initialWorkTimer})
	}
	function finished() {
		if (timer.isWorkMode) {
			setTimer({...initialBreakTimer, isActive : true})
		} else {
			setTimer({...initialWorkTimer, isActive : true})
		}
	}
	function changeMode(mode){
		mode === 'work' ? setTimer({...initialWorkTimer}) : setTimer({...initialBreakTimer})
	}
	function tick(){
		if (timer.minutes === 0 && timer.seconds === 0) {
			finished()
			return
		}
		if (timer.isActive) { 
			if (timer.seconds === 0) {
				setTimer({...timer, minutes: timer.minutes - 1, seconds: 59})
			} else {
				setTimer({...timer, seconds: timer.seconds - 1})
			}
		}
	}
	useEffect(() => {
		let timeoutId = setTimeout(() => {
			if (timer.minutes === 0 && timer.seconds === 0) {
				// finished()
				return
			}
			if (timer.isActive) { 
				if (timer.seconds === 0) {
					setTimer({...timer, minutes: timer.minutes - 1, seconds: 59})
				} else {
					setTimer({...timer, seconds: timer.seconds - 1})
				}
			}	
		}, 1000)
		setTimeoutId(timeoutId)
		return () => {
			clearTimeout(timeoutId)
		}
	}, [timer])
  	return (
    	<div className="App">
			<NavBar changeMode={changeMode} mode={timer.isWorkMode ? 'work' : 'break'}/>
			<Clock minutes={timer.minutes} seconds={timer.seconds}/>
			<ActionBar resetClicked={reset} 
				currentAction={timer.isActive ? 'Pause' : 'Start'}
				activateAction={timer.isActive ? pause : start}
			/>
    	</div>
  	);
}

export default App;
