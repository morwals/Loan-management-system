import { BrowserRouter, Route, Routes } from "react-router-dom";
import From from "./components/Form"
import Home from "./components/Home";
import ShowUsers from "./components/showUsers";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
      <Route exact path="/" element={<Home/>} /> 
        <Route exact path="/addUser" element={<From/>} />
        <Route exact path="/getUsers" element={<ShowUsers/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
