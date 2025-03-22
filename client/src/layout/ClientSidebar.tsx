import { BiSolidDashboard } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { useState } from "react";
import { NavLink,  useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown, MdCancel } from "react-icons/md";
import { FaPiggyBank } from "react-icons/fa6";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { IoIosWallet } from "react-icons/io";
import { HiWallet } from "react-icons/hi2";
import { HiArchiveBoxArrowDown } from "react-icons/hi2";
import { ImUsers } from "react-icons/im";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const sidebar = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <BiSolidDashboard size={24} />,
  },
  {
    name: "Invest",
    path: "#",
    icon: <GiWallet size={24} />,
    dropdown: [
      { name: "Invest", path: "/package", icon: <HiWallet size={24} /> },
      { name: "My Investment", path: "/myinvestment", icon: <IoIosWallet size={24} /> },
    ],
  },
  { name: "Deposit", path: "/deposit", icon: <FaPiggyBank size={24} /> },
  { name: "Withdrawal", path: "/withdraw", icon: <HiArchiveBoxArrowDown size={24} /> },
  { name: "Transaction", path: "/transaction", icon: <FaMoneyBillTransfer size={24} /> },
  { name: "Referral", path: "/referral", icon: <ImUsers size={24} /> },
];

const ClientSidebar = () => {
  const [open, setOpen] = useState(true);
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleBar = () => setOpen(!open);
  const toggleDropdown = (name: string) => {
    setDropdown(dropdown === name ? null : name);
  };
  const handleBar = () => setNav(!nav);

  return (
    <div className="absolute top-0 left-0">
      {/* sidebar header*/}
      <div onClick={handleBar} className="block md:hidden ml-4 cursor-pointer">
        {nav ? "" : <IoMenu size={30} />}
      </div>
      <div
        style={{ width: open ? "250px" : "120px" }}
        className="w-[230px] h-screen bg-[var(--secondary-color)] p-8 fixed z-50 shadow-lg sm:block hidden"
      >
        <div className="flex p-2 items-center">
          <div onClick={() => navigate("/overview")}>
            <p>Logo</p>
          </div>
          <div
            onClick={toggleBar}
            className="absolute right-[-30px] shadow-lg rounded-full p-2 bg-[var(--light-gray)] cursor-pointer"
          >
            {open ? <IoMdArrowDropleft /> : <IoMdArrowDropright />}
          </div>
        </div>

{/* sidebar body*/}
        <div className="mt-8">
          {sidebar.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <>
                  <div
                    className="flex items-center gap-2 py-3 cursor-pointer"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <p className="text-[var(--text-white)]">{item.icon}</p>
                    <p style={{ display: open ? "block" : "none" }} className="text-[var(--text-white)]">
                      {item.name}
                    </p>
                    <MdOutlineKeyboardArrowDown
                      className={`transition-transform ${dropdown === item.name ? "rotate-180" : ""} text-[var(--text-white)]`}
                    />
                  </div>
                  {dropdown === item.name && (
                    <div className=" ml-4">
                      {item.dropdown.map((subItem, subIndex) => (
                        <NavLink key={subIndex} to={subItem.path} className="block  py-2 hover:bg-[var(--text-white)] rounded-md text-[var(--text-white)]">
                          <div className="flex items-center gap-2">
                            {subItem.icon}
                            <span style={{ display: open ? "block" : "none" }}>{subItem.name}</span>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink to={item.path} className="flex items-center gap-2 py-3">
                  {item.icon}
                  <p style={{ display: open ? "block" : "none" }} className="text-[var(--text-white)]">
                    {item.name}
                  </p>
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
      

      {/* sidebar mobile */}
      {nav && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-64 bg-[var(--light-gray)] shadow-lg z-50 p-4">
          <div onClick={handleBar} className="flex justify-end cursor-pointer">
            <MdCancel size={30} />
          </div>
          <ul className="mt-4 space-y-4">
            {sidebar.map((link) => (
              <li key={link.name}>
                {link.dropdown ? (
                  <details>
                    <summary className="flex items-center cursor-pointer">
                      <p className=" px-4  text-[var(--text-black)] flex items-center gap-2"> {link.icon} <span>{link.name} </span> <MdOutlineKeyboardArrowDown /> </p>
                    </summary>
                    <ul className="ml-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <NavLink to={item.path} className="block px-4 py-2 hover:bg-gray-100">
                             <p className="flex gap-2 items-center text-[var(--text-black)]"> {item.icon}<span>{item.name}</span></p>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <NavLink to={link.path} className="block px-4 py-2 text-[var(--text-black)] hover:bg-gray-100">
                    <p className="text-[var(--text-black)] flex items-center gap-2"> {link.icon} <span>{link.name}</span></p>
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

export default ClientSidebar;
