import React from "react";
import Header from "./components/Header/Header";
import GlobalStyles from "./GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header userIndex={2} />
    </>
  );
};

export default App;
