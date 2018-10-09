import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Gallery from "./Gallery.js";
import Footer from "./Footer.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
