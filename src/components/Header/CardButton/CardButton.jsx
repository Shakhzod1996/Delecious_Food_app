import React from 'react';

export default function CardButton(props) {
  return (
    <div className='card-button' onClick={props.modalShowHandler}>
      <i className='bx bxs-cart-alt'></i>
      <h3>Your Card</h3>
      <div className='quantity'>
        {props.totalCount}
      </div>
    </div>
  )
}
