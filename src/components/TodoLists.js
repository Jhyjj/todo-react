import React from 'react';
import TodoList from './TodoList';

const TodoLists = ({todos, onDelete, onDone}) => {
    console.log(todos);
    return (
        <div>
            {/* <div>{todos[0].list}</div>
            <div>{todos[1].list}</div>
            <div>{todos[2].list}</div> */}

            {/*위의 구문을 배열메소드를 이용해서 뿌려주기 */}
            {/* {todos.map(todo=><div>{todo.list}</div>)} */}

            {/* 위의 구문을 TodoList라는 컴포넌트를 따로 만들어서 아래와 같이 줌.. */}
            {todos.map(todo=><TodoList todo={todo} key={todo.id} onDelete={onDelete} onDone={onDone}/>)}
        </div>
    );
};

export default TodoLists;