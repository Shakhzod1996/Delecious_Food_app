import React from "react";
import "./Modal.css";

export default function Modal(props) {
  return (
    <div className={`${props.modalShow ? "modal modal-show" : "modal"}`}>
      <ul className="ul-new">
        {props.sushi.map((item, i) => (
          <li className="new-li" key={i}>
            <h2>{item.name}</h2>
            <div className="div-flex">
              <h3 className="price-new">$ {item.price}</h3>
              <p className="x">x {props.modalSushiCount}</p>
              <div className="plus-btns">
                <button onClick={props.modalPlusButtonSushi}>+</button>
                <button disabled={props.modalSushiCount < 1} onClick={props.modalMinusButtonSushi}>-</button>
              </div>
            </div>
          </li>
        ))}

        {props.german.map((item, i) => (
          <li className="new-li" key={i}>
            <h2>{item.name}</h2>
            <div className="div-flex">
              <h3 className="price-new">$ {item.price}</h3>
              <p className="x">x {props.modalGermanCount}</p>
              <div className="plus-btns">
                <button onClick={props.modalPlusButtonGerman}>+</button>
                <button  disabled={props.modalGermanCount < 1} onClick={props.modalMinusButtonGerman}>-</button>
              </div>
            </div>
          </li>
        ))}

        {props.burger.map((item, i) => (
          <li className="new-li" key={i}>
            <h2>{item.name}</h2>
            <div className="div-flex">
              <h3 className="price-new">$ {item.price}</h3>
              <p className="x">x {props.modalBurgerCount}</p>
              <div className="plus-btns">
                <button  onClick={props.modalPlusButtonBurger}>+</button>
                <button  disabled={props.modalBurgerCount < 1} onClick={props.modalMinusButtonBurger}>-</button>
              </div>
            </div>
          </li>
        ))}

        {props.bowl.map((item, i) => (
          <li className="new-li" key={i}>
            <h2>{item.name}</h2>
            <div className="div-flex">
              <h3 className="price-new">$ {item.price}</h3>
              <p className="x">x {props.modalBowlCount}</p>
              <div className="plus-btns">
                <button onClick={props.modalPlusButtonBowl}>+</button>
                <button disabled={props.modalBowlCount < 1} onClick={props.modalMinusButtonBowl}>-</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="total-flrx">
        <h2>Total Amount</h2>
        <h2>${props.totalPrice.toFixed(2)}</h2>
      </div>
      <div className="close-div">
        <button onClick={props.modalHideHandler}>Close</button>
      </div>
    </div>
  );
}
