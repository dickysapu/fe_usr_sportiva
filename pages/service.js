import React, { useState, useEffect} from 'react'
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import axios from 'axios';
import { useRouter } from 'next/router'; 
import { Alert } from 'react-bootstrap';

const Service = () => {
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBox, setSelectedBox] = useState(null);



  const getProducts =async() =>  {
    const products =await axios.get('http://localhost:8080/product');
    setProducts(products.data);
  }  
  useEffect(() =>{
    getProducts();
  },[]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.async = true;
    script.setAttribute("data-client-key", "SB-Mid-client-oHoeebXgIOjpVvgF");
    document.body.appendChild(script);
  }, []);

  const handleProductChange = (product) => {
    setSelectedProduct(product);
    setSelectedProductHarga(product.harga);

  };

  const handleChange = async (e) => {
    const inputDate = e.target.value;
    const modifiedDate = inputDate.substring(0, 14) + '00' + inputDate.substring(16);
    setTanggal(modifiedDate);

    const selectedTime = new Date(modifiedDate).getHours();
  if (selectedTime < 10 || selectedTime >= 22) {
    alert('Please select a time between 10 AM and 10 PM.');
  }

  };
  
  

  const simpanOrder = async (e) => {
    e.preventDefault();
    
    const payload = {
      name: name,
      email: email,
      noTelp: noTelp,
      lapangan: selectedProduct ? selectedProduct.name : '',
      tanggal: tanggal,
      totalHarga: selectedProductHarga,
      tanggal_pesanan_dibuat: tanggalPesananDibuat,
      orderId: "",
      metodePembayaran: "",
      status: ""
    };
  
    try {
      const response = await fetch('http://localhost:8080/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      const { token } = await response.json();
        window.snap.pay(token, {
          onSuccess: function (result) {
            window.location.reload();
          },
          onPending: function (result) {
            router.push('/service');
          },
          onError: function (result) {
            window.location.reload();
          },
          onClose: function () {
            window.location.reload();
            
          },
        });
      } catch (error) {
        console.error('Error during payment:', error);
      }

  };
  
  
  return (
    <Layouts footer={2}>
      <PageBanner title={"Tipe Lapangan"} pageName="Lapangan" />
      <section className="services-area section-gap-top-less bg-color-grey">
        <div className="container">
        <div class="row justify-content-center service-loop">
        {products.map((product, index) => (
        <div class="col-lg-4 col-md-6 col-sm-8" key={product.id}  
        onClick={() => {
          handleProductChange(product);
          setSelectedBox(index);
        }}
        style={selectedBox === index ? { backgroundColor: '#6e88a4' } : null}
        >
          <div class="fancy-content-box-two no-shadow mt-30">
            <div class="thumbnail">
              <img src="assets/img/iconic-box/lap1.jpg" alt="Image" />
            </div>
            <div class="box-content">
              <div class="icon">
              <img src={`http://localhost:8080/uploads/${product.gambar}`} alt="Gambar Produk" />
              </div>
              <div class="content">
                <h4 class="title">
                {index + 1}. {product.name}
                </h4>
                <p>harga : {product.harga} <br/> {product.keterangan}</p>
              </div>
            </div>
          </div>
        </div>
         ))}
      </div>
        </div>

      </section>
      {/* <!--====== Service Area End ======--> */}

      <section className="section-gap contact-form-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-heading text-center">
                <span className="tagline">Sesi Booking</span>
                <h2 className="title">Pilih lapangan diatas</h2>
              </div>
              <form onSubmit={simpanOrder} className="contact-form">
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
                  <label>Tanggal</label>
                  <input
                      type="datetime-local"
                      min="T10:00"
                      max="T22:00"
                      value={tanggal}
                      onChange={(e) => setTanggal(e.target.value)}
                    />
                    {tanggal !== '' && (
                      <Alert variant="danger">Pilih waktu antara 10 AM dan 10 PM. <br/> Menit harus diatur menjadi 00!</Alert>
                    )}
                  </div>
                  <div className="col-md-12">
                  <div className="input-field">
                        <label htmlFor="name">Lapangan</label>
                        <input
                          type="text"
                          placeholder="Name"
                          value={selectedProduct ? selectedProduct.name : ''}
                          onChange={(e) => setLapangan(e.target.value)}
                          id="name"
                          required
                          readOnly={true}
                        />
                      </div>
                  </div>
                  <div>
                  <label>Total Harga</label>
                  <input
                    type="text"
                    id="harga"
                    placeholder="000000"
                    value={selectedProductHarga}
                    onChange={(e) => setSelectedProductHarga(e.target.value)}
                    readOnly={true}
                  />
                </div>
                <br/>
                  <div className="col-12">
                    <div className="text-center">
                        <button className="template-btn">
                          Booking
                        </button>
                      </div>
                  </div>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </Layouts>
  );
};
export default Service;
