interface NavbarItem {
    name: string;
    path: string;
 }

 export const NavData: NavbarItem[] = [
    { name: "Home", path: "/" },
    {
        name: "Our Company",
        path: "#",
        dropdown: [
            { name: "Background", path: "/about/background" },
            { name: "Our Values", path: "/about/values" },
            { name: "Our Mission", path: "/about/mission" },
            { name: "Our Team", path: "/about/team" },
        ]
    },
    { name: "Service", path: "/service" },
    { name: "Project", path: "/project/building" },
    { name: "Contact", path: "/location" },
    { name: "Admin", path: "/admin" }
   ]

