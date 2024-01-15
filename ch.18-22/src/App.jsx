import React, { useState } from "react";
import Container from "./components/container";
import FoodInput from "./components/foodinput";
import Errormsg from "./errormsg";
import Listitem from "./listitem";
import foodItem from "./items";
import "./App.css";

function App() {
  const [items, setItems] = useState(foodItem);

  const handleOnKey = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <>
      <Container className="container">
        <h2>healthy food</h2>
        <FoodInput onEnter={handleOnKey} />
        <ul className="list-group">
          {items.map((item, index) => (
            <Listitem key={index} item={item} buy="buy" />
          ))}
        </ul>
        <Errormsg></Errormsg>
      </Container>

      <Container>
        <p>this is going to be the 2000 cal diet</p>
      </Container>
    </>
  );
}

export default App;
