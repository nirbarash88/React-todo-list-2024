import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
}

function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
}

export default TodoList;
