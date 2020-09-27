import React from 'react';
import { ListItemSecondaryAction, ListItem, List, ListItemText, Checkbox, IconButton } from '@material-ui/core';
import './todoList.css'

// 2 props: 
// array of todos. We map over each one and create a list item.
// deleteTodo: it passes the index, which will uniquely identify a todo in our list.

const TodoList = ({ todos, deleteTodo }) => (
  <List className='list-item'>
    {todos.map((todo, index) => (
      <ListItem key={index.toString()} dense button >
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={todo} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteTodo(index);
            }}>
            <span className="material-icons">
              delete
            </span>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default TodoList;