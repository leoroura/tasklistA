import React, {useState} from 'react'

//componente funcional que recibe dos props: la función editTodo y un objeto task
//utilizado para editar la tarea
export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task) //iniciamos el estado value con el el valor de task
    const handleSubmit = e => {
        e.preventDefault(); //evitamos recargar la página cuando enviamos la tarea nueva 
        editTodo(value, task.id)//usamos la función pasada como primer prop
        setValue("")//limpiamos value
    }
  return (
    <form className= 'TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='Editar Tarea' 
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Actualizar Tarea</button>
    </form>
  )
}
