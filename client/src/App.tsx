
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import LoginUser from './pages/auth/LoginUser';
import MainLayout from './layout/MainLayout';
import LandingPage from './pages/landingPage/LandingPage';
import Company from './pages/landingPage/about/ourCompany/Company';
import Perspect from './pages/landingPage/about/OurPerspect/Perspect';
import Team from './pages/landingPage/about/OurTeam/Team';


function App() {
 

  return (
    < BrowserRouter>
      <Routes>
       <Route  path='/' element={<MainLayout />}>
       <Route index element={<LandingPage/>}/>
       <Route path='/login' element={<LoginUser/>}/>
       <Route path='/about/company' element={<Company/>}/>
       <Route path='/about/perspective' element={<Perspect/>}/>
       <Route path='/about/team' element={<Team/>}/>
    </Route>
      </Routes>      
    </ BrowserRouter>
  )
}

export default App
