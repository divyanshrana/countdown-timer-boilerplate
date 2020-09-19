import React from "react";
import Clock from "./Clock";
import CountdownForm from "./CountdownForm";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      running: false,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.running !== prevState.running) {
      switch (this.state.running) {
        case true:
          this.handleStart();
          break;
        default:
          console.log("nothing");
      }
    }
  }
  // changeCount = (value) => {
  //   this.setState({ count: value });
  // };
  handleStart() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({ count: newCount >= 0 ? newCount : 0 });
    }, 1000);
  }
  handleCountdown(seconds) {
    this.setState({
      count: seconds,
      running: true,
    });
  }

  render() {
    return (
      <div>
        <Clock timeInSeconds={this.state.count} />
        <CountdownForm onSetCountdownTime={this.handleCountdown.bind(this)} />
        {/* <CountdownForm onSetCountdownTime={(val) => this.changeCount(val)} /> */}
      </div>
    );
  }
}

export default Countdown;
