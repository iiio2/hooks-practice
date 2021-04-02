import { useContext } from 'react';
import { ColorContext } from './context/ColorContext';

function App() {
  const { color, changeColor } = useContext(ColorContext);
  const font = color ? 'red' : 'green';
  return (
    <div
      className='container'
      style={{ height: '60vh', backgroundColor: font }}
    >
      <h3 onClick={() => changeColor(color)} style={{ color: '#fff' }}>
        {font}
      </h3>
    </div>
  );
}

export default App;
