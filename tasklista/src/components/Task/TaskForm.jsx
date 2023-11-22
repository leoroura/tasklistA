import React, {useState} from 'react'

export const TaskForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
        setValue("")
    }
  return (
    <form className= 'ListaForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='¿Qué vamos a hacer ahora?' 
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Agregar Tarea</button>
    </form>
  )
}
