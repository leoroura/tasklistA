import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Header/Header.jsx'
import './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import TaskList from './components/Tareas/TaskList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      
      <TaskList></TaskList>
      <Footer></Footer>
    </>
  )
}

export default App
