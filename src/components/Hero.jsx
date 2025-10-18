import React, { useState } from 'react';
import { ContactForm } from './ContactForm';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="d-flex align-items-center text-white"
      style={{
        minHeight: "100vh",
        background: "url('./img/platon.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "80px",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Chap tomondagi matn */}
          <div
            className="col-md-6 d-flex flex-column justify-content-center animate__animated animate__fadeInLeft"
            style={{
              background: "rgba(15, 23, 42, 0.65)",
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
              borderRadius: "18px",
              padding: "40px 32px",
              backdropFilter: "blur(4px)",
            }}
          >
            <h1 className="fw-bold display-4">
              <span className="text-success">Jahon</span> tajribasiga <br />
              asoslangan <span className="text-success">milliy</span> ta'lim!
            </h1>

            <button
              className="btn btn-light btn-lg mt-4 fw-bold text-success shadow"
              style={{ borderRadius: "12px", transition: "all 0.3s ease" }}
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
          className="modal-backdrop"
          onClick={() => setShowModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: 720,
              // background: '#0f1724',
              color: '#fff',
              borderRadius: 14,
              padding: 20,
              textAlign: 'center',
              // boxShadow: '0 10px 40px rgba(2,6,23,0.6)'
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              aria-label="Close"
              style={{
                position: 'absolute',
                right: 18,
                top: 18,
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: 20,
                cursor: 'pointer'
              }}
            >
              ×
            </button>

            {/* ContactForm komponentini modal ichida ko'rsatish */}
            <div style={{ background: 'transparent', padding: 8 }}>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}