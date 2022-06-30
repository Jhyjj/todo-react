import React from 'react';

const TodoList = ({todo, onDelete, onDone}) => {
    return (
        //div에 isdone이 true일때만 class done을 붙여준다.
        <div>
            <span className={todo.isDone? 'done': ""} onClick={()=>{onDone(todo.id)}}>{todo.todotext}</span>
            <button onClick={()=>{onDelete(todo.id)}}>X</button>
        </div>
    );
};

export default TodoList;