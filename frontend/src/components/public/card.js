import React from 'react';
import '../style/Card.css';
import { Link } from 'react-router-dom';

function Card({ title, children, link}) {
    const cardContent = (
        <>
            <h3>{title}</h3>
            <div className='card-content'>
                {children}
            </div>
        </>
    );

  return (
    <div className="card">
        {link ? (
            <Link to= {link} className='card-link'>
                {cardContent}
            </Link>
        ) : (
            cardContent
        )}
    </div>
  );
}

export default Card;
