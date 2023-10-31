import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-blue-500">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li>
                <a>Sumary</a>
                <ul className="p-2">
                  <li><NavLink to="/contact" >Contact</NavLink ></li>
                  <li><NavLink to="/product" >Product</NavLink ></li>
                  <li><NavLink to="/about" >About Us</NavLink  ></li>
                </ul>
              </li>
              <li>
                <a>Sumary</a>
                <ul className="p-2">
                  <li><NavLink to="/contact" >Contact</NavLink ></li>
                  <li><NavLink to="/product" >Product</NavLink ></li>
                  <li><NavLink to="/about" >About Us</NavLink  ></li>
                </ul>
              </li>
              <li>
                <a>Sumary</a>
                <ul className="p-2">
                  <li><NavLink to="/contact" >Contact</NavLink ></li>
                  <li><NavLink to="/product" >Product</NavLink ></li>
                  <li><NavLink to="/about" >About Us</NavLink  ></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">MB online Cloth</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 z-[1] " viewBox="0 0 24 24">
            <li><NavLink to='/'>Home</NavLink ></li>
            <li><NavLink  to='/about'>About Us</NavLink ></li>
            <li><NavLink  to='/contact'>Contact</NavLink ></li>
            
            <li><Link  to='/product'>Product</Link ></li>
            
            <li tabIndex={0}>
              <details>
                <summary>Summary</summary>
                <ul className="p-2">
                  <li><Link to ="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Summary</summary>
                <ul className="p-2">
                  <li><Link to ="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Summary</summary>
                <ul className="p-2">
                  <li><Link to ="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </details>
            </li>
          
            <li><a></a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Header;