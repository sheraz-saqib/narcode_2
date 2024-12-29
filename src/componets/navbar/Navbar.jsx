
import React, { useEffect, useRef ,useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RightArrow from "./widgets/RightArrow";
import ArrowButton from "../ArrowButton";
import NavConstant from "./NavConstant";
import { NavLink } from "react-router-dom";
import Logo from "../Svg/Logo";
gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = NavConstant();

    const navRef = useRef(null);
    const menuRef = useRef(null);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      if (!isMenuOpen) {
        expandMenu();
      } else {
        collapseMenu();
      }
    };

    const expandMenu = () => {
      const menu = menuRef.current;

      gsap.to(menu, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      });
    };

    const collapseMenu = () => {
      const menu = menuRef.current;

      gsap.to(menu, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power1.in",
      });
    };

    useEffect(() => {
        const navbar = navRef.current;
        gsap.fromTo(
          navbar,
          { width: "70rem", borderRadius: "999px" },
          {
            width: "100%", // Full width on scroll
            borderRadius: "0px", // Remove border radius on scroll
            duration: 0.5,
            marginTop:0,
            ease: "power1.out",
            scrollTrigger: {
              trigger: document.body, // Whole body scroll triggers the animation
              start: "top top", // Start animation at the top of the page
              toggleActions: "play reverse play reverse", // Toggle between states
            },
          }
        );
    }, []);

  return (
    <>
      <nav
      ref={navRef}
        className="fixed top-0 left-1/2 transform -translate-x-1/2 z-[9] bg-gradient-to-r from-white to-gray-100 rounded-full p-4 w-[70rem] max-[1080px]:w-[90%] mt-[1rem] "
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <span className="text-[1.8rem] text-gray-800">Akodah</span> */}
            <div className="w-[9rem] ">

            <Logo/>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <ul className="max-[1151px]:hidden lg:flex space-x-6 max-[1285px]:space-x-3 text-gray-900 text-[.85rem]">
            {
                links.map((item,i)=>{
                    return <li key={i} className="hover:text-gray-900 transition-colors">
                            <NavLink
                    to={item.path}
                    className="hover:text-gray-700 transition"
                >
                    {item.label}
                </NavLink>
                    </li>
                })
            }

          </ul>

          {/* Search and Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-800" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Search Icon */}
            <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex justify-center items-center">
              <svg
                className="w-1/2"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="71.000000pt"
                height="71.000000pt"
                viewBox="0 0 71.000000 71.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,71.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path d="M223 682 c-270 -97 -284 -464 -23 -585 34 -16 65 -21 125 -21 72 -1 86 3 140 32 l59 32 72 -71 c58 -57 76 -70 93 -64 35 11 25 33 -50 110 l-71 74 19 28 c36 52 48 97 47 173 0 62 -5 85 -29 134 -52 103 -144 164 -263 172 -49 3 -81 0 -119 -14z m214 -72 c232 -116 162 -454 -99 -477 -51 -5 -66 -2 -123 26 -160 79 -195 280 -69 405 80 81 187 98 291 46z" />
                </g>
              </svg>
            </button>

            {/* Get A Quote Button */}
           <div className="max-lg:hidden">
           <ArrowButton text="Get A Quote"/>
           </div>
          </div>
        </div>
      </nav>


      <div
        ref={menuRef}
        className="fixed top-0 left-0 h-full w-full bg-white p-6 z-[10]  transform -translate-x-full opacity-0"
      >
        <div className="text-right">
          <button onClick={toggleMenu} className="text-gray-900">
            Close
          </button>
        </div>
        <ul className="space-y-6 text-gray-900 text-lg font-medium mt-6">
          {links.map((item, i) => (
            <li key={i}>

                <NavLink
                    to={item.path}
                    className="hover:text-gray-700 transition"
                >
                    {item.label}
                </NavLink>
            </li>
          ))}
          <li>
            <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">
              Get A Quote
            </button>
          </li>
        </ul>
      </div>

    </>
  );
};

export default Navbar;
