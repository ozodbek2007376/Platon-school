import React, { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ma'lumotlar yuborildi!");
  };

  return (
    <div id="savollar" className="contact-form-container">
      {/* Orqa fon */}
      <div className="background-pattern"></div>

      {/* Asosiy qism */}
      <div className="form-wrapper">
        <h1 className="form-title">Maktabimiz haqida savollaringiz bormi?</h1>
        <p className="form-subtitle">
          Ma'lumotlaringizni yozib qoldiring va biz sizga tez orada bog'lanamiz.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Ism-familiya"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />

          <div className="phone-wrapper">
            <select className="country-code">
              <option value="+998">+998</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="00-000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input-field phone-input"
            />
          </div>

          <button type="submit" className="submit-btn">
            Ma'lumot olish
          </button>
        </form>
      </div>
    </div>
  );
}
