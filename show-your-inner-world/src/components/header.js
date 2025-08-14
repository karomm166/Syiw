import React from 'react';
import logo from '../img/logo2.png';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Inner World Logo" className="header_logo" />
        <nav className="header_nav">
          <ul className="header_list">
            <li><a className="active" href="#!">HOME</a></li>
            <li className="dropdown">
              <a href="#!" id="dropdownToggle">CATEGORIES</a>
              <div className="dropdown-content" id="dropdownMenu">
                <a href="#!">a</a>
                <a href="#!">b</a>
                <a href="#!">c</a>
                <a href="#!">d</a>
                <a href="#!">e</a>
                <a href="#!">f</a>
              </div>
            </li>
            <li><a href="#!">OUR OFFER</a></li>
            <li><a href="#!">PRICING</a></li>
            <li><a href="#!">SHOP</a></li>
          </ul>
        </nav>
        <div id="aaaa">
          <a href="#!" className="btn" id="aaa">Sign in</a>
          <a href="#!" className="btn" id="aaab">Sign up</a>
        </div>
      </div>
    </header>
  );
}
