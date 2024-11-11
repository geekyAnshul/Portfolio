
import { createContext, useReducer } from "react";

// Create the theme context
export const themeContext = createContext();

// Initial state for the theme
const initialState = { darkMode: false };

// Reducer to handle theme changes
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

// ThemeProvider component to wrap around your app
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};
