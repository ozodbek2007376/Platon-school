import React from "react";

export default function Footer() {
  const handleConsultClick = () => {
    alert("Konsultatsiya olish uchun: +998 90 292 40 00 ga qo‘ng‘iroq qiling!");
  };

  return (
    <footer className="footer mt-5 text-lg-start text-center">
      <div className="container   d-flex justify-content-lg-between justify-content-center align-items-start flex-wrap">
        <div className="footer-logo">
  <div className="d-flex align-items-center mb-3"> 
  <img src="./img/platon variant5.png" alt="" />
          <h2>PLATON SCHOOL</h2>
</div>
          <button className="btn-consult" onClick={handleConsultClick}>
            Konsultatsiya olish
          </button>
        </div>

        <div className="footer-contact">
          <h5>Aloqa uchun</h5>
          <p>📞 +998 90 292 40 00</p>
          <ul>
            <li>
              <a href="#">Bosh sahifa</a>
            </li>
            <li>
              <a href="#">Biz haqimizda</a>
            </li>
       
          </ul>
        </div>

        <div className="footer-social">
          <h5>Bizni ijtimoiy tarmoqlarda kuzating</h5>
          <ul>
            <li>
              <i class="fa-brands fa-youtube"></i> YouTube
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i> Instagram
            </li>
            <li>
              <i class="fa-brands fa-telegram"></i> Telegram
            </li>
          </ul>
        </div>

        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1518.0562865274908!2d71.17503301446709!3d40.45064532134737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bafd000353f8a7%3A0xe941e07a617c1b72!2s%22PLATON%20SCHOOL%22%20xususiy%20maktabi!5e0!3m2!1sru!2s!4v1760699969343!5m2!1sru!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Manzil: Farg'ona viloyati, Bag'dod tumani, Cho'rindi qishlog'i</p>
        <span>Copyright © 2025 Platon School LLC. All Rights Reserved</span>
      </div>
    </footer>
  );
}