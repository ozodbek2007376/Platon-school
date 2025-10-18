import React, { useState } from 'react';
import { ContactForm } from './ContactForm';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="d-flex align-items-center text-white"
      style={{
        minHeight: "100vh",
        background: "url('./img/platon.png') no-repeat center/cover",
        paddingTop: "80px",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Chap tomondagi matn */}
          <div
            className="col-12 col-md-6 d-flex flex-column justify-content-center animate__animated animate__fadeInLeft hero-panel"
          >
            <h1 className="fw-bold display-4 hero-title">
              <span className="text-success">Jahon</span> tajribasiga <br />
              asoslangan <span className="text-success">milliy</span> ta'lim!
            </h1>

            <button
              className="btn btn-light btn-lg mt-4 fw-bold text-success shadow hero-btn"
              onClick={() => setShowModal(true)}
            >
              Ma’lumot olish
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal-backdrop d-flex"
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              aria-label="Close"
              className="modal-close"
            >
              ×
            </button>

            <div className="modal-inner">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}