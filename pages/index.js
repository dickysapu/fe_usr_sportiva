import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layouts from "../src/layouts/Layouts";
import { testimonialOne } from "../src/sliderProps";

const Index = () => {
  return (
    <Layouts position={"absolute"}>
      <>
        {/*====== Hero Area Start ======*/}
        <section className="hero-area-one">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-8">
                <div className="hero-content">
                  <h1 className="title wow fadeInDown" data-wow-delay="0.3s">
                    Ayo Futsal di Sportiva
                  </h1>
                  <p className="wow fadeInLeft" data-wow-delay="0.4s">
                    Salurkan hobi kalian disini. Fun games dan habiskan waktu kalian 
                    bersama teman - teman.... 
                  </p>
                  <Link href="/service">
                    <a
                      className="template-btn wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      Booking sekarang
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img wow fadeInUp" data-wow-delay="0.3s">
                  <img src="assets/img/hero-img/hero_home.jpg" alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Hero Area End ======*/}
        {/*====== Why Choose Section Start ======*/}
        <section className="wcu-section section-gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="section-heading heading-white text-center mb-40">
                  <span className="tagline">Kenapa harus bermain di Sportiva !!!</span>
                  <h2 className="title">
                    Jenis lapangan yang bervariasi, fasilitas kami akan membuat anda nyaman.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Tentukan tipe lapangan yang anda suka</a>
                    </Link>
                  </h4>
                  <div className="image">
                    <img src="assets/img/img-title-box/title01.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Pastikan anda merasa nyaman</a>
                    </Link>
                  </h4>
                  <div className="image">
                    <img src="assets/img/img-title-box/title02.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Pelayanan akan selalu kami tingkatkan</a>
                    </Link>
                  </h4>
                  <div className="image">
                    <img src="assets/img/img-title-box/title033.jpg" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Why Choose Section End ======*/}
        {/*====== About Section Start ======*/}
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
                        className="single-img wow fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        <img
                          className="animate-float-bob-y"
                          src="assets/img/circle-image-gallery/300_2.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        className="single-img wow fadeInRight"
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
                    <span className="tagline">Tentang Sportiva</span>
                    <h2 className="title">
                      Rasakan pengalaman bermain futsal yang berbeda..
                    </h2>
                    <p>Futsal Arena yang modern dan akan selalu berkembang.</p>
                  </div>
                  <p>
                  Selamat datang di situs web kami! Kami adalah tim individu 
                  yang penuh semangat dan mencintai olahraga futsal serta 
                  berkomitmen untuk memberikan pengalaman terbaik bagi 
                  pelanggan kami. Misi kami adalah membuat mudah bagi siapa 
                  saja untuk memesan lapangan futsal secara online, dengan 
                  gateway pembayaran yang lancar dan aman. 
                  </p>
                  <Link href="/about">
                    <a className="template-btn mt-40">
                      Lebih lanjut  
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== About Section End ======*/}
        {/*====== Big Tagline Start ======*/}
        <section className="big-tagline">
          <div className="container-fluid">
            <h2 className="tagline">
            Ini bukan hanya sekedar permainan, tetapi sebuah passion yang
            mempertemukan orang-orang, menjaga Anda tetap bugar, dan 
            memberikan senyuman di wajah Anda. Bergabunglah dengan kami 
            dan rasakan sensasi dari permainan ini!
            </h2>
          </div>
        </section>
        
        {/*====== Testimonials Section Start ======*/}
        <section className="testimonial-section bg-color-grey section-have-half-bg">
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="testimonial-one-wrap">
                  <div className="section-heading mb-50">
                    <span className="tagline">Testimoni </span>
                    <h2 className="title">
                      Hal yang pengunjung rasakan tentang Sportiva
                    </h2>
                  </div>
                  <Slider
                    {...testimonialOne}
                    className="testimonial-slider-one"
                  >
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/testi1.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                          Saya sudah beberapa kali bermain futsal di berbagai 
                          tempat, tetapi pengalaman bermain di Sportiva arena 
                          sangat berbeda. Lapangan yang luas, bola yang selalu 
                          dalam kondisi baik, serta suasana yang menyenangkan 
                          membuat saya selalu ingin kembali ke sini.
                          </p>
                          <div className="author-info">
                            <h5 className="name">Naufal Ghana</h5>
                            <span className="title">Mahasiswa</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/testi1.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                          Saya sangat senang bermain futsal di Sportiva 
                          arena karena lapangan yang bersih dan fasilitasnya 
                          lengkap. Selain itu, staf yang ramah dan profesional 
                          membuat pengalaman bermain saya menjadi lebih menyenangkan.
                          </p>
                          <div className="author-info">
                            <h5 className="name">Arya Sena</h5>
                            <span className="title">Pelajar</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/testi1.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                          Pengalaman saya bermain futsal di Sportiva 
                          Arena sangat menyenangkan. Selain lapangan 
                          yang luas dan nyaman, stafnya juga sangat 
                          ramah dan membantu.
                          </p>
                          <div className="author-info">
                            <h5 className="name">Bimo</h5>
                            <span className="title">Pelajar</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/testi1.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                          Bagi saya, Sportiva Arena adalah tempat yang tepat 
                          untuk bermain futsal. Lapangan yang luas, fasilitas 
                          yang lengkap, serta lingkungan yang aman dan nyaman.
                          </p>
                          <div className="author-info">
                            <h5 className="name">Gure Qauli</h5>
                            <span className="title">Mahasiswa</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-half-bg"
            style={{
              backgroundImage: "url(assets/img/section-bg/sectionbg01.jpg)",
            }}
          />
        </section>
        {/*====== Testimonials Section End ======*/}
        
      </>
    </Layouts>
  );
};
export default Index;
