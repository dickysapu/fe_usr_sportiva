import React, { useState } from 'react';
import PageBanner from '../src/components/PageBanner';
import Layouts from '../src/layouts/Layouts';
import axios from 'axios';
import { useRouter } from 'next/router'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [noTelp, setNoTelp] = useState('');
  const [isiPesan, setIsiPesan] = useState('');
  
  const router = useRouter();

  const simpanPesan = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/pesan', {
      name: name,
      email: email,
      noTelp: noTelp,
      isiPesan: isiPesan,
    });
    toast.success('Pesan berhasil dikirim.');
    setName(''); // Reset form values
    setEmail('');
    setNoTelp('');
    setIsiPesan('');
    router.push('/contact');
  };

  return (
    <Layouts footer={2}>
      <PageBanner title="Contact Us" />

      {/* Contact Info Section */}
      <section className="section-gap contact-info-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-10">
              <div className="contact-info-wrapper">
                <div className="single-contact-info">
                  <h3 className="info-title">
                    <i className="fal fa-map-marker-alt" /> Alamat
                  </h3>
                  <p>
                    Jalan Dermaga Raya No.322,
                    <br />
                    Duren Sawit, Jakarta Timur
                  </p>
                </div>
                <div className="single-contact-info">
                  <h3 className="info-title">
                    <i className="fal fa-coffee" /> Hubungi Kami
                  </h3>
                  <ul>
                    <li>
                      <span>Phone Number</span>
                      <a href="tel:+6281287716101">+62 (812) 87716101</a>
                    </li>
                    <li>
                      <span>Email Address</span>
                      <a href="mailto:sportiva@gmail.com">sportiva@gmail.com</a>
                    </li>
                    <li>
                      <span>Hotline</span>
                      <a href="tel:+6281287716101">+62 (812) 87716101</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>      
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-gap contact-form-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-heading text-center">
                <span className="tagline">Kami Siap Membantu Anda</span>
                <h2 className="title">Tinggalkan Pesan</h2>
              </div>
              <form onSubmit={simpanPesan} className="contact-form">
                <div className="row">
                  <div className="col-md-12">
                  <div className="input-field">
                        <label htmlFor="name">Nama</label>
                        <input
                          type="text"
                          placeholder="Name"
                          value={name} 
                          onChange={(e) => setName(e.target.value)}
                          id="name"
                          required
                        />
                      </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          placeholder="email"
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          required
                        />
                      </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-field">
                        <label htmlFor="number">No Telepon</label>
                        <input
                          type="text"
                          placeholder="no Telp"
                          value={noTelp} 
                          onChange={(e) => setNoTelp(e.target.value)}
                          id="number"
                          pattern="[0-9]*"  
                          inputMode="numeric"
                          required
                        />
                      </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-field">
                        <label htmlFor="message">Pesan</label>
                        <textarea
                          id="message"
                          placeholder="Isi Pesan...."
                          value={isiPesan} 
                          onChange={(e) => setIsiPesan(e.target.value)}
                          defaultValue={""}
                        />
                      </div>
                  </div>
                  <div className="col-12">
                    <div className="text-center">
                        <button className="template-btn">
                          Kirim Pesan
                        </button>
                      </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer /> 
    </Layouts>
  );
};

export default Contact;
