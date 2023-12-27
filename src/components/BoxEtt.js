import React from 'react';
import { useDrop } from 'react-dnd';

export const BoxEtt = ({ children, onDrop, disabled }) => {
  const [{ isOver }, ref] = useDrop({
    accept: 'card',
    drop: (item) => {
      if (!disabled) {
        onDrop(item.id);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <div
      className={`box ett${isOver ? ' hovered' : ''}${
        disabled ? ' disabled' : ''
      }`}
      ref={ref}
      style={{ pointerEvents: disabled ? 'none' : 'auto' }}>
      <h3>Ett</h3>
      {children}
    </div>
  );
};