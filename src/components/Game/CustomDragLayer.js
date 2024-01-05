import React from 'react';
import { usePreview } from 'react-dnd-preview';
import { CardPreview } from './CardPreview.js';

export const CustomDragLayer = () => {
  const { display, itemType, item, style } = usePreview();

  // Detta gör att kortpreviewen hamnar överst när vi drar dem
  const adjustedStyle = { ...style, zIndex: 10000000 };

  if (!display) return null;

  // Define how the preview should look like
  function renderItem() {
    switch (itemType) {
      case 'card':
        return <CardPreview data={item} />;
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
