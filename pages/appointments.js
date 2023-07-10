import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Appointments = () => {
  return (
    <Layouts footer={2}>
      <PageBanner title={"Appointment"} />
      <section className="appointment-section section-gap">
        <div className="container container-1500">
          <div className="appointment-form-two style-two">
            <div
              className="appointment-image"
              style={{ backgroundImage: "url(assets/img/appointment/book_33.png)" }}
            ></div>
            <div className="form-wrap">
              <div className="section-heading mb-50">
                <span className="tagline">Booking Session</span>
                <h2 className="title">
                Booking sekarang untuk mendapat sensasi bermain..{" "}
                </h2>
              </div>
              <form onSubmit={(e) => e.preventDefault()} action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-field">
                      <input type="text" placeholder="Your Full Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                    <select>
                          <option data-dsplay={1} selected disabled="">
                            Tipe Lapangan
                          </option>
                          <option value={2}>Lapangan 1</option>
                          <option value={3}>Lapangan 2</option>
                          <option value={4}>Lapangan 3</option>
                          <option value={5}>Lapangan 4</option>
                        </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <input type="date" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                    <select>
                          <option data-dsplay={1} selected disabled="">
                            Pilih Waktu
                          </option>
                          <option value={2}>Weekday siang</option>
                          <option value={3}>Weekday Malam</option>
                          <option value={4}>Weekend</option>
                        </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <button type="submit" className="template-btn">
                        Booking Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Appointment Section End ======--> */}

      {/* <!--====== Skill Section Start ======--> */}
      <section className="skill-section section-gap border-top-primary">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="tile-gallery-two pr-lg-3">
                <div className="image-one">
                  <img src="assets/img/tile-gallery/4.png" alt="Image" />
                </div>
                <div
                  className="image-two text-right wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <img src="assets/img/tile-gallery/5.jpg" alt="Image" />
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Appointments;
