
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import LoginUser from './pages/auth/LoginUser';
import MainLayout from './layout/MainLayout';
import LandingPage from './pages/landingPage/LandingPage';
import Company from './pages/landingPage/about/ourCompany/Company';
import Perspect from './pages/landingPage/about/OurPerspect/Perspect';
import Team from './pages/landingPage/about/OurTeam/Team';
import Member from './pages/landingPage/about/OurTeam/Member';
import Investment from './pages/landingPage/services/investment/Investment';
import Trade from './pages/landingPage/services/trade/Trade';
import Strategies from './pages/landingPage/services/strategies/Strategies';
import Contact from './pages/landingPage/contact/Contact';
import Forex from './pages/landingPage/method/forex/Forex';
import ESG from './pages/landingPage/method/ESG/ESG';
import DI from './pages/landingPage/method/DI/DI';
import Register from './pages/auth/Register';


function App() {
 

  return (
    < BrowserRouter>
      <Routes>
       <Route  path='/' element={<MainLayout />}>
       <Route index element={<LandingPage/>}/>
       <Route path='/login' element={<LoginUser/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/about/company' element={<Company/>}/>
       <Route path='/about/perspective' element={<Perspect/>}/>
       <Route path='/about/team' element={<Team/>}/>
       <Route path="/member" element={<Member/>}/>
       <Route path="/investment" element={<Investment/>}/>
       <Route path="/trade" element={<Trade/>}/>
       <Route path="/strategy" element={<Strategies/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/forex" element={<Forex/>}/>
       <Route path="/enviroment" element={<ESG/>}/>
       <Route path="/diversity" element={<DI/>}/>
    </Route>
      </Routes>      
    </ BrowserRouter>
  )
}

export default App
