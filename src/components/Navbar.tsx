import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/index";
import logo from "../assets/logo.png"  
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import type {Section} from "../App" 
import type {JSX} from 'react'

type NavbarProps = {
    activeSection: Section;
}
export const Navbar = ({activeSection}:NavbarProps):JSX.Element => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [active, setActive] = useState(activeSection);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(()=>{
    setActive(activeSection)
  },[activeSection])
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);  
  return (
    <nav
      className={`fixed ${toggle ? "top-0":"top-0.5"} left-1/2 transform -translate-x-1/2 z-50 
        transition-all duration-300 px-6 md:px-25  
        flex justify-between items-center h-[130px]
        ${scrolled
          ? toggle ? "w-full" : "bg-black/10 backdrop-blur-xl rounded-full  w-[90%] py-2 scale-95"
          : "bg-transparent w-full rounded-none border-none lg:backdrop-blur-xs lg:mask-b-from-30% lg:mask-b-to-90% py-4"}
      `}
    >
      
      <div className="relative w-full flex items-center lg:justify-around justify-between">
        <Link
          to='/'
          className='flex items-center gap-2 transition-all duration-300'
          onClick={() => {
            setActive(0);
            window.scrollTo({top: 0 , behavior: "smooth" });
          }}
        >
          <img src={logo} alt='logo' className='w-25 h-25 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer  hidden xl:flex'>
            Bartek &nbsp;
            <span className='sm:block hidden'> | Front-end Developer</span>
          </p>
        </Link>
      
        <ul className='list-none hidden lg:flex flex-row gap-15'>
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.title ? "text-secondary" : "text-white"
              }  text-[35px] font-medium cursor-pointer hover:text-[#f8f8f8] relative nav-link transition-all duration-300`}
              onClick={() => setActive(item.title)}
            >

                <a href={`#${item.id}`}>{item.title}</a>

            </li>
          ))}
        </ul>
        <div className="block lg:hidden text-5xl w-fit h-fit z-50" onClick={()=> setToggle(prev=>!prev)}>
          {toggle ?<IoMdClose className="text-purple-400"/> : <GiHamburgerMenu className="text-purple-400"/>}
        </div>
        {<div style={{ transform: toggle ? "translateY(0%)" : "translateY(150%)" }} className="fixed top-0 left-0 w-full h-screen z-40
          bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]
          flex flex-col items-center justify-center gap-10
          text-white text-4xl font-bold transition-all duration-500 lg:hidden">
      
      {navLinks.map((item) => (
            <div
              key={item.id}
              className={`${
                active === item.title ? "text-secondary" : "text-white"
              }  text-[48px] font-medium cursor-pointer hover:text-[#f8f8f8] relative nav-link transition-all duration-300`}
              onClick={() => {setActive(item.title); setToggle(prev=>!prev)}}
            >

                <a href={`#${item.id}`}>{item.title}</a>

            </div>
          ))}
        </div>}
      </div>
    </nav>
  );
};

