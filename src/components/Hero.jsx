import React from "react"

const Hero = () => {
  return (
    <div className="p-5 bg-primary text-white container-fluid ">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h1 className="display-4">Hello!</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <hr />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            delectus?
          </p>
          <a
            class="btn btn-secondary"
            href="#"
            role="button">
            Register here
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
