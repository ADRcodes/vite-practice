import React from "react"

const Testimonials = () => {
  //   $("#myTab button").on("click", function (event) {
  //     event.preventDefault()
  //     $(this).tab("show")
  //   })

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
          <h2 className="text-center">Testimonials</h2>
          <div className="row">
            <div className="col-3">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical">
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  data-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true">
                  Home
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  data-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false">
                  Profile
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  data-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false">
                  Messages
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  data-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false">
                  Settings
                </button>
              </div>
            </div>
            <div className="col-9">
              <div
                className="tab-content"
                id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  officiis alias nostrum vitae at maiores labore rerum debitis
                  quam officia! Harum odio minima error blanditiis totam illo,
                  eaque mollitia sit!
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  molestias earum consectetur ullam quod nam obcaecati veritatis
                  facere dignissimos nesciunt non, distinctio corporis sunt
                  itaque minus enim nostrum aperiam aliquam quibusdam delectus
                  quas, quia neque dolor! Quam illum fugit inventore sequi aut
                  reprehenderit quos laboriosam?
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab">
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab">
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
