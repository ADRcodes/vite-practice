import React from "react"
import logo from "../assets/react.svg"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light px-3">
      <a
        className="navbar-brand"
        href="#">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        WeDecide
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#">
              Features
            </a>
          </li>
        </ul>
      </div>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        className="rounded-circle img-fluid w-5 h-5"
        width={40}
        alt="Avatar"
      />
    </nav>
  )
}

export default Nav
