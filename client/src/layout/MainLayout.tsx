import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ClientSidebar from "./ClientSidebar";
import Footer from "./Footer";
import AdminSidebar from "./AdminSidebar";
import { SliderProvider } from "./Slider";

const MainLayout = () => {
  const location = useLocation();
  const showNavbar = ["/", "/landingPage","/about/company","/about/perspective","/about/team", "/member", "/investment","/strategy","/trade","/contact","/enviroment","/forex","/diversity"].includes(location.pathname);
  const showClientSidebar = ["/dashboard","/deposit","/withdraw","/transaction", "/referral","/settings","/userClient","/usersDetails","/adminTran","/adminWallet","/adminDash","/convert","/investDashboard"].includes(location.pathname);
  const showAdminSidebar = ["/AdminDashboard"].includes(location.pathname);

  return (
    <SliderProvider>
    <div>
      {showNavbar && <Navbar />}
      {showClientSidebar && <ClientSidebar />}
      {showAdminSidebar && <AdminSidebar />}
      <Outlet />  {/* <-- Ensures the page content is rendered */}
      {showNavbar && <Footer />}
    </div>
    </SliderProvider>
  );
};

export default MainLayout;
