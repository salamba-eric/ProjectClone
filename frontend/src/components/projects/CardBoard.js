import React, { useState } from 'react';
import Pin from '../public/pin';
import '../style/Pin.css'; // Assuming you want to style the button as well

function Cards() {
  const [pins, setPins] = useState([{ id: 1 }, { id: 2 }]); // Initialize with two pins

  const addPin = () => {
    const newPin = { id: pins.length + 1 };
    setPins([...pins, newPin]);
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <button className='add-pin' onClick={addPin}> + Add Note + </button>
      {pins.map(pin => (
        <Pin key={pin.id} />
      ))}
    </div>
  );
}

export default Cards;
