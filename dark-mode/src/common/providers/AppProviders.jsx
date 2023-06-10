import ThemeProvider from "../contexts/theme/ThemeProvider";
import AppContainer from "../containers/App";

// AppProviders component that wraps its children with the necessary context providers.
// ThemeProvider provides the theme context (light or dark mode)
// AppContainer can include common layout or functionality for the entire app
const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <AppContainer>{children}</AppContainer>
    </ThemeProvider>
  );
};

export default AppProviders;
