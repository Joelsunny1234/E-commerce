import Signup from './components/Signup';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Private from  './components/Private';
import Login from './components/Login';
import Add_product from './components/Add_product';
import Product from './components/Product';
import Update from './components/Update';
function App() {
    
  return (
    <div className="App">
        <BrowserRouter>
        <Nav/>
    <Routes>
        <Route element={<Private/>}>
        <Route path="/" element={<Product/>}></Route>
        <Route path="/add" element={<Add_product/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        <Route path="/logout" element={<h1>Logout Home page</h1>}></Route>
        <Route path="/profile" element={<h1>Profile</h1>}></Route>
        </Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        

    </Routes>
    
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
