//useReduce로 수정

import './App.css';
import { useRef, useReducer } from 'react';
import TodoLists from './components/TodoLists';
import CreateTodo from './components/CreateTodo';

//useReducer의 초기값 설정하기
const initialState = {
        text : "",
    todos:[
        {
          id:1,
          todotext:"해야 할 일1111",
          isDone : false,
        },
        {
          id:2,
          todotext:"해야 할 일222",
          isDone : false,
        },
        {
          id:3,
          todotext:"해야 할 일3333",
          isDone : false,
        },
      ]
}

//useReducer의 action함수
function reducer(state, action){
    switch(action.type){
        case "CHANGE_INPUT":
            return {
                ...state,
                text:action.text

                }
            ;
        case "CREATE_LIST":
            return {
                text : "",
                todos : state.todos.concat(action.todo)
            };
        case "DELETE_LIST":
            return {
                ...state,
                todos : state.todos.filter(todo=>todo.id!==action.id)
            };
        case "DONE_LIST":
            return {
                ...state,
                todos: state.todos.map(todo=>
                    todo.id=== action.id? {...todo,isDone: !todo.isDone} : todo)
            };
        default:
            return state;
    }
}


function App2() {
  //input의 값을 입력할때 (input의 value가 변경될때) onChange 함수를 실행
  //state인 list의 값을 input의 value값으로 업데이트.
    const [state, dispatch] = useReducer(reducer,initialState);
    const {todos, text} = state;
    

  const onChange = (e) =>{
    dispatch({
        type:"CHANGE_INPUT",
        text:e.target.value
    })
    console.log(e.target.value);
   
  }
  const nextId = useRef(todos.length+1);

  //CreateTodo 컴포넌트에서 +버튼을 누르면 todos배열에 할일 객체가 추가됨
  const onCreate = ()=>{
        dispatch({
            type:"CREATE_LIST",
            todo:{
                id:nextId.current,
                todotext:text,
                isDone:false,
            }
        })
        nextId.current+=1;

    }

 


  //항목 삭제
  //X버튼 클릭시 id값을 인수로 받아서
  //todos배열에서 id값이 다른 객체만 업데이트 하기
  const onDelete = (id)=>{
    dispatch({
        type:"DELETE_LIST",
        id: id,
    })
    
   
  }

  //항목에 Done이라는 class toggle
  //항목을 눌렀을때 id값을 인수로 받아서 isdone이라는 항목을 false면 true, true면 false로 주기
  const onDone = (id)=>{
    dispatch({
        type:"DONE_LIST",
        id: id,
    })
    
  }

  return (
    <div className="App">
      <CreateTodo text={text} onChange={onChange} onCreate={onCreate}/>
      <TodoLists todos={todos} onDelete={onDelete} onDone={onDone}/>
    </div>
  );
}

export default App2;
