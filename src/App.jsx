import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Todos from "./Todos"




function App() {
  const dispatch = useDispatch()

  const [text, setText] = useState("")

  const handleAddClick = () => {
    dispatch( {type: "add", payload: text} )
    setText("")
  }

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='main'>
      <div className="header">
        <form action="">
          <input type="text" onChange={handleTextChange} value={text} />
          <button type="button" onClick={handleAddClick}>add</button>
        </form>
      </div>
      <div className="todoList">
        <Todos />
      </div>
    </div>
  );
}

export default App;
