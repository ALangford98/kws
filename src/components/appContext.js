import React, { createContext, Component } from "react";

const AppContext = createContext();

class AppContextProvider extends Component {
  state = {
    // Your state values here
  };

  updateState = (newState) => {
    this.setState(newState);
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          updateState: this.updateState,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppContextProvider };
