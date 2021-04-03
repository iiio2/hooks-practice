import { useState, useContext } from 'react';
import { ColorContext } from './context/ColorContext';
import { PostContext } from './context/PostContext';

function App() {
  const [input, setInput] = useState('');

  const { color, changeColor } = useContext(ColorContext);
  const { posts, dispatch } = useContext(PostContext);
  const font = color ? 'red' : 'green';

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_POST', input });
    setInput('');
  };

  return (
    <div
      className='container'
      style={{ height: '60vh', backgroundColor: font }}
    >
      <h3 onClick={() => changeColor(color)} style={{ color: '#fff' }}>
        {font}
      </h3>
      <hr />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <hr />

      <form onSubmit={handleAdd}>
        <input
          type='text'
          placeholder='add'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='form-control'
          style={{ width: '50%' }}
        />
      </form>
    </div>
  );
}

export default App;
