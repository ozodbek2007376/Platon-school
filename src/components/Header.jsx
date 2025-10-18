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
              style={{ height: "64px" }}
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
    </>
  );
}
