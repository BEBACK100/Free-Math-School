import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-blue-500">
        <div className="navbar flex-col">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li>
                <a>Sumary</a>
                <ul className="p-2">
                  <li><NavLink to="/academic" >Academic</NavLink ></li>
                  <li><NavLink to="/admission" >Admission</NavLink ></li>
                  <li><NavLink to="/aboutUs" >About Us</NavLink  ></li>
                </ul>
              </li>
              <li>
                <a>Sumary</a>
                <ul className="p-2">
                <li><NavLink to="/academic" >Academic</NavLink ></li>
                  <li><NavLink to="/admission" >Admission</NavLink ></li>
                  <li><NavLink to="/aboutUs" >About Us</NavLink  ></li>
                </ul>
              </li>
              <li>
                <a>Sumary</a>
                <ul className="p-2">
                <li><NavLink to="/academic" >Academic</NavLink ></li>
                  <li><NavLink to="/admission" >Admission</NavLink ></li>
                  <li><NavLink to="/aboutUs" >About Us</NavLink  ></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">MB online Cloth</a> */}
         <div>
         <Link to="/" className="btn btn-ghost normal-case text-xl">MB online Cloth</Link>
         <NavLink to="/academic" >Academic</NavLink >
               <NavLink to="/admission" >Admission</NavLink >
         </div>

        <div className=" hidden lg:flex bg-red-300 justify-center rounded-lg ">
          <ul className="menu menu-horizontal px-1 z-[1]  " viewBox="0 0 24 24">
            <li><NavLink to='/'>Home</NavLink ></li>
            
                  
            
            <li tabIndex={0}>
              <details>
                <summary><NavLink  to='/aboutUs' viewBox="0 0 24 24">About Us</NavLink ></summary>
                <ul className="p-2">
                  <li><Link to ="/aboutUs">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary><NavLink to="/admission" >Admission</NavLink ></summary>
                <ul className="p-2">
                  <li><Link to ="/aboutUs">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary><NavLink to="/academic" >Academic</NavLink ></summary>
                <ul className="p-2">
                  <li><Link to ="/aboutUs">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Gallery</summary>
                <ul className="p-2">
                  <li><Link to ="/aboutUs">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>General</summary>
                <ul className="p-2">
                  <li><Link to ="/aboutUs">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Circulars</summary>
                <ul className="p-2">
                  <li><Link to ="/aboutUs">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </details>
            </li>
        
          </ul>
        </div>
        </div>
        <div className="navbar-end">
          <Link to='login' className="btn mr-3">Online Payment</Link>
          <Link to='login' className="btn">Login</Link>
        </div>
      </div>
    );
};

export default Header;