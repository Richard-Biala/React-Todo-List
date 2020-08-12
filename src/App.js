import React from 'react';
import Todos from './components/Todos';

import './App.css';

function App() {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the Trash',
        completed: false
      }
    ]
  }
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
