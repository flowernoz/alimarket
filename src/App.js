import React from "react";
import { Route, Routes } from "react-router-dom";
// import Main from "./components/Main/Main";
import { router } from "./router";
function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      <Routes>
        {router.map((i, inx) => (
          <Route key={inx} path={i.path} element={i.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
