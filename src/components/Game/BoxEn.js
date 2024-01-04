import React from 'react';
import { useDrop } from 'react-dnd';

export const BoxEn = ({ children, onDrop, disabled }) => {
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
      className={`box en${isOver ? ' hovered' : ''}${
        disabled ? ' disabled' : ''
      }`}
      ref={ref}
      style={{ pointerEvents: disabled ? 'none' : 'auto' }}>
      <h3>En</h3>
      {children}
    </div>
  );
};