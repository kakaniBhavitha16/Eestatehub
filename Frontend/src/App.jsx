import { BrowserRouter, Routes,Route} from "react-router-dom"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Header from "./components/Header"

export default function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/Sign-in" element={<Signin/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
  )
}
