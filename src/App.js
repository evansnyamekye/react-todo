import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Todo from './Components/Todo/Todo';

function App() {
  const [todos, setTodo] = useState([]);

  const newTodo = (newTodo) => {
    newTodo.id = uuidv4();
    console.log(newTodo);
    setTodo([newTodo, ...todos]);
  };

  return (
   <main className="bg-cyan-600 h-screen flex justify-center items-center">
    <div>
      <Header showTodo={newTodo}/>
      <Todo />
    </div>
   </main>
  );
}

export default App;
