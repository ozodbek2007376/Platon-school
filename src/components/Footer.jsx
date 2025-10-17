import React, { useState } from 'react';
import { ContactForm } from './ContactForm';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="footer-section py-5 text-white">
        <div className="container">
          <div className="row gy-4 align-items-start">

            {/* Logo va tugma */}               
            <div className="col-md-4 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                <img
                  src="/img/platon variant5.png"
                  alt="Logo"
                  className="me-3"
                />
                <h4 className="fw-bold mb-0">PLATON SCHOOL</h4>
              </div>
              <button
                type="button"
                className="btn btn-light text-success fw-semibold px-4 py-2 rounded-3"
                onClick={() => setShowModal(true)}
              >
                Konsultatsiya olish
              </button>
            </div>

            {/* Aloqa uchun */}
            <div className="col-md-4 text-center text-md-start">
              <h5 className="fw-bold mb-3">Aloqa uchun</h5>
              <p className="mb-1">
                <i className="bi bi-telephone me-2"></i>+998 90 292 40 00
              </p>
              <p className="mb-0">
                <strong>Manzil:</strong> Farg'ona viloyati, Bag'dod tumani, Cho'rindi
                qishlog'i
              </p>
              <p className="mb-0">
                <strong>Mo‘ljal:</strong> Ibin Sina nomidagi tibbiyot klinikasi yonida
              </p>
            </div>

            {/* Ijtimoiy tarmoqlar */}
            <div className="col-md-4 text-center text-md-start">
              <h5 className="fw-bold mb-3">Bizni ijtimoiy tarmoqlarda kuzating</h5>
              <ul className="list-unstyled small">
                <li>
                  <i className="bi bi-youtube me-2"></i> <a href="https://www.youtube.com/" className="text-white text-decoration-none">YouTube</a>
                </li>
                <li>
                  <i className="bi bi-instagram me-2"></i> <a href="https://www.instagram.com/" className="text-white text-decoration-none">Instagram</a>
                </li>
                <li>
                  <i className="bi bi-telegram me-2"></i> <span className="text-white">Telegram</span>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-light my-4" />

          <div className="text-center small">
            Copyright © 2025 PLATON School LLC. All Rights Reserved
          </div>
        </div>
      </footer>

      {/* Modal for ContactForm */}
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
              boxShadow: '0 10px 40px rgba(2,6,23,0.6)'
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

            <div style={{ background: 'transparent', padding: 8 }}>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

