import * as React from "react";
import Button from "component/button/Button";
import "./App.css";

const logo = require("./logo.svg");

class App extends React.Component<{}, null> {
  handleClick() {
    this.setState({
      test: true,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.

          <Button onClick={this.handleClick}>Really cool button component</Button>
        </p>
      </div>
    );
  }
}

export default App;
