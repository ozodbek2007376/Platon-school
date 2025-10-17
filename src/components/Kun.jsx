// Kun.jsx
import React from "react";

function Kun({ title, description, programs = [], onSelect }) {
  return (
    <section className="py-5 card-img" >
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">{title}</h2>
        <p className="mb-5">{description}</p>

        <div className="row g-4">
          {programs.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card h-100 text-white p-4 d-flex flex-column justify-content-between shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #34d058, #1a7f37)",
                  borderRadius: "24px",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div className="card-body">
                  <h1>{item.level}</h1>
                  <h5 className="fw-bold">{item.grade}</h5>
                  <p>{item.text}</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <button
                    className="btn btn-light text-success fw-bold px-4 py-2"
                    style={{ borderRadius: "12px" }}
                    onClick={() => onSelect(item)}
                  >
                    Qo‘shimcha ma’lumot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Kun;
