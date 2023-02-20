import React from "react"
import logo from "../assets/react.svg"

const Footer = () => {
  return (
    <div>
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>

        <p class="text-center text-muted">
          <span>
            {" "}
            <img
              class="bi"
              width="30"
              height="24"
              src={logo}
            />
          </span>
          © 2023 WeDecide
        </p>
      </footer>
    </div>
  )
}

export default Footer
