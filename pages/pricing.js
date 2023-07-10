import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Pricing = () => {
  return (
    <Layouts>
      <PageBanner title={"Daftar Harga"} bgnone />
      <section className="pricing-section section-gap">
        <div className="container">
          <div className="row justify-content-center mb-40">
            <div className="col-lg-6 col-sm-10">
              <div className="section-heading text-center">
                <span className="tagline">Daftar Harga</span>
                <h2 className="title">
                  Kami memberikan kualitas terbaik dengan harga yang terjangkau ...
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center pricing-tables">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="pricing-table color-1 mt-30">
                <div className="pricing-header">
                  <div className="pricing-icon">
                    <img src="assets/img/icon/harga1.jpg" alt="Icon" />
                  </div>
                  <h3 className="pricing-title">
                    Weekday 1
                    <span className="tagline">Pagi atau Siang Hari</span>
                  </h3>
                </div>
                <div className="pricing-price">
                  <span className="currency">Rp</span>
                  <span className="price">90.000</span>
                  <span className="duration">Jam</span>
                </div>
                <div className="pricing-btn">
                  <a href="#" className="template-btn">
                    Choose Plan 
                  </a>
                </div>
                <ul className="pricing-feature">
                  <li>
                    <i className="far fa-arrow-right"></i>ket 1
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>ket 1
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>ket 1
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="pricing-table featured-table color-2 mt-30">
                <div className="pricing-header">
                  <div className="pricing-icon">
                    <img src="assets/img/icon/harga2.jpg" alt="Icon" />
                  </div>
                  <h3 className="pricing-title">
                    Weekday 2
                    <span className="tagline">Malam Hari</span>
                  </h3>
                </div>
                <div className="pricing-price">
                  <span className="currency">Rp</span>
                  <span className="price">150.000</span>
                  <span className="duration">Jam</span>
                </div>
                <div className="pricing-btn">
                  <a href="#" className="template-btn">
                    Choose Plan 
                  </a>
                </div>
                <ul className="pricing-feature">
                  <li>
                    <i className="far fa-arrow-right"></i>ket 2
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>ket 2
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>ket 2
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="pricing-table color-3 mt-30">
                <div className="pricing-header">
                  <div className="pricing-icon">
                    <img src="assets/img/icon/harga3.jpg" alt="Icon" />
                  </div>
                  <h3 className="pricing-title">
                    Weekend
                    <span className="tagline">Sabtu dan Minggu</span>
                  </h3>
                </div>
                <div className="pricing-price">
                  <span className="currency">Rp</span>
                  <span className="price">175.000</span>
                  <span className="duration">Jam</span>
                </div>
                <div className="pricing-btn">
                  <a href="#" className="template-btn">
                    Choose Plan 
                  </a>
                </div>
                <ul className="pricing-feature">
                  <li>
                    <i className="far fa-arrow-right"></i>ket 3
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>ket 3
                  </li>
                  <li>
                    <i className="far fa-arrow-right"></i>ket 3
                  </li>
                </ul>
                <span className="featured-tagline">Favorit</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Pricing Section End ======--> */}

      {/* <!--====== Appointment Section Start ======--> */}
      <section className="appointment-section">
        <div className="appointment-form-three bg-color-secondary">
          <div
            className="appointment-image"
            style={{ backgroundImage: "url(assets/img/appointment/book_4.png)" }}
          ></div>
          <div className="form-wrap">
            <div className="section-heading text-center heading-white mb-60">
              <span className="tagline">Booking Session</span>
              <h2 className="title">
              Booking sekarang untuk mendapat sensasi bermain..{" "}
              </h2>
            </div>
            <form onSubmit={(e) => e.preventDefault()} action="#">
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Your Full Name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="email" placeholder="Email Address" />
                  </div>
                </div>
                <div className="col-sm-6">
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
                <div className="col-sm-6">
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
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="date" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field">
                    <button
                      type="submit"
                      className="template-btn template-btn-primary"
                    >
                      Booking Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!--====== Appointment Section End ======--> */}

      {/* <!--====== Help Section Start ======--> */}
      <section className="help-section section-gap">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-end align-items-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="help-text-wrapper">
                <div className="section-heading mb-20">
                  <span className="tagline">Apa yang bisa kami bantu</span>
                  <h2 className="title">
                  Pengalaman Bermain yang Menyenangkan & Nyaman
                  </h2>
                </div>
                <p>
                Kami percaya futsal menjadi salah satu cara yang bagus untuk menjaga kesehatan dan tetap aktif.
                </p>
                <ul className="check-list mt-35 pr-xl-4">
                  <li>
                  Tipe lapangan yang bervariasi dan sesuai standar
                  </li>
                  <li>Fasilitas lapangan dan hal pendukung lainnya yang nyaman dan bersih</li>
                  <li>Pelayanan yang menyenangkan dan ramah untuk semua kalangan</li>
                  <li>
                  Harga yang bersaing di lokasi yang strategis
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="help-img text-center text-lg-right mt-md-50">
                <img
                  src="assets/img/section-img/help_img.jpg"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Pricing;
