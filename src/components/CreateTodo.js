import React from 'react';

const CreateTodo = ({onChange, text, onCreate}) => {
    return (
        <div>
            <h2>Todo List</h2>
            <div>
                <input type="text" value={text} name='list' onChange={onChange}/>
                <button onClick={onCreate}>+</button>
            </div>
        </div>
    );
};

export default CreateTodo;