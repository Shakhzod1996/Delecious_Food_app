import React from 'react';
import './Backdrop.css'

export default function Backdrop(props) {
  return (
    <div className={`${props.modalShow? 'backdrop backdrop-show': 'backdrop'}`} onClick={props.modalHideHandler}>
      
    </div>
  )
}
