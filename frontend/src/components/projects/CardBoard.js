// projects/CardBoard.js
import React, { useState } from 'react';
import Pin from '../public/pin';
import '../style/Pin.css'; // Assuming you want to style the button as well

function Cards() {
  const [pins, setPins] = useState([{ id: 1 }]); // Initialize with two pins

  const addPin = () => {
    const newPin = { id: pins.length + 1 };
    setPins([...pins, newPin]);
  };

  const deletePin = (id) => {
    setPins(pins.filter(pin => pin.id !== id));
  }

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <button className='add-pin' onClick={addPin}> + Add Note + </button>
      {pins.map(pin => (
        <Pin 
          key={pin.id} 
          onDelete= {() => deletePin(pin.id)}
        />
      ))}
    </div>
  );
}

export default Cards;
