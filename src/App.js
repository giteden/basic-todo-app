import React from 'react';
import ToDoList from './components/ToDoList';
import H1 from './components/H1'

const App = () =>  {
  return(
      <div>
        <H1>A Basic To-Do App</H1>
        <ToDoList />
      </div>
    )
}

export default App;
