import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../style/Pin.css';

function Pin() {
  const [text, setText] = useState('');
  const [isEditable, setIsEditing] = useState(false);

  const toogleEdit = () => {
    setIsEditing(!isEditable);
  };

  return (
    <Draggable>
      <div className="pin">
        {isEditable ? (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        ) : (
            <div className='pin-content'>
                {text}
            </div>
        ) }

        <button onClick={toogleEdit} className='edit-button'>
            {isEditable ? 'Save' : 'Edit'}
        </button>
      </div>
    </Draggable>
  );
}

export default Pin;
