import React from "react";

const SlidePanel = ({ sidebarTrigger, setSidebarTrigger }) => {
  return (
    <div
      className={`slide-panel off-canvas-panel ${
        sidebarTrigger ? "show-panel" : ""
      }`}
    >
      <div className="panel-overlay" onClick={() => setSidebarTrigger()} />
      <div className="panel-inner">
        <div className="canvas-logo">
          <img src="assets/img/logo.png" alt="" />
        </div>
        <div className="about-us">
          <h5 className="canvas-widget-title">Tentang Kami</h5>
          <p>
          Selamat datang di situs web kami! Kami adalah tim individu yang penuh semangat dan mencintai olahraga futsal serta berkomitmen untuk memberikan pengalaman terbaik bagi pelanggan kami.
          </p>
        </div>
        <div className="contact-us">
          <h5 className="canvas-widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="far fa-map-marker-alt" />
              Jalan Dermaga Raya No.322, Duren Sawit, Jakarta Timur
            </li>
            <li>
              <i className="far fa-envelope-open" />
              <a href="mailto:sap.dicky19@gmail.com">sportiva@gmail.com</a>
              <a href="mailto:sap.dicky19@gmail.com">infosportiva@gmail.com</a>
            </li>
            <li>
              <i className="far fa-phone" />
              <a href="tel:+62 (812) 8771 6101">+62 (812) 8771 6101</a>
              <br />
              <a href="tel:+62 (812) 8771 6101">+62 (812) 8771 6101</a>
            </li>
          </ul>
        </div>
        <a href="#" className="panel-close" onClick={() => setSidebarTrigger()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default SlidePanel;
