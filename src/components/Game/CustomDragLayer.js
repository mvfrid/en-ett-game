/* eslint-disable no-unused-vars */
import React from 'react';
import { usePreview } from 'react-dnd-preview';
import { CardPreview } from './CardPreview.js';

export const CustomDragLayer = () => {
  const { display, itemType, item, style } = usePreview();

  // Adjusted style with higher z-index
  const adjustedStyle = { ...style, zIndex: 10000000 };

  if (!display) return null;

  // Define how the preview should look like
  function renderItem() {
    switch (itemType) {
      case 'card':
        return <CardPreview data={item} />;
      // ... other types
      default:
        return null;
    }
  }

  return (
    <div style={adjustedStyle}>
      {renderItem()}
    </div>
  );
};
