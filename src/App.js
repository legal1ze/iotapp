import React, { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Navigation from "./Navigation";
import MessageBox from "./MessageBox";
import SetAddress from "./SetAddress";
import { composeAPI } from "@iota/core";
import SignIn from "./SignIn";
const Converter = require("@iota/converter");

const depth = 3;
const minWeightMagnitude = 14;

const seed = [];

const iota = composeAPI({
  provider: "https://nodes.thetangle.org:443"
});

const transfers = {};

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
let address = "";
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      seed: ""
    };
  }
  onGenerateAdress = () => {
    iota.getNewAddress(
      seed[0],
      { index: 0, total: 1, security: 1, checksum: true },
      function(e, address) {
        console.log("Address: " + address[0]);
        // Save generated address in database
      }
    );
  };
  onRouteChange = route => {
    this.setState({ route: route });
  };

  onButtonSend = () => {
    transfers[0]["message"] = Converter.asciiToTrytes(
      document.getElementById("message").value
    );
    iota.prepareTransfers(seed[0], transfers).then(trytes => {
      return iota.sendTrytes(trytes, depth, minWeightMagnitude);
    });
    document.getElementById("message").value = "";
  };

  onSeedChange = e => {
    seed.shift(1);
    seed.push(e.target.value);
    console.log(seed[0]);
  };

  onLastTransactions = () => {
    iota.getAccountData(
      seed[0],
      { index: 0, total: 1, security: 1, checksum: true },
      function(e, address) {
        console.log(address);
        // Save generated address in database
      }
    );
  };

  onSetAddress = e => {
    address += e.target.value;
    transfers.value = 0;
  };

  onSubmitAddress = () => {
    transfers.address = address;
    console.log(transfers.address);
  };

  render() {
    const { route } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        {route === "signin" ? (
          <div>
            <SignIn
              onSeedChange={this.onSeedChange}
              onRouteChange={this.onRouteChange}
            />
          </div>
        ) : route === "home" ? (
          <div>
            <Navigation
              onSetAddress={this.onSetAddress}
              onLastTransactions={this.onLastTransactions}
              onRouteChange={this.onRouteChange}
              onGenerateAdress={this.onGenerateAdress}
            />
            <SetAddress
              onSetAddress={this.onSetAddress}
              onSubmitAddress={this.onSetAddress}
            />
            <MessageBox onButtonSend={this.onButtonSend} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
