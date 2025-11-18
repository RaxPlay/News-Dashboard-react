import { HomeScreen } from "./components/HomeScreen";
import { Navbar } from "./components/Nabvar";
import { NewsComponent } from "./components/NewsComponent";

import { Route, Routes, Navigate } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/home" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/news" element={<NewsComponent></NewsComponent>}></Route>
        <Route path='/*' element={ <Navigate to="/home"></Navigate>}></Route>
      </Routes>
    </>
  )
}
