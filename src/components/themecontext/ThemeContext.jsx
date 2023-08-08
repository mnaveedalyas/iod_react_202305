import React, { useContext, useState } from "react";


// 1. Create the context
const ThemeContext = React.createContext();


export const ThemeProvider = (props) => {
  // store the current user in state at the top level
  const [currentTheme, setCurrentTheme] = useState({
    isLightTheme : true,
    light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
    dark: {syntax: '#ddd', ui: '#333', bg: '#555'},
  });
  //console.log('currentTheme', currentTheme);
  // sets user object in state, shared via context
  const handleToggleTheme = () => {
    console.log('Toggle Button is clicked');
    setCurrentTheme({
      light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
      dark: {syntax: '#ddd', ui: '#333', bg: '#555'},
      isLightTheme : !currentTheme.isLightTheme
    });
  }
  // 2. Provide the context.
  // The Provider component of any context (UserContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current user and an update function
  return (
    <ThemeContext.Provider value= { {currentTheme,  handleToggleTheme} }>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const useCurrrentTheme = () => {
  //console.log('useContext', useContext(ThemeContext))
  return useContext(ThemeContext);
}
