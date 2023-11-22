import React, {useState} from 'react'

//componente funcional que recibe una props la función addTodo
//utilizado para crear la tarea
export const TaskForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault(); //evitamos recargar la página cuando enviamos la tarea nueva
        if (value!==""){
          addTodo(value)//usamos la función para crear una tarea
          setValue("")//limpiamos value
        }
    }

  return (
    <form className= 'ListaForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='¿Qué vamos a hacer ahora?' 
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Agregar Tarea</button>
    </form>
  )
}
