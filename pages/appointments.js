import React, { useState, useEffect } from 'react';
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import axios from 'axios';
import { useRouter } from 'next/router';

const Appointments = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductHarga, setSelectedProductHarga] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [noTelp, setNoTelp] = useState('');
  const [lapangan, setLapangan] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [totalHarga, setTotalHarga] = useState('');
  const [orderId, setOrderId] = useState('');
  const [metodePembayaran, setMetodePembayaran] = useState('');
  const [status, setStatus] = useState('');
  const tanggalPesananDibuat = new Date().toISOString();
  const router = useRouter();

  const handleProductChange = (event) => {
    const selectedHarga = event.target.value;
    setSelectedProductHarga(selectedHarga);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/product');
      setProducts(response.data);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  const simpanOrder = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/order', {
      name: name,
      email: email,
      noTelp: noTelp,
      lapangan: lapangan,
      tanggal: tanggal,
      totalHarga: totalHarga,
      tanggal_pesanan_dibuat:tanggalPesananDibuat,
      orderId: "",
      metodePembayaran: "",
      status: ""
    });
    router.push('/appointments');
  };

  return (
    <Layouts footer={2}>
      <PageBanner title={"Sesi Booking"} />
      <section className="appointment-section section-gap">
        <div className="container container-1500">
          <div className="appointment-form-two style-two">
            <div
              className="appointment-image"
              style={{ backgroundImage: "url(assets/img/appointment/book_33.png)" }}
            ></div>
            <div className="form-wrap">
              <div className="section-heading mb-50">
                <span className="tagline">Sesi Booking</span>
                <h2 className="title">Booking sekarang untuk mendapat sensasi bermain..</h2>
              </div>
              <form onSubmit={simpanOrder} className="contact-form">
                <div>
                  <label>Nama:</label>
                  <input type="text" name="nama" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <label>Email:</label>
                  <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label>No. Telepon:</label>
                  <input type="tel" name="notelp" value={noTelp} onChange={(e) => setNoTelp(e.target.value)} />
                </div>
                <div>
                  <label>Tanggal:</label>
                  <input
                    type="datetime-local"
                    min="T10:00"
                    max="T22:00"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                  />
                </div>
                
                <div>
                  <label>Total Harga:</label>
                  <input
                    type="text"
                    id="harga"
                    placeholder="000000"
                    value={selectedProductHarga}
                    onChange={(e) => setSelectedProductHarga(e.target.value)}
                  />
                </div>
                <br />
                <button type="submit" className="template-btn">
                  Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Appointment Section End ======--> */}

    </Layouts>
  );
};

export default Appointments;
