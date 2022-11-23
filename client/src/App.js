import "./App.scss";
import React from "react";
import { Home, Login, Public } from "./containers/public";
import { Routes, Route } from "react-router-dom";
import { path } from "./ultis/path";
const App = () => {
  return (
    <>
      <Routes>
        <Route path={path.PUBLIC} element={<Public></Public>}>
          <Route path={path.HOME} element={<Home></Home>}></Route>
          <Route path={path.START} element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
