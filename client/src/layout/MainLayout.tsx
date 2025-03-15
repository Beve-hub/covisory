import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ClientSidebar from "./ClientSidebar";
import Footer from "./Footer";
import AdminSidebar from "./AdminSidebar";

const MainLayout = () => {
  const location = useLocation();
  const showNavbar = ["/", "/landingPage","/about/company","/about/perspective","/about/team"].includes(location.pathname);
  const showClientSidebar = ["/dashboard"].includes(location.pathname);
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
