// Tion.jsx
import React, { useState } from "react";
import Kun from "./Kun";

function Tion() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programsData = [
    {
      level: "Boshlang‘ich",
      grade: "1-4 sinflar uchun",
      text: "O‘quvchilar ilmga muhabbat paydo qilish qatorida boshlang‘ich bilimlar, hayotiy ko‘nikmalar va odoblar shakllantirish jarayoni.",
    },
    {
      level: "O‘rta",
      grade: "5-8 sinflar uchun",
      text: "Barcha fanlardan poydevor bilimlarni egallash, tanqidiy-tahliliy fikrlash va muloqot ko‘nikmalarini rivojlantirish hamda xorijiy tillardan birini o‘zlashtirish jarayoni.",
    },
    {
      level: "Yuqori",
      grade: "9-11 sinflar uchun",
      text: "O‘quvchining salohiyatidan kelib chiqqan holda aniq, tabiiy yoki ijtimoiy fanlardan biriga chuqurlashuv, karyerani aniqlash va oliygohga tayyorgarlik bosqichi.",
    },
  ];

  return (
    <>
      <Kun
        title="O‘quv dasturlarimiz"
        description="Eng yaxshi ta’lim sifati, tajribali o‘qituvchilar va innovatsion yondashuv bilan farzandingiz kelajagini biz bilan yarating!"
        programs={programsData}
        onSelect={setSelectedProgram}
      />

      {selectedProgram && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedProgram(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: 20,
            animation: "fadeIn .25s ease",
          }}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 820,
              borderRadius: 18,
              padding: 18,
              background: "linear-gradient(180deg, #2ecc71, #27ae60)",
              color: "#062214",
              boxShadow: "0 10px 40px rgba(2,6,23,0.35)",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelectedProgram(null)}
              aria-label="Close"
              style={{
                position: "absolute",
                right: 14,
                top: 12,
                background: "transparent",
                border: "none",
                color: "#062214",
                fontSize: 22,
                cursor: "pointer",
                padding: 6,
                borderRadius: 8,
              }}
            >
              ×
            </button>

            <div style={{ paddingBottom: 12 }}>
              <h4 className="fw-bold mb-2" style={{ color: "#042913" }}>
                {selectedProgram.level}
              </h4>
              <h6 className="mb-2" style={{ color: "#042913" }}>
                {selectedProgram.grade}
              </h6>
              <p style={{ color: "#042913" }}>{selectedProgram.text}</p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "flex-end",
                marginTop: 8,
              }}
            >
              <button
                className="btn btn-light text-success fw-bold px-4 py-2"
                style={{ borderRadius: 12 }}
                onClick={() => setSelectedProgram(null)}
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Tion;
