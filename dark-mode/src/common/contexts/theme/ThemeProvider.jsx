import { createContext, useReducer } from 'react';

// Create a context for theme settings
export const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

// Define a reducer to manage the updates to the theme state
const themeReducer = (state, action) => {
  switch (action.type) {

    // Handle action to toggle dark mode, flipping the isDarkMode boolean
    case "TOGGLE_DARK_MODE":
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

// ThemeProvider provide theme context to child components
const ThemeProvider = ({ children }) => {

  const [state, dispatch] = useReducer(themeReducer, { isDarkMode: false });

  // Function to dispatch the "TOGGLE_DARK_MODE" action
  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode: state.isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
