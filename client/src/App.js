import React, { Component } from "react";
import Images from "./components/images";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="hero is-fullheight is-bold is-info">
          <div className="hero-body">
            <div className="container">
              <div className="header content">
                <h2 className="subtitle is-6">By Christian Huffman</h2>
                <h1 className="title is-1">
                  Infinite Scroll Unsplash Code Challenge
                </h1>
              </div>
              {/* Render our images here */}
              <Images />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
