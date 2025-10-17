import React, { useState } from "react";
import { ContactForm } from "./ContactForm";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-success" href="#">
            <img
              className="img-fluid img me-2"
              src="./img/platon variant5.png"
              alt=""
              style={{ height: "80px" }}
            />
            PLATON SCHOOL
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Asosiy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="tel:+998902924000">
                  +998 90 292 40 00
                </a>
              </li>
              <li className="nav-item">
                {/* Savollar bo‘limiga smooth scroll */}
                <a className="nav-link active" href="#savollar">
                  Savollar
                </a>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-success ms-2"
                  onClick={() => setShowModal(true)}
                >
                  Bog‘lanish
                </button>
              </li>

              {/* Til tugmalari */}
              <li className="nav-item ms-3">
                <div className="btn-group">
                  <button className="btn btn-sm btn-outline-light">UZ</button>
                  <button className="btn btn-sm btn-outline-light">RU</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {showModal && (
        <div
          className="modal-backdrop"
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 720,
              // background: "#0f1724",
              color: "#fff",
              borderRadius: 14,
              padding: 20,
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(2,6,23,0.6)",
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              aria-label="Close"
              style={{
                position: "absolute",
                right: 18,
                top: 18,
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: 20,
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <div style={{ background: "transparent", padding: 8 }}>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
