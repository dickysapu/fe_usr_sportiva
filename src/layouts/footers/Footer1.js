import React from "react";

const Footer1 = ({ noNewsletters }) => {
  return (
    <footer
      className={`template-footer ${noNewsletters ? "" : "have-cta-boxed-one"}`}
    >
      {!noNewsletters && (
        <div className="cta-boxed-one">
          <div className="container">
            <div
              className="cta-inner bg-color-secondary bg-size-cover blend-mode-multiply"
              style={{
                backgroundImage: "url(assets/img/cta-img/ctaboxed1.jpg)",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="cta-content text-center">
                    <div className="section-heading heading-white">
                      <span className="tagline">Tanya dan Sarankan Kami Apapun</span>
                      <h2 className="title">
                        Informasi terkait lapangan, harga dan fasilitas
                      </h2>
                    </div>
                    <ul className="cta-buttons d-flex justify-content-center flex-wrap">
                      <li>
                        <a href="mailto:sap.dicky19@gmail.com" className="template-btn template-btn-white">
                          Tanya Sesuatu 
                        </a>
                      </li>
                      <li>
                        <a
                          href="/appointments"
                          className="template-btn template-btn-bordered"
                        >
                          Booking Sekarang 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="footer-inner bg-color-grey">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-5 col-md-8">
                <div className="widget text-widget">
                  <div className="footer-logo">
                    <img src="assets/img/logo_header.png" alt="Medibo" />
                  </div>
                  <p>
                  Rasakan sensasi bermain di sini ....
                  </p>
                  <ul className="contact-list">
                    <li>
                      <a href="https://goo.gl/maps/xoXSk1B5sXoE5Jvt7?coh=178573&entry=tt">
                        <i className="far fa-map-marker-alt" />
                        Jalan Dermaga Raya No.322
                      </a>
                    </li>
                    <li>
                      <a href="mailto:sap.dicky19@gmail.com">
                        <i className="far fa-envelope" />
                        sportiva@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:081287716101">
                        <i className="far fa-phone" />
                        +62 812 8771 6101
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-xl-5 col-md-6">
                    <div className="widget nav-widget">
                      <h4 className="widget-title">Favorit Kami</h4>
                      <ul className="nav-links">
                        <li>
                          <a href="#">4 Lapangan dengan 3 Tipe Berbeda</a>
                        </li>
                        <li>
                          <a href="#">Fasilitas pendukung yang nyaman</a>
                        </li>
                        <li>
                          <a href="#">Lokasi strategis</a>
                        </li>
                        <li>
                          <a href="#">Harga bersaing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-7 col-md-6">
                    <div className="widget instagram-widget">
                      <h4 className="widget-title">Photo Gallery</h4>
                      <div className="instagram-images">
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/ig1.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/ig2.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/ig_3.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/ig4.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/ig5.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/ig6.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-10">
                <div className="widget newsletters-widget">
                  <h4 className="widget-title">Newsletters</h4>
                  <p>
                    Sed ut perspiciatis unde omniste <br /> natus error sit
                    voluptatem
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="newsletters-form"
                  >
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="far fa-arrow-right" />
                    </button>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
          <div className="copyright-area">
            <p>
              © 2023 <a href="#">Sportiva</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;
