import React from 'react';
import Greetings from './Greetings';



const App: React.FC = () => {

  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  }

  return (
    <div>
      <Greetings name="keen" optional="호잇" onClick={onClick} />
    </div>
  );
}

export default App;
