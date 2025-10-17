import React from "react";

const steps = [
  {
    id: 1,
    title: "01. Maktabga tashrif",
    desc: "Platon School jamoasi maktab hududida ota-onalarni kutib olib, ularning barcha savollariga javob beradi."
  },
  {
    id: 2,
    title: "02. Maktab bilan tanishuv",
    desc: "Ota-onalarga maktab sharoitlari va imkoniyatlari haqida individual ma’lumot beriladi."
  },
  {
    id: 3,
    title: "03. Ota-ona bilan suhbat",
    desc: "Qabul komissiyasi ota-onalar bilan suhbat o‘tkazadi va maqsadlarning mosligi aniqlanadi."
  },
  {
    id: 4,
    title: "04. Psixolog suhbati",
    desc: "Psixolog o‘quvchining tayyorgarligi va moslashuvini baholaydi."
  },
  {
    id: 5,
    title: "05. O‘quvchining bilimini o‘lchash",
    desc: "O‘quvchining poydevor fanlardan bilim darajasini aniqlash uchun osonlashtirilgan test sinovlari o‘tkaziladi. Bu test natijasi o‘quvchini o‘z darajasiga mos sinfga joylashtirishda yordam beradi."
  },
  {
    id: 6,
    title: "06. Qabul",
    desc: "Barcha bosqichlardan muvaffaqiyatli o‘tgan ota-ona va o‘quvchi  School’da o‘z o‘rnini band qilish imkoniyatiga ega bo‘ladi. Ushbu bosqichda shartnoma imzolanadi va darslarga tayyorgarlik boshlanadi."
  }
];

const Qabul = () => {
  return (
    <div className="qabul d-flex flex-column align-items-center text-center">
      <div className="qabul-header mb-5">
        <h1 className="Qabul">Qabul jarayoni</h1>
        <p className="qabul-text">
          Platon School o‘z farzandining kelajagi uchun befarq bo‘lmagan ota-onalarni
          tezkor qadamlardan iborat qabul jarayoniga taklif etadi.
        </p>
      </div>

      {/* Steps qismi */}
      <div className="qabul-wrapper">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`step ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qabul;
