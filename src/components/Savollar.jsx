import React, { useState, useEffect, useRef } from "react";

export default function Savol() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const timers = useRef([]);

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
    // stagger appear with timeouts, clear on unmount
    setVisibleCards([]); // reset before starting
    timers.current = [];
    questions.forEach((_, index) => {
      const t = setTimeout(() => {
        setVisibleCards((prev) => {
          if (prev.includes(index)) return prev;
          return [...prev, index];
        });
      }, index * 160);
      timers.current.push(t);
    });
    return () => timers.current.forEach((t) => clearTimeout(t));
  }, []); // run once

  const toggleQuestion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="faq-container faq-text-center faq-mb-4">
        <h1 className="faq-title">KO'P BERILADIGAN SAVOLLAR</h1>
        <p className="faq-subtitle">
          Quyida bizdan tez-tez so'raladigan savollar <br /> uchun javoblarni tayyorlab qo'ydik.
        </p>
      </div>

      <div className="faq-container faq-grid">
        {questions.map((item, index) => {
          const isVisible = visibleCards.includes(index);
          const isExpanded = activeIndex === index;
          return (
            <div
              key={index}
              className={`faq-card ${isVisible ? "visible" : ""} ${
                isExpanded ? "expanded" : ""
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <button
                id={`faq-btn-${index}`}
                aria-controls={`faq-answer-${index}`}
                aria-expanded={isExpanded}
                className="faq-btn"
                onClick={() => toggleQuestion(index)}
              >
                <span className="faq-question-text">{item.q}</span>
                <strong className={`faq-plus ${isExpanded ? "active" : ""}`}>
                  {isExpanded ? "−" : "+"}
                </strong>
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-btn-${index}`}
                className="faq-answer"
              >
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}