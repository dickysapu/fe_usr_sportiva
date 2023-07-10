import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layouts from "../src/layouts/Layouts";

const Faq = () => {
  const [active, setActive] = useState("collapse1");
  const active_ = (value) => (value === active ? "active-accordion" : "");
  const [video, setVideo] = useState(false);
  return (
    <Layouts>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner title={"Help & FAQ"} bgnone />
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="faq-page-content pr-xl-4">
                <h3 className="faq-title">Frequently Asked Questions</h3>
                <p className="mb-35">
                Selamat datang di FAQ untuk pemesanan lapangan futsal menggunakan website! 
                Berikut ini adalah beberapa pertanyaan umum yang mungkin Anda miliki beserta jawabannya:
                </p>
                <Accordion
                  defaultActiveKey="collapse1"
                  className="accordion"
                  id="accordionFaq"
                >
                  <div className={`accordion-item ${active_("1")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse1"
                        onClick={() => setActive("1")}
                        data-toggle="collapse"
                      >
                        <span>
                        Bagaimana cara memesan lapangan futsal melalui website?
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse1">
                      <div className="accordion-content">
                        <p>
                        Berikut adalah langkah-langkah umum untuk memesan lapangan futsal melalui website: 
                        Pertama, buka website penyedia layanan pemesanan lapangan futsal yang Anda pilih. 
                        Kemudian, pilih lokasi atau kota di mana Anda ingin bermain futsal dan tentukan 
                        tanggal serta waktu yang Anda inginkan. Setelah itu, pilih lapangan futsal yang 
                        tersedia pada waktu yang Anda pilih dan isi informasi kontak Anda. Terakhir, lakukan 
                        pembayaran untuk mengkonfirmasi pemesanan Anda. Setelah langkah-langkah tersebut 
                        selesai, Anda akan menerima konfirmasi pemesanan melalui email atau pesan teks yang 
                        berisi rincian pemesanan lapangan futsal Anda.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("2")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse2"
                        onClick={() => setActive("2")}
                        data-toggle="collapse"
                      >
                        <span>Apa metode pembayaran yang tersedia?</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse2">
                      <div className="accordion-content">
                        <p>
                        Metode pembayaran yang tersedia mungkin beragam tergantung pada platform yang Anda gunakan. 
                        Biasanya, Anda dapat membayar melalui kartu kredit/debit, transfer bank, atau menggunakan 
                        sistem pembayaran online seperti PayPal atau GoPay.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("3")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse3"
                        onClick={() => setActive("3")}
                        data-toggle="collapse"
                      >
                        <span>
                        Bagaimana jika saya perlu membatalkan atau mengubah reservasi?
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse3">
                      <div className="accordion-content">
                        <p>
                        Kebijakan pembatalan atau perubahan reservasi dapat bervariasi tergantung pada kebijakan 
                        penyedia layanan. Sebaiknya Anda membaca syarat dan ketentuan yang tercantum di situs web 
                        atau menghubungi tim dukungan pelanggan untuk informasi lebih lanjut.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("4")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse4"
                        onClick={() => setActive("4")}
                        data-toggle="collapse"
                      >
                        <span>
                        Apakah saya perlu membuat akun untuk memesan lapangan futsal?
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse4">
                      <div className="accordion-content">
                        <p>
                        Biasanya, sebagian besar platform pemesanan lapangan futsal memungkinkan Anda memesan tanpa harus membuat akun.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("5")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse5"
                        onClick={() => setActive("5")}
                        data-toggle="collapse"
                      >
                        <span>
                        Apakah saya akan menerima konfirmasi setelah melakukan pemesanan?
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse5">
                      <div className="accordion-content">
                        <p>
                        Ya, setelah Anda melakukan pemesanan lapangan futsal melalui website, Anda akan menerima konfirmasi melalui 
                        email atau pesan teks yang berisi rincian pemesanan Anda, termasuk tanggal, waktu, dan informasi kontak 
                        penyedia lapangan futsal.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("6")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse6"
                        onClick={() => setActive("6")}
                        data-toggle="collapse"
                      >
                        <span>
                        Bagaimana jika ada masalah dengan pemesanan saya?
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse6">
                      <div className="accordion-content">
                        <p>
                        ika Anda menghadapi masalah dengan pemesanan lapangan futsal, segera hubungi tim dukungan pelanggan 
                        dari platform atau penyedia layanan. Mereka akan membantu Anda menyelesaikan masalah dan memberikan 
                        bantuan yang diperlukan.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("7")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse7"
                        onClick={() => setActive("7")}
                        data-toggle="collapse"
                      >
                        <span>Apakah ada kebijakan pengembalian uang jika lapangan futsal tidak tersedia?</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse7">
                      <div className="accordion-content">
                        <p>
                        Kebijakan pengembalian uang dapat berbeda-beda tergantung pada penyedia layanan. Pastikan untuk 
                        membaca kebijakan pengembalian uang yang tercantum di situs web atau menghubungi tim dukungan 
                        pelanggan untuk mendapatkan informasi lebih lanjut tentang hal ini.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                </Accordion>
              </div>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="faq-sidebar">
                <div className="search-widget mb-50">
                  <h3 className="search-title">Frequently Asked Questions</h3>
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input type="search" placeholder="Search Here" />
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="video-widget">
                  <img src="assets/img/section-img/faq_video.jpg" alt="Image" />

                  <a
                    href="https://youtu.be/MPwe-8PCS0c"
                    className="video-popup"
                    onClick={(e) => {
                      e.preventDefault();
                      setVideo(true);
                    }}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Faq;
