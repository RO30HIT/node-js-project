import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav"
import Footer from './components/footer';
import Signup from "./components/signup"
import PrivateComponent from './components/privateComponent';
import Login from './components/login';
import AddProduct from './components/addProduct';
import ProductList from './components/productList';
import Update from './components/updateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Nav />
      <Routes>

        <Route element={<PrivateComponent />}>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />}/> 
        <Route path="/update/:id"element={<Update />}/>
       <Route path="/logout"element={<h1>logout component</h1>}/>
       <Route path="/profile"element={<h1>Profile component</h1>}/>
       </Route>

       <Route path="/signup"element= {<Signup />} />
       <Route path="/login" element={<Login />}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
