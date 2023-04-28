import { createContext, useReducer } from "react";
const ThemeContext = createContext();

function ChangeThemContext({ children }) {
  function changeState(state, action) {
    switch (action.type) {
      case "CHANGE_COLOR":
        return { ...state, color: action.payload };
      case "CHANGE_MODE":
        return { ...state, mode: action.payload };
      default:
        return state;
    }
  }
  const changeNavColor = (color) => {
    dispatch({
      type: "CHANGE_COLOR",
      payload: color,
    });
  };
  const changeMode = (mode) => {
    dispatch({
      type: "CHANGE_MODE",
      payload: state.mode?false : true,
    });
  };
  const [state, dispatch] = useReducer(changeState, {
    color: "blue",
    mode: true
  });
  return (
    <ThemeContext.Provider value={{ ...state, changeNavColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ChangeThemContext, ThemeContext };
