import { useContext, useEffect } from "react";

// Import the Theme context
import { ThemeContext } from "../contexts/theme/ThemeProvider";

// Define a custom hook, useDarkMode, for managing dark mode functionality
const useDarkMode = () => {

  // Retrieve the current theme state using the ThemeContext
  const { isDarkMode } = useContext(ThemeContext);

  // Side effect to run whenever the theme state changes
  useEffect(() => {

    // If dark mode is enabled, add 'dark-mode' class to the root HTML element
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } 

    // If dark mode is not enabled, remove 'dark-mode' class from the root HTML element
    else {
      document.documentElement.classList.remove('dark-mode');
    }

  }, [isDarkMode]);
}

export default useDarkMode;
