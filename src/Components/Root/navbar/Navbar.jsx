import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/listedbooks">Listed Books</Link></li>
        <li><Link to="/toread">Pages to Read</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/privacy">Privacy Policies</Link></li>
      </ul>
    </div>
    <Link className='btn btn-ghost text-xl lg:text-3xl text-black font-bold'>BOOK_INC..</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-5 ">
    <NavLink to='/' className={({ isActive}) => isActive ? "text-green-500 text-xl font-normal border border-green-500 border-solid" : "text-xl text-[#131313CC] font-normal"}>Home</NavLink>
    <NavLink to='/listedbooks' className={({ isActive}) => isActive ? 'text-green-500 text-xl font-normal border border-green-500 border-solid': "text-xl text-[#131313CC] font-normal"}>Listed Books</NavLink>
    <NavLink to='/toread' className={({ isActive}) => isActive ? "text-green-500 text-xl font-normal border border-green-500 border-solid" : "text-xl text-[#131313CC] font-normal"}>Pages To read</NavLink>
    <NavLink to='/about' className={({ isActive}) => isActive ? "text-green-500 text-xl font-normal border border-green-500 border-solid" : "text-xl text-[#131313CC] font-normal"}>About us</NavLink>
    <NavLink to='/privacy' className={({ isActive}) => isActive ? "text-green-500 text-xl font-normal border border-green-500 border-solid" : "text-xl text-[#131313CC] font-normal"}>Privacy Policies</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#23BE0A] text-white mr-3">Sign In</a>
    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>