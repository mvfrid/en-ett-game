/* eslint-disable no-unused-vars */
import React from 'react';
import { useDrop } from 'react-dnd';

export const CardContainer = ({ children, onDrop }) => {
  const [{ isOver }, ref] = useDrop({
    accept: 'card',
    drop: (item) => {
      onDrop(item.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <div className="cardcontainer" ref={ref}>
      {children}
    </div>
  );
};
