import './App.css';
import ToDoList from "./ToDo/ToDoList";
import React, { useState } from 'react';
import AddTodo from "./ToDo/addTodo";


function App() {
    let [todos, setTodos] = useState([
        {id: 1, status: false, title: 'Купить Хлеб'},
        {id: 2, status: false, title: 'Купить Яйца'},
        {id: 3, status: false, title: 'Купить Воду'}
    ]);


    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.status = !todo.status
                }
                return todo
            })
        )
    }
    function removeTodo(id){
        setTodos(todos.filter(todo=> todo.id !== id))
    }
    function addTodo(title){
        setTodos(todos.concat([{
            title,
            id:Date.now(),
            status: false
        }]))
    }

    return (
        <div className="wrapper">
            <h1>Hello Mr Daniil</h1>
            <AddTodo onCreate={addTodo}/>
            {todos.length ?<ToDoList todos={todos} onToggle={toggleTodo} removeTodo={removeTodo}/>: <p>No todos</p>}


        </div>
    );
}

export default App;
