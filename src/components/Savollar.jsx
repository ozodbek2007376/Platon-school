import React, { useState, useEffect } from "react";

export default function Savol() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);

  const questions = [
    {
      q: "Yotoqxona bormi?",
      a: "Ha, maktabimizda qulay va xavfsiz yotoqxona mavjud.",
    },
    {
      q: "To'lovni bo'lib to'lash mumkinmi?",
      a: "Ha, to'lovlarni qulaylik uchun oyma-oy bo'lib to'lash mumkin.",
    },
    {
      q: "Narxlar tez-tez o'zgaradimi?",
      a: "Yo'q, narxlar o'quv yili davomida o'zgarmaydi.",
    },
    {
      q: "Maktabda forma kiyish majburiymi?",
      a: "Ha, barcha o'quvchilar uchun yagona maktab formasi joriy qilingan.",
    },
    {
      q: "Chegirmalar bormi?",
      a: "Ha, ayrim holatlarda iqtidorli o'quvchilar uchun chegirmalar mavjud.",
    },
  ];

  useEffect(() => {
    questions.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq-container faq-text-center faq-mb-4">
        <h1 className="faq-title">KO'P BERILADIGAN SAVOLLAR</h1>
        <p className="faq-subtitle">
          Quyida bizdan tez-tez so'raladigan savollar <br /> uchun javoblarni tayyorlab qo'ydik.
        </p>
      </div>

      <div className="faq-container faq-d-flex faq-flex-column">
        {questions.map((item, index) => (
          <div
            key={index}
            className={
              `faq-card ${index % 2 === 0 ? "faq-card-right" : "faq-card-left"} ${visibleCards.includes(index) ? 'visible' : ''}`
            }
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <button
              className="faq-btn"
              onClick={() => toggleQuestion(index)}
            >
              {item.q}
              <strong
                className={`faq-plus ${activeIndex === index ? "active" : ""}`}
              >
                {activeIndex === index ? "−" : "+"}
              </strong>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}