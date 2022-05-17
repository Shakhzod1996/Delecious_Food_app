import React, { Component } from "react";
import Auxe from "../../Huc/Auxe";
import Backdrop from "./Backdrop/Backdrop";
import CardButton from "./CardButton/CardButton";
import "./Header.css";
import Modal from "./Modal/Modal";

export default class Header extends Component {
  constructor(props) {
    super(props);
    console.log();
  }
  render() {
    return (
      <Auxe>
        <div className="header">
          <div className="container">
            <div className="head-in">
              <h1 className="logo">ReactMeals</h1>
              <CardButton
                totalCount={this.props.totalCount}
                modalShowHandler={this.props.modalShowHandler}
              />
            </div>
          </div>

          <Modal
            modalShow={this.props.modalShow}
            modalHideHandler={this.props.modalHideHandler}

            sushi={this.props.sushiArr}
            german={this.props.germanArr}
            burger={this.props.burgerArr}
            bowl={this.props.bowlArr}

            modalSushiCount={this.props.modalSushiCount}
            modalGermanCount={this.props.modalGermanCount}
            modalBurgerCount={this.props.modalBurgerCount}
            modalBowlCount={this.props.modalBowlCount}

            modalMinusButtonSushi={this.props.modalMinusButtonSushi}
            modalMinusButtonGerman={this.props.modalMinusButtonGerman}
            modalMinusButtonBurger={this.props.modalMinusButtonBurger}
            modalMinusButtonBowl={this.props.modalMinusButtonBowl}

            modalPlusButtonSushi={this.props.modalPlusButtonSushi}
            modalPlusButtonGerman={this.props.modalPlusButtonGerman}
            modalPlusButtonBurger={this.props.modalPlusButtonBurger}
            modalPlusButtonBowl={this.props.modalPlusButtonBowl}


            totalPrice={this.props.totalPrice}

          />
          <Backdrop
            modalHideHandler={this.props.modalHideHandler}
            modalShow={this.props.modalShow}
          />
        </div>
      </Auxe>
    );
  }
}
