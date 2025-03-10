
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import LoginUser from './pages/auth/LoginUser';
import MainLayout from './layout/MainLayout';
import LandingPage from './pages/landingPage/LandingPage';


function App() {
 

  return (
    < BrowserRouter>
      <Routes>
       <Route  path='/' element={<MainLayout />}>
       <Route index element={<LandingPage/>}/>
       <Route path='/login' element={<LoginUser/>}/>
    </Route>
      </Routes>      
    </ BrowserRouter>
  )
}

export default App
