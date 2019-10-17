import React from 'react';
<<<<<<< HEAD

const App: React.FC = () => {

  return (
    <div>
      HI
=======
import MyForm from './Myform';
// import Counter from './Counter';
// import Greetings from './Greetings';

const App: React.FC = () => {

  // const onClick = (name: string) => {
  //   console.log(`${name} says hello`);
  // }

  const onSubmit = (form: {name: string; description: string}) => {
    console.log(form);
  };

  return (
    <div>
      <MyForm onSubmit={onSubmit} />
      {/* <Counter /> */}
      {/* <Greetings name="keen" optional="호잇" onClick={onClick} /> */}
>>>>>>> 0d5a3cb0f457838ddca61e08b6a5c2134de23754
    </div>
  );
}

export default App;
