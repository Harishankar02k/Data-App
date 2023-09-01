import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import SplitScreen from "./Login/Login";
import HomeScreen from "./HomeScreen/HomeScreen";
import { Routes, Route } from "react-router-dom";
import DataScreen from "./DataPage/Datapage";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<SplitScreen />} />
        <Route path="/loggedin" element={<HomeScreen />} />
        <Route path='/login' element={<SplitScreen />} />
        <Route path="/datapage" element={<DataScreen/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
