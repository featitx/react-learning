import React, { useState } from "react";
import "../App.css";

const FoodInput = ({ onEnter }) => {
  const [textToShow, setTextState] = useState("Food item enter here is");

  const handleOnKey = (e) => {
    if (e.key === "Enter") {
      onEnter(e.target.value); // Pass the entered value to the parent component
      e.target.value = ""; // Clear the input after Enter is pressed
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter food item here"
        className="foodinput"
        onKeyDown={handleOnKey}
      />
    </>
  );
};

export default FoodInput;
