import React, { Component } from "react";
import "./app.scss";
import Header from "./components/header";
import Headline from "./components/headline";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header={"Tested /success : 3000"}
            desc="Tested /success : 3000"
          />
        </section>
      </div>
    );
  }
}

export default App;
