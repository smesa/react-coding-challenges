// Importing custom hook for dark mode functionality
import useDarkMode from './../hooks/useDarkMode';

const App = ({ children }) => {

  // Call custom hook to handle dark mode logic. 
  // This hook updates the className of the document's root element based on the theme mode.
  useDarkMode();
  
  // Render child components. This component is a Higher-Order Component that doesn't render any markup itself,
  // but calls the useDarkMode hook and renders its child components.
  return children;
}

export default App;
