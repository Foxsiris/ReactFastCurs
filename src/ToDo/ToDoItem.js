import React from 'react'
import PropTypes from 'prop-types'
import '../index.css';


function ToDoItem({todo, index, onChange,removeTodo}) {

    const classes =[]
    if (todo.status){
        classes.push('done')
    }
    return (
       <div>
           <li className="lii">
            <span className={classes.join(' ')}>
                <input type="checkbox" checked={todo.status} onChange={() => onChange(todo.id)}/>
                <strong>{index + 1}</strong>
                {todo.title}
            </span>
               <button onClick={()=>removeTodo(todo.id)}>&times;</button>
           </li>
       </div>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default ToDoItem