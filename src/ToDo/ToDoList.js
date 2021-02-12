import React from 'react'
import PropTypes from 'prop-types'
import ToDoItem from "./ToDoItem";


 function ToDoList({todos,onToggle,removeTodo}) {

    return (
        <div>
            <ul>
                {todos.map((todo,index) => {
                    return <ToDoItem todo={todo} key={todo.id} index={index} onChange={onToggle} removeTodo={removeTodo}/>
                })}
            </ul>
        </div>
    )
}
ToDoList.propTypes={
    onToggle:PropTypes.func.isRequired
}

export default ToDoList