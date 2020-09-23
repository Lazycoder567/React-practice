import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, ErrorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ ErrorMessage: err.message })
    );
  }

  render() {
    if (this.state.ErrorMessage && !this.state.lat) {
      return <div>Error:{this.state.ErrorMessage}</div>;
    }
    if (!this.state.ErrorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    return (
      <div>
        <Spinner message="Please allow location request" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
