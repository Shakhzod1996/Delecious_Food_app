import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ImageBottom from "./components/ImageBottom/ImageBottom";
import MainContainer from "./components/MainContainer/MainContainer";

let arr = [
  {
    name: "Sushi",
    desc: "Finest fish and veggies",
    price: 22.99,
  },
  {
    name: "Schnitzel",
    desc: "A german specialty!",
    price: 16.5,
  },
  {
    name: "Barbecue Burger",
    desc: "American, raw, meaty",
    price: 12.99,
  },
  {
    name: "Green Bowl",
    desc: "Healthy...and green...",
    price: 18.99,
  },
];
export default class App extends Component {
  state = {
    totalCount: 0,
    sushiCount: 1,
    germanCount: 1,
    burgerCount: 1,
    bowlCount: 1,
    modalShow: false,
    sushiArr: [],
    germanArr: [],
    burgerArr: [],
    bowlArr: [],

    modalSushiCount: 0,
    modalGermanCount: 0,
    modalBurgerCount: 0,
    modalBowlCount: 0,

    sushiPrice: 22.99,
    germanPrice: 16.5,
    burgerPrice: 12.99,
    bowlPrice: 18.99,

    totalPrice: 0,
  };

  // ? Modal Minus Button
  modalMinusButtonSushi = () => {
    this.setState({
      totalPrice: this.state.totalPrice - this.state.sushiPrice,
      modalSushiCount: this.state.modalSushiCount - 1,
    });
  };

  modalMinusButtonGerman = () => {
    this.setState({
      totalPrice: this.state.totalPrice - this.state.germanPrice,
      modalGermanCount: this.state.modalGermanCount - 1,
    });
  };

  modalMinusButtonBurger = () => {
    this.setState({
      totalPrice: this.state.totalPrice - this.state.burgerPrice,
      modalBurgerCount: this.state.modalBurgerCount - 1,
    });
  };

  modalMinusButtonBowl = () => {
    this.setState({
      totalPrice: this.state.totalPrice - this.state.bowlPrice,
      modalBowlCount: this.state.modalBowlCount - 1,
    });
  };

  // ? Modal Plus Handler
  modalPlusButtonSushi = () => {
    this.setState({
      totalPrice: this.state.totalPrice + this.state.sushiPrice,
      modalSushiCount: this.state.modalSushiCount + 1,
    });
  };

  modalPlusButtonGerman = () => {
    this.setState({
      totalPrice: this.state.totalPrice + this.state.germanPrice,
      modalGermanCount: this.state.modalGermanCount + 1,
    });
  };

  modalPlusButtonBurger = () => {
    this.setState({
      totalPrice: this.state.totalPrice + this.state.burgerPrice,
      modalBurgerCount: this.state.modalBurgerCount + 1,
    });
  };

  modalPlusButtonBowl = () => {
    this.setState({
      totalPrice: this.state.totalPrice + this.state.bowlPrice,
      modalBowlCount: this.state.modalBowlCount + 1,
    });
  };

  // ?Form SubmitHandler
  inputSushiSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      totalCount: this.state.totalCount + this.state.sushiCount * 1,
      sushiArr: [...arr.filter((el) => el.name === "Sushi")],
      modalSushiCount: this.state.modalSushiCount + this.state.sushiCount * 1,
      totalPrice:
        this.state.totalPrice +
        this.state.sushiPrice * this.state.sushiCount * 1,
    });
    console.log(this.state.totalPrice);
  };

  inputGermanSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      totalCount: this.state.totalCount + this.state.germanCount * 1,
      germanArr: [...arr.filter((el) => el.name === "Schnitzel")],
      modalGermanCount:
        this.state.modalGermanCount + this.state.germanCount * 1,
      totalPrice:
        this.state.totalPrice +
        this.state.germanPrice * this.state.germanCount * 1,
    });
    console.log(this.state.sushiArr);
  };

  inputBurgerSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      totalCount: this.state.totalCount + this.state.burgerCount * 1,
      burgerArr: [...arr.filter((el) => el.name === "Barbecue Burger")],
      modalBurgerCount:
        this.state.modalBurgerCount + this.state.burgerCount * 1,
      totalPrice:
        this.state.totalPrice +
        this.state.burgerPrice * this.state.burgerCount * 1,
    });
  };

  inputBowlSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      totalCount: this.state.totalCount + this.state.bowlCount * 1,
      bowlArr: [...arr.filter((el) => el.name === "Green Bowl")],
      modalBowlCount: this.state.modalBowlCount + this.state.bowlCount * 1,
      totalPrice:
        this.state.totalPrice + this.state.bowlPrice * this.state.bowlCount * 1,
    });
  };
  // ?InputChange Handler
  changeCountHandler = (e) => {
    this.setState({ sushiCount: e.target.value });
    console.log(this.state.sushiCount);
  };

  changeGermanCountHandler = (e) => {
    this.setState({ germanCount: e.target.value });
  };

  changeBurgerCountHandler = (e) => {
    this.setState({ burgerCount: e.target.value });
  };

  changeBowlCountHandler = (e) => {
    this.setState({ bowlCount: e.target.value });
  };

  // ?Modal Show Hide
  modalShowHandler = () => {
    this.setState({ modalShow: true });
  };

  modalHideHandler = () => {
    this.setState({ modalShow: false });
  };

  render() {
    return (
      <div className="App">
        <Header
          totalCount={this.state.totalCount}
          modalShowHandler={this.modalShowHandler}
          modalShow={this.state.modalShow}
          modalHideHandler={this.modalHideHandler}
          sushiArr={this.state.sushiArr}
          germanArr={this.state.germanArr}
          burgerArr={this.state.burgerArr}
          bowlArr={this.state.bowlArr}
          modalSushiCount={this.state.modalSushiCount}
          modalGermanCount={this.state.modalGermanCount}
          modalBurgerCount={this.state.modalBurgerCount}
          modalBowlCount={this.state.modalBowlCount}
          modalMinusButtonSushi={this.modalMinusButtonSushi}
          modalMinusButtonGerman={this.modalMinusButtonGerman}
          modalMinusButtonBurger={this.modalMinusButtonBurger}
          modalMinusButtonBowl={this.modalMinusButtonBowl}
          modalPlusButtonSushi={this.modalPlusButtonSushi}

          modalPlusButtonGerman={this.modalPlusButtonGerman}
          modalPlusButtonBurger={this.modalPlusButtonBurger}
          modalPlusButtonBowl={this.modalPlusButtonBowl}


          totalPrice={this.state.totalPrice}
        />
        <ImageBottom />
        <MainContainer
          arr={arr}
          inputSushiSubmitHandler={this.inputSushiSubmitHandler}
          inputGermanSubmitHandler={this.inputGermanSubmitHandler}
          inputBurgerSubmitHandler={this.inputBurgerSubmitHandler}
          inputBowlSubmitHandler={this.inputBowlSubmitHandler}
          sushiCount={this.state.sushiCount}
          germanCount={this.state.germanCount}
          burgerCount={this.state.burgerCount}
          bowlCount={this.state.bowlCount}
          changeCountHandler={this.changeCountHandler}
          changeGermanCountHandler={this.changeGermanCountHandler}
          changeBurgerCountHandler={this.changeBurgerCountHandler}
          changeBowlCountHandler={this.changeBowlCountHandler}
        />
      </div>
    );
  }
}
