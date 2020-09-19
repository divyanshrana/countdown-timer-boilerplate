import React from "react";

class Clock extends React.Component {
  formatTime(timeInSeconds) {
    var seconds = timeInSeconds % 60;
    var minutes = Math.floor(timeInSeconds / 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
  timer(timeInSeconds) {
    var time = this.formatTime(timeInSeconds);
    document.getElementsByClassName("clock-text")[0].innerHTML = time;
  }
  getTime(timeInSeconds) {
    if (timeInSeconds === 0) {
      return "00:00";
    }

    if (timeInSeconds < 0) {
      return;
    }
    this.timer(timeInSeconds);
    timeInSeconds = timeInSeconds - 1;

    this.myInterval = setInterval(() => {
      if (timeInSeconds < 0) {
        return;
      }
      this.timer(timeInSeconds);
      timeInSeconds = timeInSeconds - 1;
      if (timeInSeconds === 0) {
        return;
      }
    }, 1000);
  }

  render() {
    var { timeInSeconds } = this.props;

    //Keep the classes name. Try to inject your code and do not remove existing code
    return (
      <div className="clock">
        <span className="clock-text">
          <span>
            {timeInSeconds === 0 ? "00:00" : this.getTime(timeInSeconds)}
          </span>
        </span>
      </div>
    );
  }
}

export default Clock;
