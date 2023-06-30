import React, { Component } from "react";
import Card from "./components/card";
import { Test } from "./pages/test";

import { cardData } from "./items/content";

import "./styles/css/constants.css";

class App extends Component {
  render() {
    return (
      <article>
        <article className="grid">
          {cardData.map((item, i) => {
            return (
              <Card
                key={i}
                name={item.name}
                letter={item.letter}
                color={item.color}
                content={item.content}
                image={item.image}
              />
            );
          })}
        </article>
      </article>

      // <Test />
    );
  }
}

export default App;
