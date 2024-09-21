import React from "react";
import Logo from "../assets/Logo.png";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarMenuToggle, 
  NavbarMenuItem, 
  NavbarMenu, 
  NavbarContent, 
  NavbarItem, 
  Link 
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About",
    "Contact Us",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      style={{
        backgroundColor: "#303134",
        height: "100px"
      }}
    >
      {/* Logo on the left */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <img 
            src={Logo} 
            alt="Logo"
            className="logo" // Applying a class for logo styling
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Links centered */}
      <NavbarContent className="hidden sm:flex gap-4 mx-auto" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item}>
            <Link 
              href="#" 
              className="text-slate-100 hover:text-[#72bf6a]" // Change hover color to green
              style={{ textDecoration: "none",
                fontSize:"20px"
               }} // Remove underline
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
          style={{ color: "#72bf6a", }}
        />
      </NavbarContent>

      {/* Signup/Login on the right */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Link 
            href="#" 
            className="text-slate-100 hover:text-[#72bf6a]" // Change hover color to green
            style={{ textDecoration: "none",
              fontSize:"20px"
             }} // Remove underline
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="#" 
            className="text-black hover:text-[#000]" 
            style={{ 
              textDecoration: "none",
              backgroundColor: "#72bf6a",
              padding: "8px 16px",
              borderRadius: "14px"
            }}
          >
            Sign Up
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Dropdown menu for mobile */}
      <NavbarMenu 
        style={{
          backgroundColor: "#000",
          position: "absolute",
          top: "100px",
          zIndex: 1000,  
          width: "100%",
          padding: "20px 0",
        }}
      >
        {menuItems.map((item) => (
          <NavbarMenuItem key={item}>
            <Link
              className="w-full text-slate-100 hover:text-[#72bf6a]"
              style={{ textDecoration: "none",
                marginLeft: "30px",
                fontFamily: "Space Grotesk",
                fontSize: "24px",
                marginTop: "40px"
              }}
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
