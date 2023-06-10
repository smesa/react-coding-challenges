import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "../styles/_app.scss";

// Import context for handling the theme
import { ThemeContext } from "./../../../common/contexts/theme/ThemeProvider";

// Define constants for colors
const SUN_COLOR = "#FFA500";
const MOON_COLOR = "initial";

// Define a component to handle the Dark Mode Toggle
const DarkModeToggle = () => {

  // Use ThemeContext to get the current theme and the function to toggle it
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  // Choose the icon and color for the button based on the current theme
  const buttonColorModeIcon = isDarkMode ? faSun : faMoon;
  const colorModeButton = isDarkMode ? SUN_COLOR : MOON_COLOR;

  // Render a button with the appropriate icon and color, which toggles the theme when clicked
  return (
    <button
      data-testid="btn-color-toggle"
      className="app__dark-mode-btn icon level-right"
      onClick={toggleDarkMode}
    >
      <FontAwesomeIcon icon={buttonColorModeIcon} color={colorModeButton}/>
    </button>
  );
};

const App = () => {

  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>

        {/* Add the DarkModeToggle component */}
        <DarkModeToggle />
      </div>

      <div className="columns">
        <div className="column">
          <p>
            Lollipop powder powder. Cotton candy caramels chupa chups halvah
            muffin caramels apple pie topping cake. Topping chocolate bar pastry
            chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
            plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
            pie pudding caramels wafer tart tootsie roll macaroon. Croissant
            tiramisu chocolate bar carrot cake lemon drops halvah.
          </p>
        </div>
        <div className="column">
          <p>
            Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
            tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
            marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
            Pudding sugar plum chocolate cake cake biscuit pastry pastry
            chocolate bar tart. Lemon drops dessert gummies icing.
          </p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">

        {/* I changed the <a href> elements to <button> since by semantics the <a> elements are for redirection action. */}
          <button className="button is-primary">Save</button>
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default App;
