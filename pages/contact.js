import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Contact = () => {
  return (
    <Layouts footer={2}>
      <PageBanner title={"Contact Us"} />
      {/*====== Page Title End ======*/}
      {/*====== Contact Info Section Start ======*/}
      <section className="section-gap contact-top-wrappper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="contact-info-wrapper">
                <div className="single-contact-info">
                  <div className="single-contact-info">
                    <h3 className="info-title">
                      <i className="fal fa-map-marker-alt" /> Address
                    </h3>
                    <p>
                    Jalan Dermaga Raya No.322, <br />
                      Duren Sawit, Jakarta Timur
                    </p>
                  </div>
                  <div className="single-contact-info">
                    <h3 className="info-title">
                      <i className="fal fa-coffee" /> Get In Touch
                    </h3>
                    <ul>
                      <li>
                        <span>Phone Number</span>
                        <a href="tel:+6281287716101">+62 (812) 87716101</a>
                      </li>
                      <li>
                        <span>Email Address</span>
                        <a href="mailto:sap.dicky19@gmail.com">sportiva@gmail.com</a>
                      </li>
                      <li>
                        <span>Hotline</span>
                        <a href="tel:+6281287716101">+62 (812) 87716101</a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-contact-info">
                    <h3 className="info-title">
                      <i className="fal fa-comments" /> Follow Us
                    </h3>
                    <p>
                    Rasakan sensasi bermain di sini ....
                    </p>
                    <p className="social-icon">
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter-square" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube-square" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="working-hour-chart">
                <h2 className="chart-title">Working Hour</h2>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Monday
                    </span>
                    <span>8:00-22:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Tuesday
                    </span>
                    <span>8:00-22:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Wednesday
                    </span>
                    <span>8:00-22:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Thursday
                    </span>
                    <span>8:00-22:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Friday
                    </span>
                    <span>8:00-22:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Saturday
                    </span>
                    <span>8:00-22:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Sunday
                    </span>
                    <span>8:00-22:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Contact Info Section End ======*/}
      {/*====== Contact Form Start ======*/}
      <section className="contact-form-area">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3369599630387!2d106.89931517599493!3d-6.219220060915143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
            1!3m3!1m2!1s0x2e69f35748077307%3A0x82853397b017e6f8!2sArena%20Silma!5e0!3m2!1sid!2sid!4v1688630931407!5m2!1sid!2sid"
            loading="lazy"
          />
          
          {/* https://www.google.com/maps/embed?imGXPfhHNpyPqbBN7?coh=178573&entry=tt 
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3369599630387!2d106.89931517599493!3d-6.219220060915143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
          1!3m3!1m2!1s0x2e69f35748077307%3A0x82853397b017e6f8!2sArena%20Silma!5e0!3m2!1sid!2sid!4v1688630931407!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>*/}
        </div>
        <div className="section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-heading mb-60 text-center">
                  <span className="tagline">{`We're Ready To Help You`}</span>
                  <h2 className="title">Leave a Message</h2>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="name">Your Full Name</label>
                        <input
                          type="text"
                          placeholder="Dicky Saputra"
                          id="name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          placeholder="sportiva@gmail.com"
                          id="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="number">Phone Number</label>
                        <input
                          type="text"
                          placeholder="+62 (812) 8771 6101"
                          id="number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="website">Website</label>
                        <input
                          type="url"
                          placeholder="www.sportiva.com"
                          id="website"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-field">
                        <label htmlFor="message">Write Message</label>
                        <textarea
                          id="message"
                          placeholder="Write Message...."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-center">
                        <button className="template-btn">
                          Send Us Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Contact;
