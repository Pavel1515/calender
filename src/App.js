import { Routes, Route } from "react-router-dom";
import "./App.css";
import Calendar from "./components/Calendar";
import FormAdd from "./components/FormAdd";
import FormChange from "./components/FormChange";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="add" element={<FormAdd/>} />
        <Route path="change" element={<FormChange/>} />
      </Routes>
    </>
  );
};

export default App;
