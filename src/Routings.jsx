
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Reciepes from './Pages/Reciepes'
import Cart from './Pages/Cart'
import Searchfilter from './Pages/Searchfilter'
import Footer from './Components/Footer'
import Productdetail from './Pages/Productdetail'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Forgotpassword from './Pages/Forgotpassword'
import Tabbar from './Components/Tabbar'
import Contact from './Pages/Contact'

function Routings() {
  return (
  <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/foodietech" element={<Home/>}/>
      <Route path="/reciepe" element={<Reciepes />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<Forgotpassword/>} />
      <Route path="/search" element={<Searchfilter/>}/>
      <Route path="/details" element={<Productdetail/>}/>
    </Routes>     
  <Footer />
  <Tabbar/> 
 </Router>
  </>
      
    
  )
}

export default Routings
