import React from 'react'
import TaskItem from './TaskItem.jsx'

export default function TaskList() {
    /*Este componente deberá mostrar la lista de tareas.
    Recibirá como propiedades la lista de tareas y funciones para gestionar eventos
    relacionados con las tareas (por ejemplo, marcar como completada, eliminar, etc.).
    Cada tarea debe representarse mediante un componente TaskItem*/


  return (
    <div>
        <h2>Pendientes:</h2>
        <TaskItem></TaskItem>
    </div>
  )
}
