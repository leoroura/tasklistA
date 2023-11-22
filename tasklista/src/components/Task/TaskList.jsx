import React, {useState} from 'react'
import { TaskForm } from './TaskForm'
import { v4 as uuidv4 } from 'uuid'
import { TaskItem } from './TaskItem'
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

const TaskList = () => {
    const [todos, setTodos] = useState([{
    }])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {todo, task, isEditing: !todo.isEditing} : todo))
    }
    
  return (
    <div className='TodoWrapper'>
        <TaskForm addTodo={addTodo}/>
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