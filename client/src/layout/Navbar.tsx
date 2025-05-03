import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdCancel,MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Logo from "../assets/1.png"
import Logo2 from "../assets/white.png"
import { IoMenu } from "react-icons/io5";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "#",
    dropdown: [
      { name: "Our Company", path: "/about/company" },
      { name: "Our Perspective", path: "/about/perspective" },
      { name: "Our Team", path: "/about/team" },
    ],
  },
  { name: "Investor", path: "/investment" },
  { name: "Trading", path: "/trade" },
  { name: "ESG", path: "/enviroment" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState("EN");
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.includes("/about")) setDropdown("about");
    else setDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0); // Set scrolling state based on window scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
    className={`fixed top-0 left-0 right-0 z-99 transition-all shadow duration-300 ${scroll ? "bg-white shadow-md" : "bg-transparent"}`}
  >
      {/* Top Bar with Language and Location */}
      <div className={`border-b-[0.5px] py-4 text-sm flex justify-between items-center px-4 md:px-8 lg:px-16 ${scroll ? "hidden" : "border-white"}`}
           style={{ borderColor: scroll ? "var(--secondary-color)" : "var(--text-white)" }}>
            <div className="flex items-center space-x-2">
        <FaLocationDot color={scroll ? "var(--secondary-color)" : "var(--text-white)" } />
          <span style={{ color: scroll ? "var(--secondary-color)" : "var(--text-white)" }}>
            Parnell, Auckland 1151, New Zealand
          </span>
        </div>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border p-1 rounded-md"
          style={{
            borderColor: scroll ? "var(--secondary-color)" : "var(--text-white)",
            color: scroll ? "var(--secondary-color)" : "var(--text-white)"
          }}>
          <option value="EN" className="text-[#121212]">English</option>
          <option value="ES" className="text-[#121212]">Spanish</option>
          <option value="FR" className="text-[#121212]">French</option>
        </select>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-3 flex items-center justify-between">
        <NavLink to="/" >
        {scroll ?   <div className="text-lg font-bold flex gap-2 items-center">
        <img src={Logo} alt="" className="w-[3rem]"/>
        <p className="font-bold text-[var(--primary-color)]">Glow Holdings</p>
        </div> : <div className="text-lg font-bold flex gap-2 items-center">
        <img src={Logo2} alt="" className="w-[3rem]"/>
        <p className="font-bold text-[var(--text-white)]">Glow Holdings</p>
        </div>}
       
        
         
        </NavLink>

        <ul className="hidden md:flex space-x-14 items-center mx-auto"
            style={{ color: scroll ? "var(--text-black)" : "var(--text-white)" }}>
          {navLinks.map((link) => (
            <li
              key={link.name}
              style={{ color: scroll ? "var(--text-black)" : "var(--text-white)" }}
              onMouseEnter={() => link.dropdown && setDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setDropdown(null)}
            >
              {link.dropdown ? (
                <>
                  <span className="flex items-center cursor-pointer"
                  style={{ color: scroll ? "var(--text-black)" : "var(--text-white)" }}>
                    {link.name} <MdOutlineKeyboardArrowDown />
                  </span>
                  {dropdown === link.name && (
                    <div className="absolute  bg-[var(--gray-color)] shadow-lg p-2 w-[180px] rounded-md">
                      <ul className="space-y-2"
                      >
                        {link.dropdown.map((item) => (
                          <li key={item.name}>
                            <NavLink to={item.path} className="block px-4 py-2 hover:bg-gray-100 text-[#121212]"
                            >
                              {item.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""} text-[var(--text-white)]`
                  }
                  style={{ color: scroll ? "var(--text-black)" : "var(--text-white)" }}
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button className="px-4 py-2 rounded-md "
           style={{ 
           color: scroll ? "var(--text-white)" : "var(--secondary-color)",
            backgroundColor: scroll ? "var(--primary-color)" : "var(--text-white)" }}

            onClick={() => navigate('/login')}
          >GET STARTED</button>
        </div>

        <div className="md:hidden " onClick={() => setNavOpen(!navOpen)}
        style={{ backgroundColor: scroll ? "var(--text-color)" : "var(--text-white)", padding:'2px', borderRadius: '30px' }}
          >
            {navOpen ? <MdCancel size={36}/> : <IoMenu size={36}/>}
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-64 bg-[var(--secondary-color)] shadow-lg z-50 px-4 pt-20">
          <ul className=" grid gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.dropdown ? (
                  <details>
                    <summary className="flex items-center text-lg text-[var(--text-white)] ml-4 cursor-pointer">
                      {link.name} <MdOutlineKeyboardArrowDown />
                    </summary>
                    <ul className="bg-[var(--gray-color)] ">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <NavLink to={item.path} className="block px-4 py-2 hover:bg-gray-100">
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-4   ${isActive ? "text-blue-600 font-bold" : "text-gray-800"} text-[var(--text-white)] text-lg`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
