import React from 'react';
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
    </div>
  );
}

export default App;
