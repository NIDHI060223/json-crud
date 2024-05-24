import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddUser from './AddUser';

function App() {
  return (
    <div>
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/add-user" element={<AddUser/>}></Route>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
