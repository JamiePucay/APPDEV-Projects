import { useState } from 'react';
import Shop from './shop';
import Login from './login';

function App() {
  const items = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 15 },
    { id: 3, name: "Item 3", price: 20 }
  ];

  return (
    <div>
      <Login items={items} />
    </div>
  );
}

export default App;

