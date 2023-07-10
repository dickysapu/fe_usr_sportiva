import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import ChooseDoctor from "../src/components/select/ChooseDoctor";
import ServicesCategory from "../src/components/select/ServicesCategory";
import Layouts from "../src/layouts/Layouts";

const Service = () => {
  return (
    <Layouts footer={2}>
      <PageBanner title={"Tipe Lapangan"} pageName="Lapangan" />
      <section className="services-area section-gap-top-less bg-color-grey">
        <div className="container">
          <div className="row justify-content-center service-loop">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/lap1.jpg" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/icon1.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Lapangan 1</a>
                      </Link>
                    </h4>
                    <p>Amet consect ascnge eiusmod tempors</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/lap2.jpg" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/icon1.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Lapangan 2</a>
                      </Link>
                    </h4>
                    <p>Quis autem reprehe nderit voluptate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/lap3.jpg" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/icon1.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Lapangan 3</a>
                      </Link>
                    </h4>
                    <p>Amet consect ascnge eiusmod tempors</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/lap4.jpg" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/icon1.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Lapangan 4</a>
                      </Link>
                    </h4>
                    <p>Quis autem reprehe nderit voluptate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/coming.png" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/icon1.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Coming Soon</a>
                      </Link>
                    </h4>
                    <p>Quis autem reprehe nderit voluptate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-content-box-two no-shadow mt-30">
                <div className="thumbnail">
                  <img src="assets/img/iconic-box/coming.png" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="icon">
                    <img src="assets/img/icon/icon1.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Coming Soon</a>
                      </Link>
                    </h4>
                    <p>Quis autem reprehe nderit voluptate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Service Area End ======--> */}

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

      {/* <!--====== Feature Section Start ======--> */}
      <section className="feature-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-6 order-lg-last">
              <div className="feature-img text-center text-lg-right">
                <img src="assets/img/section-img/help_img.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="feature-text mt-md-50">
                <div className="section-heading mb-30">
                  <span className="tagline">Apa yang bisa kami bantu</span>
                  <h2 className="title">
                  Pengalaman Bermain yang Menyenangkan &amp; Nyaman
                  </h2>
                </div>
                <p>
                 Kami percaya futsal menjadi salah satu cara yang bagus 
                    untuk menjaga kesehatan dan tetap aktif.
                </p>
                <div className="row">
                  <div className="col-lg-5 col-sm-6">
                    <div
                      className="simple-icon mt-40 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="icon">
                        <i className="flaticon-points"></i>
                      </div>
                      <h4 className="title">Tipe lapangan yang bervariasi dan sesuai standar</h4>
                      <p>Fasilitas lapangan dan hal pendukung lainnya yang nyaman dan bersih</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div
                      className="simple-icon mt-40 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon">
                        <i className="flaticon-points"></i>
                      </div>
                      <h4 className="title"> Pelayanan yang menyenangkan dan ramah untuk semua kalangan</h4>
                      <p>Harga yang bersaing di lokasi yang strategis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Service;
