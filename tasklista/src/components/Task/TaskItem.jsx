import React from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

//componente funcional TaskItem que recibe varias props
//utilizado para renderizar la tarea con capacidad de editar, eliminar o marcar como completada
export const TaskItem = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
    <div>
        <FontAwesomeIcon icon={faEdit} onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon icon={faMinus} onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}
