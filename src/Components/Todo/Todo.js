import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { useState } from 'react';

function Todo() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      details: 'New try',
      isChecked: false,
    },
    {
      id: 2,
      details: 'New try',
      isChecked: false,
    },
    {
      id: 3,
      details: 'New try',
      isChecked: false,
    },
  ]);

  const handleDelete = (nid) => {
    setTodo(todos.filter((todo) => todo.id !== nid));
  };

  const handleChecked = (id) => {
    setTodo((prevTodos) => prevTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isChecked: !todo.isChecked,
        };
      }
      return todo;
    }));
  };

  if (!todos || todos.length === 0) {
    return <p className="p-6 text-center bg-white">No list yet</p>;
  }
  return (
        <>
        <section className="p-6 bg-white">
            {todos.map((todo) => (
                <div key={todo.id} className='flex justify-between items-center py-2 text-gray-400'>
                    <input onChange={() => handleChecked(todo.id)} type="checkout" className="w-1/12"/>
                    <p className={`w-10/12 px-2 ${todo.isChecked ? 'line-through italic' : ''}`}>{todo.details}</p>
                    <AiOutlineEdit className='w-1/12 text-1 hover:text-xl hover:text-green-500 transition-all ease-in delay-500 cursor-pointer'/>
                    <RiDeleteBin6Line className='w-1/12 text-1 hover:text-xl hover:text-red-400 transition-all ease-in delay-500 cursor-pointer'
                    onClick={() => handleDelete(todo.id)}/>
                </div>
            ))}
        </section>
        </>
  );
}

export default Todo;