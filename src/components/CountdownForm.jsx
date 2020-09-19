import React from "react";

class CountdownForm extends React.Component {
  onSubmit(e) {
    //This will give you string for seconds. Do not remove refs
    e.preventDefault();
    var secondsStr = this.refs.seconds.value;
    if (parseInt(secondsStr) < 0 || isNaN(secondsStr)) {
      return;
    }

    this.props.onSetCountdownTime(secondsStr);
  }

  render() {
    return (
      <div>
        <form
          ref="form"
          onSubmit={this.onSubmit.bind(this)}
          className="countdown-form"
        >
          <input
            type="text"
            ref="seconds"
            placeholder="Enter time in seconds"
          />
          <input
            type="submit"
            className="button success expanded"
            value="Start Countdown"
          />
        </form>
      </div>
    );
  }
}

export default CountdownForm;
