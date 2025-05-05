import { BiSolidDashboard } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { useState } from "react";
import { NavLink,  useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown,MdCancel,MdOutlineLogout, MdSettings } from "react-icons/md";
import { FaPiggyBank } from "react-icons/fa6";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

import { HiArchiveBoxArrowDown } from "react-icons/hi2";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import {useSlider} from "./Slider"
import Logo from "../assets/1.png"
import { FaExchangeAlt } from "react-icons/fa";


const sidebar = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <BiSolidDashboard size={24} />,
  },
  {
    name: "Invest",
    path: "/package",
    icon: <GiWallet size={24} />
  },
  { name: "Deposit", path: "/deposit", icon: <FaPiggyBank size={24} /> },
  { name: "Withdrawal", path: "/withdraw", icon: <HiArchiveBoxArrowDown size={24} /> },
  { name: "Conversion", path: "/convert", icon: <FaExchangeAlt size={24} /> },
  { name: "Transaction", path: "/transaction", icon: <FaMoneyBillTransfer size={24} /> },

 
];

const ClientSidebar = () => {
  const {isOpen, toggleSlider} = useSlider();
  const [nav, setNav] = useState(false);
  const [down, setDown] = useState(false);
  const navigate = useNavigate();
  const handleBar = () => setNav(!nav);
  const handleDown = () => setDown(!down)

  return (
    <div className="absolute top-0 left-0">
      {/* sidebar header*/}
      <div onClick={handleBar} className="fixed md:hidden ml-4 cursor-pointer">
        {nav ? "" : <IoMenu size={30} />}
      </div>


      <div
        style={{ width: isOpen ? "200px" : "100px" }}
        className="w-[230px] h-screen bg-[var(--light-gray)] p-8 fixed z-50 shadow-lg sm:block hidden"
      >
        <div className="flex p-2 items-center">
          <div onClick={() => navigate("/overview")} className="flex gap-2">
            <img src={Logo} alt="" className="w-[4rem] "/>
          </div>
          <div
           onClick={toggleSlider}
            className="absolute right-[-5px] shadow-lg z-50 rounded-full p-2 bg-[var(--light-gray)] cursor-pointer"
          >
            {isOpen ? <IoMdArrowDropright /> : <IoMdArrowDropleft />}
          </div>
        </div>

       {/* sidebar body*/}
        <div className="mt-8">
          {sidebar.map((item, index) => (
            <div key={index}>
              
                <p className="flex items-center gap-2 py-3">
                 <NavLink to={item.path} className={({isActive}) => `side-link ${isActive ? "active" : ""}`} >{item.icon}</NavLink>  
                 <p style={{ display: isOpen ? "block" : "none" }} className="text-[var(--text-black)]">
                    {item.name}
                  </p>
                </p>

            </div>
          ))}
        </div>

      

        
      </div>
      

      {/* sidebar mobile */}
      <div>
      {nav && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-64 bg-[var(--light-gray)] shadow-lg z-50 p-4">
          <div onClick={handleBar} className="flex justify-end cursor-pointer">
            <MdCancel size={30} />
          </div>
          <ul className="mt-4 space-y-4">
            {sidebar.map((link) => (
               <ul key={link.name} className="ml-4 mt-2 space-y-2">
               <NavLink to={link.path} className="block px-4 py-2 text-[var(--text-black)] hover:bg-gray-100">
               <p className="text-[var(--text-black)] flex items-center gap-2"> {link.icon} <span>{link.name}</span></p>
             </NavLink>
               </ul>
            ))}
          </ul>
             {/* User Options */}
      <div className="absolute bottom-10 pt-6 border-t border-gray-700">
      <NavLink to="/settings" className="flex items-center gap-2 py-3 text-[var(--text-white)]">
                <MdSettings size={24} />
                {isOpen && <span>Settings</span>}
              </NavLink>
      <div onClick={handleDown} className="flex items-center gap-2 py-3 text-[var(--text-white)] cursor-pointer">
            <FaUserCircle size={24} />
            {isOpen && <span>Profile</span>}
            <MdOutlineKeyboardArrowDown className={down ? "rotate-180" : ""} />
          </div>
          {down && (
            <div className="ml-4">
              
              <NavLink to="/" className="flex items-center gap-2 py-3 text-red-500">
                <MdOutlineLogout size={24} />
                {isOpen && <span>Logout</span>}
              </NavLink>
            </div>
          )}
          
        </div>

        </div>
      )}


      
      </div>
      


     
    </div>
  );
};

export default ClientSidebar;
