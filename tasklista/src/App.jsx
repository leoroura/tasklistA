import './App.css'
import './components/Header/Header.jsx'
import './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import TaskList from './components/Task/TaskList.jsx'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <TaskList></TaskList>
      <Footer></Footer>
    </div>
  )
}

export default App
