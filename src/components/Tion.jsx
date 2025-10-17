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

      {/* Modal */}
      {selectedProgram && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{
            background: "rgba(0,0,0,0.7)",
            animation: "fadeIn 0.4s ease",
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            style={{ animation: "zoomIn 0.4s ease" }}
          >
            <div
              className="modal-content text-white"
              style={{
                background: "linear-gradient(135deg, #2ecc71, #27ae60)",
                borderRadius: "20px",
              }}
            >
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">{selectedProgram.level}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedProgram(null)}
                ></button>
              </div>
              <div className="modal-body">
                <h6 className="fw-bold">{selectedProgram.grade}</h6>
                <p>{selectedProgram.text}</p>
              </div>
              <div className="modal-footer border-0">
                <button
                  className="btn btn-light text-success fw-bold px-4 py-2"
                  style={{ borderRadius: "12px" }}
                  onClick={() => setSelectedProgram(null)}
                >
                  Yopish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

     
    </>
  );
}

export default Tion;
