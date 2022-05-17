import React, { Component } from "react";
import Auxe from "../../Huc/Auxe";
import Card from "./Card/Card";
import "./MainContainer.css";

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    console.log();
  }

  render() {
    return (
      <Auxe>
        <div className="main-content">
          <ul className="ul">
            <Card
              name={this.props.arr[0].name}
              desc={this.props.arr[0].desc}
              price={this.props.arr[0].price}
              count={this.props.sushiCount}
              inputSubmitHandler={this.props.inputSushiSubmitHandler}
              changeCountHandler={this.props.changeCountHandler}
            />

            <Card
              name={this.props.arr[1].name}
              desc={this.props.arr[1].desc}
              price={this.props.arr[1].price}
              count={this.props.germanCount}
              inputSubmitHandler={this.props.inputGermanSubmitHandler}
              changeCountHandler={this.props.changeGermanCountHandler}

            />

            <Card
              name={this.props.arr[2].name}
              desc={this.props.arr[2].desc}
              price={this.props.arr[2].price}
              count={this.props.burgerCount}
              inputSubmitHandler={this.props.inputBurgerSubmitHandler}
              changeCountHandler={this.props.changeBurgerCountHandler}

            />

            <Card
              name={this.props.arr[3].name}
              desc={this.props.arr[3].desc}
              price={this.props.arr[3].price}
              count={this.props.bowlCount}
              inputSubmitHandler={this.props.inputBowlSubmitHandler}
              changeCountHandler={this.props.changeBowlCountHandler}

            />
          </ul>
        </div>
      </Auxe>
    );
  }
}

