import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 import {NavLink} from 'react-router-dom'
 import { AiOutlineUser} from "react-icons/ai";
export default function Example(){
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={'/'}>

        <p className="flex  py-2 pl-3 pr-4   font-serif rounded md:bg-transparent  md:text-black  text-white md:text-md md:font-bold  md:p-0 dark:text-white">
        HOME
        </p>
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={'/destination'}>

<p className="flex  py-2 pl-3 pr-4   font-serif rounded md:bg-transparent  md:text-black  text-white md:text-md md:font-bold  md:p-0 dark:text-white">
DESTINATIONS
</p>
</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
      <NavLink to={'/about'}>

<p className="flex  py-2 pl-3 pr-4   font-serif rounded md:bg-transparent  md:text-black  text-white md:text-md md:font-bold  md:p-0 dark:text-white">
ABOUTS
</p>
</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
      <NavLink to={'/service'}>

<p className="flex  py-2 pl-3 pr-4   font-serif rounded md:bg-transparent   md:text-black  text-white md:text-md md:font-bold  md:p-0 dark:text-white">
SERVICES
</p>
</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
      <NavLink to={'/contact'}>

<p className="flex  py-2 pl-3 pr-4   font-serif rounded md:bg-transparent  md:text-black  text-white md:text-md md:font-bold  md:p-0 dark:text-white">
CONTACTS
</p>
</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
      <NavLink to={'/profile'}>
          
<p className="flex  py-2 pl-3 pr-4 text-xl  font-serif rounded md:bg-transparent md:text-black  text-white md:text-md md:font-bold  md:p-0 dark:text-white">
<AiOutlineUser/>
</p>
</NavLink>
      </Typography>
    
    </ul>
  );
 
  return (
    <Navbar className={`bg-transparent border-0 px-2 sm:px-4 py-2.5 rounded md:relative fixed  ${openNav && "bg-black/30"} bg-opacity-75 z-20`}>
      <div className="container flex justify-between  items-center  gap-11 text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal "
        >
          <NavLink to='/'>
    <p  className="flex items-center">
        <img src={require('../../Assets/logo4.png')} className="h-[120px] mr-3 w-[140px] hidden md:block" alt="Logo" />
        <span className="self-center block md:hidden text-black text-xl font-semibold whitespace-nowrap dark:text-white">TarVio</span>
    </p>
    </NavLink> 
        </Typography>
        <div className="hidden lg:block ">{navList}</div>
        <NavLink to='/destination'>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block text-black   font-Ariza">
           BOOK NOW 
        </Button>
            </NavLink>
        
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
             
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <NavLink to='/destination'>
          <Button variant="gradient" size="sm" fullWidth className="mb-2 font-Ariza  ">
          BOOK NOW 
          </Button>
          </NavLink>
        </div>
      </MobileNav>
    </Navbar>
  );
}