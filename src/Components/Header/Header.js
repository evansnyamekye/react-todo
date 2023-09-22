import { useState } from 'react';

function Header({ showTodo }) {
  const [text, setText] = useState('');
  const [btnDissable, setBtnDissable] = useState(true);
  const [message, setMessage] = useState('');

  const handleText = (e) => {
    if (text === '') {
      setBtnDissable(true);
      setMessage(null);
    } else {
      setMessage(null);
      setBtnDissable(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 2) {
      const newTodo = {
        details: text,
        isChecked: false,
      };

      showTodo(newTodo);
      setMessage(null);
      setText('');
    } else {
      setMessage('Text must be at least 3 characters');
    }
  };

  return (
    <>
      <header className="bg-teal-500 text-white w-96">
        <h1 className="text-l font-bold text-center py-3">Todo List</h1>
      </header>
      {message && <div className="messages text-center mt-3">{message}</div>}
      <form className="py-3" onSubmit={handleSubmit}>
        <input
          onChange={handleText}
          value={text}
          type="text"
          placeholder="New todo..."
          className="w-10/12 p-2 italic active:border-none"
        />
        <button type="submit" disabled={btnDissable} className="w-2/12 bg-teal-500 py-2 text-white disabled:bg-gray-600">Add</button>
      </form>
    </>
  );
}

export default Header;
