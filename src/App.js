import { useState } from "react";

function App() {
  const [task, setTask] = useState()
  const [list, setList] = useState([])

  function handleAddTask(){
    setList([task , ...list])
    clear()
  }
  function clear(){
    setTask('')
  }
  return (
    <main className="container">
      <input value={task} onChange={ e => setTask(e.target.value) } />
      <button onClick={handleAddTask}>Adicionar tarefa</button>
      <ul>
        {list.map( t => (<li>{t}</li>))}
      </ul>
    </main>
  );
}

export default App;
