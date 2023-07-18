import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const About = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <Layouts footer={2}>
      <PageBanner title={"About"} />
      <section className="about-section section-gap">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="circle-image-gallery mb-md-50">
                <div className="row">
                  <div className="col-6 gallery-left">
                    <div
                      className="single-img wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/logo270.png"
                        alt=""
                      />
                    </div>
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/300_1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6 gallery-right">
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      <img
                        className="animate-float-bob-y"
                        src="assets/img/circle-image-gallery/300_2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className="single-img wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/logo270.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="about-text">
                <div className="section-heading mb-35">
                  <span className="tagline">About Sportiva</span>
                  <h2 className="title">Futsal Arena yang modern dan akan selalu berkembang.</h2>

                  <p>Kami percaya futsal menjadi salah satu cara yang bagus untuk menjaga kesehatan dan tetap aktif.</p>
                </div>
                <p>
                  Selamat datang di situs web kami! Kami adalah tim individu 
                  yang penuh semangat dan mencintai olahraga futsal serta 
                  berkomitmen untuk memberikan pengalaman terbaik bagi 
                  pelanggan kami. Misi kami adalah membuat mudah bagi siapa 
                  saja untuk memesan lapangan futsal secara online, dengan 
                  gateway pembayaran yang lancar dan aman. Kami memahami 
                  pentingnya menjaga kesehatan dan tetap aktif, dan kami 
                  percaya bahwa futsal adalah cara yang bagus untuk mencapainya. 
                  Lapangan kami selalu terjaga dengan baik dan fasilitas kami 
                  terbaik, sehingga Anda dapat merasakan pengalaman bermain 
                  yang menyenangkan dan nyaman. Terima kasih telah memilih 
                  kami untuk kebutuhan futsal Anda, dan kami berharap dapat 
                  bertemu dengan Anda di lapangan!
                </p>
                <Link href="/service">
                  <a className="template-btn mt-40">
                    Lihat Lapangan 
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== About Section End ======--> */}

      

      {/* <!--====== FAQ Section Start ======--> */}
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="faq-image text-center text-lg-left mb-md-50">
                <img src="assets/img/section-img/faq_img1.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-9 col-sm-11">
              <div className="faq-content pl-xl-5">
                <div className="section-heading mb-30">
                  <span className="tagline">Apa yang bisa kami bantu</span>
                  <h2 className="title">
                  Pengalaman Bermain yang Menyenangkan & Nyaman
                  </h2>
                </div>
                <p>
                Kami percaya futsal menjadi salah satu cara yang bagus untuk menjaga kesehatan dan tetap aktif.
                </p>
                <Accordion
                  defaultActiveKey="collapseOne"
                  className="accordion-style-two mt-30"
                >
                  <div
                    className={
                      toggle === 1
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseOne"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 1 ? 0 : 1)}
                      >
                        <span>Tipe lapangan yang bervariasi dan sesuai standar</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseOne">
                      <div className="accordion-content">
                        <p>
                        Fasilitas lapangan dan hal pendukung lainnya yang nyaman dan bersih
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div
                    className={
                      toggle === 2
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseTwo"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 2 ? 0 : 2)}
                      >
                        <span>Pelayanan yang menyenangkan dan ramah untuk semua kalangan</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseTwo">
                      <div className="accordion-content">
                        <p>
                        Harga yang bersaing di lokasi yang strategis
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default About;
