import React from 'react';

interface TodoItemProps {
  todo: string;
  onDelete: () => void;
}

function TodoItem({ todo, onDelete }: TodoItemProps) {
  return (
    <li>
      {todo}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
