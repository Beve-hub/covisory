import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ClientSidebar from "./ClientSidebar";
import Footer from "./Footer";
import AdminSidebar from "./AdminSidebar";

const MainLayout = () => {
  const location = useLocation();
  const showNavbar = ["/", "/landingPage","/about/company","/about/perspective","/about/team", "/member", "/investment","/strategy","/trade","/contact","/enviroment","/forex","/diversity"].includes(location.pathname);
  const showClientSidebar = ["/dashboard","/deposit","/withdraw","/transaction", "/referral", "/package","/myinvestment"].includes(location.pathname);
  const showAdminSidebar = ["/AdminDashboard"].includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}
      {showClientSidebar && <ClientSidebar />}
      {showAdminSidebar && <AdminSidebar />}
      <Outlet />  {/* <-- Ensures the page content is rendered */}
      {showNavbar && <Footer />}
    </div>
  );
};

export default MainLayout;
