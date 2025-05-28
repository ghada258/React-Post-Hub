import './App.css'
import Button from '@mui/material/Button';
import SignUp from './pages/SignUp_Login';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import SignUp_Login from './pages/SignUp_Login'

function App() {

  return (
    <>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<SignUp_Login/>}></Route>
        <Route path='/SignUp' element={<SignUp_Login/>}></Route>
        
     </Routes>
    </>
  )
}

export default App
