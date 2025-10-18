import React from "react";

export default function Footer() {
  const handleConsultClick = () => {
    // prefer tel: link on mobile but keep fallback alert
    if (typeof window !== "undefined") {
      window.location.href = "tel:+998902924000";
    } else {
      alert("Konsultatsiya olish uchun: +998 90 292 40 00 ga qo‘ng‘iroq qiling!");
    }
  };

  return (
    <footer className="footer mt-5 text-lg-start">
      <div className="container d-flex justify-content-lg-between justify-content-center align-items-start flex-wrap gap-4">
        <div className="footer-logo">
          <div className="d-flex align-items-center mb-3">
            <img
              src="./img/platon variant5.png"
              alt="Platon School logo"
              style={{ height: 64, width: "auto" }}
            />
            <h2 className="ms-2 mb-0">PLATON SCHOOL</h2>
          </div>

          <button
            className="btn btn-success btn-consult"
            onClick={handleConsultClick}
            aria-label="Konsultatsiya olish - qo'ng'iroq"
            type="button"
          >
            Konsultatsiya olish
          </button>
        </div>

        <div className="footer-contact">
          <h5>Aloqa uchun</h5>
          <p>
            <a href="tel:+998902924000" className="text-decoration-none">📞 +998 90 292 40 00</a>
          </p>
          <ul className="list-unstyled">
            <li><a href="#" className="text-reset">Bosh sahifa</a></li>
            <li><a href="#" className="text-reset">Biz haqimizda</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h5>Bizni ijtimoiy tarmoqlarda kuzating</h5>
          <ul className="list-unstyled social-list">
            <li>
              <a href="#" aria-label="YouTube" className="text-reset" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube" aria-hidden="true"></i> <span className="ms-1">YouTube</span>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram" className="text-reset" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i> <span className="ms-1">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Telegram" className="text-reset" rel="noopener noreferrer">
                <i className="fa-brands fa-telegram" aria-hidden="true"></i> <span className="ms-1">Telegram</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-map">
          <div className="map-frame">
            <iframe
              title="Platon School location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1518.0562865274908!2d71.17503301446709!3d40.45064532134737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bafd000353f8a7%3A0xe941e07a617c1b72!2s%22PLATON%20SCHOOL%22%20xususiy%20maktabi!5e0!3m2!1sru!2s!4v1760699969343!5m2!1sru!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center mt-4">
        <p className="mb-1">Manzil: Farg'ona viloyati, Bag'dod tumani, Cho'rindi qishlog'i</p>
        <span className="small">Copyright © 2025 Platon School LLC. All Rights Reserved</span>
      </div>
    </footer>
  );
}