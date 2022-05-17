import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <li className="li">
      <div className="left-side">
        <h3 className="name">{props.name}</h3>
        <p>{props.desc}</p>
        <h3 className="price">$ {props.price}</h3>
      </div>

      <div className="right-side">
        <form onSubmit={props.inputSubmitHandler}>
          <div className="amount">
            <h3>Amount</h3>
              <input onChange={props.changeCountHandler}
                type="number"
              min={1}
              max={5}
                defaultValue={props.count}
              />
          </div>
          <div className="btn-div">
            <button type="submit" className="add">
              + Add
            </button>
          </div>
        </form>
      </div>
    </li>
  );
}
