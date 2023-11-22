import React, {useState} from 'react'
import { TaskForm } from './TaskForm'
import { v4 as uuidv4 } from 'uuid'
import { TaskItem } from './TaskItem'
import { EditTodoForm } from "./EditTodoForm";
uuidv4(); //función para generar ID únicos

const TaskList = () => {
    const [todos, setTodos] = useState([{}]) //estado "todos" inicializado como objeto vacío

    //función flecha que agrega un nuevo estado a "todos", usamos spreed para copiar el array y agregar el nuevo objeto con sus props
    //se agregaría un TaskItem
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    //función para cambiar la prop completed de una tarea
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    //función para eliminar tarea según su id
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    //función para cambiar la prop isEditing de una tarea
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    //función para cambiar la prop task de una tarea
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {todo, task, isEditing: !todo.isEditing} : todo))
    }
    
  return (
    <div className='TodoWrapper'>
        {/* retornamos el componente TaskForm para agregar una tarea */}
        <TaskForm addTodo={addTodo}/>

        {/* retornamos el renderizado del array todos mapeando los objetos que lo componen y sus props */}
        {todos.map((todo, index) => (
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo}/>
            ) : (
                <TaskItem task={todo} key={index} toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo} editTodo={editTodo}/>
            )
        ))} 
    </div>
  )
}

export default TaskList;