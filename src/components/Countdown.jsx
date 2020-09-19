import React from "react";
import Clock from "./Clock";
import CountdownForm from "./CountdownForm";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  changeCount = (value) => {
    this.setState({ count: value });
  };

  render() {
    return (
      <div>
        <Clock timeInSeconds={this.state.count} />
        <CountdownForm onSetCountdownTime={(val) => this.changeCount(val)} />
      </div>
    );
  }
}

export default Countdown;
