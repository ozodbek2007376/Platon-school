// Kun.jsx
import React, { useState } from "react";
import { ContactForm } from "./ContactForm";

function Kun({ title, description, programs = [], onSelect }) {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (item) => {
    setSelected(item);
    setShowModal(true);
    if (onSelect) onSelect(item);
  };

  return (
    <section className="py-5 card-img">
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">{title}</h2>
        <p className="mb-5">{description}</p>

        <div className="row g-4">
          {programs.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4" key={index}>
              <div
                className="card h-100 text-white p-4 d-flex flex-column justify-content-between shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #34d058, #1a7f37)",
                  borderRadius: "24px",
                  transform: "scale(1)",
                  transition: "transform 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  if (window.innerWidth > 768) e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div className="card-body">
                  <h3 className="h4 mb-2">{item.level}</h3>
                  <h6 className="fw-bold mb-2">{item.grade}</h6>
                  <p className="mb-0">{item.text}</p>
                </div>
                <div className="card-footer bg-transparent border-0 mt-3">
                  <button
                    className="btn btn-light text-success fw-bold px-4 py-2"
                    style={{ borderRadius: "12px" }}
                    onClick={() => handleSelect(item)}
                  >
                    Qo‘shimcha ma’lumot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && selected && (
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
            padding: 20,
          }}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 720,
              background: "linear-gradient(180deg, rgba(15,23,36,0.98), rgba(10,13,20,0.95))",
              color: "#fff",
              borderRadius: 14,
              padding: 20,
              textAlign: "left",
              boxShadow: "0 10px 40px rgba(2,6,23,0.6)",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
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
                padding: 6,
              }}
            >
              ×
            </button>

            <div style={{ paddingBottom: 12 }}>
              <h4 className="fw-bold mb-2">{selected.level}</h4>
              <h6 className="mb-2">{selected.grade}</h6>
              <p className="mb-3">{selected.text}</p>
            </div>

            <div style={{ background: "transparent", padding: 8 }}>
              <ContactForm prefill={{ subject: selected.level }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Kun;
