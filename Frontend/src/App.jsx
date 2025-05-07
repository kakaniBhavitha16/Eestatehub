import { BrowserRouter, Routes,Route} from "react-router-dom"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Header from "./components/Header"
import PrivateRoute from "./Components/PrivateRoute"

export default function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/Sign-in" element={<SignIn/>}/>
    <Route path="/Sign-up" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
    <Route  element={<PrivateRoute/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
  )
}
