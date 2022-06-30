
import './App.css';
import {useState, useRef} from 'react';
import TodoLists from './components/TodoLists';
import CreateTodo from './components/CreateTodo';

function App() {
  const [list, setList] = useState("");
  //input의 값을 입력할때 (input의 value가 변경될때) onChange 함수를 실행
  //state인 list의 값을 input의 value값으로 업데이트.
  const onChange = (newlist) =>{
    setList(newlist);
    // console.log(list);
  }

  //CreateTodo 컴포넌트에서 +버튼을 누르면 todos배열에 할일 객체가 추가됨
  const onCreate = ()=>{
    const listObj = {
      id:nextId.current,
      list:list,
      isDone: false,
    }
    setTodos([...todos,listObj]);
    nextId.current+=1;
    setList("");
  }

  const [todos, setTodos] = useState([
    {
      id:1,
      list:"해야 할 일1",
      isDone : false,
    },
    {
      id:2,
      list:"해야 할 일2",
      isDone : false,
    },
    {
      id:3,
      list:"해야 할 일3",
      isDone : false,
    },
  ])
  const nextId = useRef(todos.length+1);

  //항목 삭제
  //X버튼 클릭시 id값을 인수로 받아서
  //todos배열에서 id값이 다른 객체만 업데이트 하기
  const onDelete = (id)=>{
    setTodos(todos.filter(todo=> id !==todo.id));
  }

  //항목에 Done이라는 class toggle
  //항목을 눌렀을때 id값을 인수로 받아서 isdone이라는 항목을 false면 true, true면 false로 주기
  const onDone = (id)=>{
    setTodos(todos.map((todo)=>id===todo.id? {...todo,isDone : !todo.isDone} : todo ));
  }

  return (
    <div className="App">
      <CreateTodo list={list} onChange={onChange} onCreate={onCreate}/>
      <TodoLists todos={todos} onDelete={onDelete} onDone={onDone}/>
    </div>
  );
}

export default App;
