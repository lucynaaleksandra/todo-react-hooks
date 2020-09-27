import React from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import useTodoState from './useTodoState';

const App = () => {
  // const [todos, setTodos] = useState([]);
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h4">
        Your Todo List
      </Typography>

      {/* merge the existing todos with new todo, cut out extra whitespace */}
      <TodoForm saveTodo={console.warn}
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            // setTodos([...todos, trimmedText]);
            addTodo(trimmedText);
          }
        }} />

      {/* Whatever todos don’t match the index, are stored in state using setTodos. */}
      <TodoList todos={todos}
        deleteTodo={deleteTodo}
      // deleteTodo={(todoIndex) => {
      //   const newTodos = todos.filter((_, index) => index !== todoIndex);
      //   setTodos(newTodos);
      // }} 
      />
    </div>
  );
};

export default App;
