import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import "./App.css";
import CreateUser from "./CreateUser";
import UpdateUsers from "./UpdateUser";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/create" element={<CreateUser />}></Route>
        <Route path="/update/:id" element={<UpdateUsers />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
