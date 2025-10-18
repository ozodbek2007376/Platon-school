import React, { useState } from "react";
import { ContactForm } from "./ContactForm";
import { Card } from "./Card";

function Card1() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 display-3 text-success fw-bold">
        Bizning jamoa<br />
        <span className="fs-2 fw-normal text-white">
          Farzandingizga sifatli ta'lim berish uchun biz eng yaxshi mutaxassislardan iborat jamoa tuzishga kirishdik
        </span>
      </h1>

      {/* changed: added team-grid class for responsive CSS */}
      <div className="team-grid d-flex flex-wrap gap-5 justify-content-evenly">

        <Card
          image="./img/photo_2025-08-25_10-55-19.jpg"
          name="Yigitaliyev Yo‘ldashali Usmonaliyevich"
          subtitle={<span className="subject-badge">Fan: Filologiya</span>}
          description={
            <>
              <div>FDU Filologiya yo'nalishi, bakalavr</div>
              <div>Toifa: Oliy</div>
              <div>20 yilga yaqin tajriba</div>
              <div>Milliy sertifikat: A+</div>
            </>
          }
        />

        <Card
          image="./img/IMG_6622.JPG"
          name="Obidov Jasurbek Sharofiddin o'g'li"
          subtitle={<span className="subject-badge">Fan: Ingliz tili</span>}
          description={
            <>
              <div>Oliy ma'lumot (Farg'ona davlat universiteti, bakalavr)</div>
              <div>Toifa: Oliy</div>
              <div>C1 / IELTS 6</div>
              <div>9 yil tajriba</div>
            </>
          }
        />

        <Card
          image="./img/IMG_6624.JPG"
          name="Isroilov Ozodbek Saydullajon o'g'li"
          subtitle={<span className="subject-badge">Fan: Tarix</span>}
          description={
            <>
              <div>6 yillik staj</div>
              <div>Bitirgan joyi: Bakalavr QDPI, Magistr Fardu</div>
              <div>Milliy sertifikat: A+</div>
            </>
          }
        />

        <Card
          image="./img/IMG_6625.JPG"
          name="Islombek Roʻziboyev Abdurashid oʻgʻli"
          subtitle={<span className="subject-badge">Fan: Biologiya</span>}
          description={
            <>
              <div>7 yil ish tajribasi</div>
              <div>Bitirgan joy: FarDU Bakalavr, FarDU Magistratura</div>
              <div>Toifa: Oliy</div>
              <div>Milliy sertifikat: A+</div>
            </>
          }
        />

        <Card
          image="./img/IMG_6624.JPG"
          name="Abdulhayev Dilmuhammad Shuhratjon oʻg'li"
          subtitle={<span className="subject-badge">Fan: (yozilmadi)</span>}
          description={
            <>
              <div>Bakalavr, QDPI 2023 da bitirgan</div>
              <div>Toifa: 1</div>
              <div>Sertifikat: A</div>
              <div>6 yillik tajriba</div>
            </>
          }
        />
      </div>

      {/* Kattaroq tugma: Bizning jamoaga qo'shilish uchun */}
      <div className="text-center mt-4">
        <button
          className="btn btn-success btn-lg px-5 py-3 join-btn"
          style={{ fontSize: "1.05rem", borderRadius: 12 }}
          onClick={() => setShowModal(true)}
        >
          Bizning jamoaga qo'shilish
        </button>
      </div>

      {/* Modal: tugma bosilganda yuqoridagi ContactForm chiqadi */}
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
            padding: 20,
          }}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 720,
              color: "#fff",
              borderRadius: 14,
              padding: 20,
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(2,6,23,0.6)",
              maxHeight: "90vh",
              overflowY: "auto"
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
    </div>
  );
}
export default Card1;