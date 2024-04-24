/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import MainDash from './components/MainDash/MainDash'
import Rightside from './components/Rightside/Rightside'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='dashboard'>
      <div className="box">
        <Sidebar/> 
        <MainDash/>
        <Rightside/>
      </div>
    </div>
  )
}

export default App
