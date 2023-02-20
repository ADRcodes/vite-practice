import React from "react"
import logo from "../assets/react.svg"
import clock from "../assets/clock.svg"
import scale from "../assets/scale.svg"
import shield from "../assets/shield.svg"

const Benefits = () => {
  return (
    <div className="container-xl my-5">
      <div className="row my-4 justify-content-center align-items-center">
        <img
          className="col col-lg-1 col-md-2 col-sm-3 bg-info rounded-circle"
          src={clock}
          alt=""
          // width="200"
          // height="80"
        />
        <p className="col col-lg-7 col-md-7 col-sm-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          praesentium reiciendis esse ex delectus quas eius? Facilis illo velit
          quasi?
        </p>
      </div>
      <div className="row my-4 justify-content-center align-items-center">
        <p className="col col-lg-7 col-md-7 col-sm-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          praesentium reiciendis esse ex delectus quas eius? Facilis illo velit
          quasi?
        </p>
        <img
          className="col col-lg-1 col-md-2 col-sm-3 bg-info rounded-circle"
          src={shield}
          alt=""
          width="50"
          height="50"
        />
      </div>
      <div className="row my-4 justify-content-center align-items-center">
        <img
          className="col col-lg-1 col-md-2 col-sm-3"
          src={scale}
          alt=""
          width="50"
          height="50"
        />
        <p className="col col-lg-7 col-md-7 col-sm-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          praesentium reiciendis esse ex delectus quas eius? Facilis illo velit
          quasi?
        </p>
      </div>
      <div className="row my-4 justify-content-center align-items-center">
        <p className="col col-lg-7 col-md-7 col-sm-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          praesentium reiciendis esse ex delectus quas eius? Facilis illo velit
          quasi?
        </p>
        <img
          className="col col-lg-1 col-md-2 col-sm-3"
          src={clock}
          alt=""
          width="50"
          height="50"
        />
      </div>
    </div>
  )
}

export default Benefits
