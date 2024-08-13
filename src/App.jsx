
// import { useState } from "react";

import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Two from "./components/Two/Two";
import { useMainContext } from "./contexts/MainContext";
// import MainContext from "./contexts/MainContext";
import Home from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";






function App() {
  const useMAin = useMainContext();
  // console.log(useMAin);


  return (

    <>
      {/* <h1>Context API - {useMAin.userName}</h1> */}
      {/* <Two /> */}

      <Header />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
    </>

  )
}

export default App
