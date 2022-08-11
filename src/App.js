import './App.css';
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';


function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/blogs' element={<Blog/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
