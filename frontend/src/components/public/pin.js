// public/pins.js
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../style/Pin.css';

function Pin( {onDelete} ) {
  const [text, setText] = useState('');
  const [isEdited, setIsEdited] = useState(false);
  const [isEditable, setIsEditing] = useState(false);

  const toogleEdit = () => {
    setIsEditing(!isEditable);
    setIsEdited(true);
  };

  return (
    <Draggable>
      <div className="pin">
        {isEditable ? (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        ) : (
            <div className='pin-content'>
                {text.trim() == "" ? 'Click edit ...' : text}
            </div>
        ) }

        <button onClick={toogleEdit} className='edit-button'>
            {isEditable ? 'Save' : 'Edit'}
        </button>
        <button onClick= {onDelete} className='delete-button'> Delete </button>
      </div>
    </Draggable>
  );
}

export default Pin;
