import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Header.jsx'
import './components/Footer.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import TaskList from './components/TaskList.jsx'
import ListaWrapper from './components/ListaWrapper.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <ListaWrapper />
      <TaskList></TaskList>
      <Footer></Footer>
    </div>
  )
}

export default App
