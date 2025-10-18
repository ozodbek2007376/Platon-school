import React, { useState, useEffect } from 'react';

export function ContactForm({ prefill = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    code: '+998',
    phone: '',
  });

  useEffect(() => {
    // apply prefill (e.g. { subject: 'Boshlang‘ich' } or { name, phone })
    setFormData((prev) => ({
      ...prev,
      ...(prefill.name ? { name: prefill.name } : {}),
      ...(prefill.phone ? { phone: prefill.phone } : {}),
    }));
  }, [prefill]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validatePhone = (raw) => {
    const digits = raw.replace(/\D/g, '');
    return digits.length >= 9; // simple check (adjust if needed)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, code, phone } = formData;
    if (!name.trim()) return alert("Iltimos, ismingizni kiriting.");
    if (!validatePhone(phone)) return alert("Iltimos, to‘g‘ri telefon raqamini kiriting.");
    const payload = {
      name: name.trim(),
      phone: `${code}${phone.replace(/\D/g, '')}`,
      subject: prefill.subject || '',
    };
    // replace with real submit (fetch/axios) as needed
    console.log('submit payload', payload);
    alert("Ma'lumotlar yuborildi!");
    setFormData({ name: '', code: '+998', phone: '' });
  };

  return (
    <div id="savollar" className="contact-form-container">
      <div className="background-pattern" aria-hidden></div>

      <div className="form-wrapper">
        <h1 className="form-title">Maktabimiz haqida savollaringiz bormi?</h1>
        <p className="form-subtitle">
          Ma'lumotlaringizni yozib qoldiring va biz sizga tez orada bog'lanamiz.
        </p>

        <form onSubmit={handleSubmit} className="form" noValidate>
          <label className="visually-hidden" htmlFor="name">Ism-familiya</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Ism-familiya"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
            aria-required="true"
          />

          <div className="phone-wrapper">
            <label className="visually-hidden" htmlFor="country-code">Mamlakat kodi</label>
            <select
              id="country-code"
              name="code"
              className="country-code"
              value={formData.code}
              onChange={handleChange}
              aria-label="Mamlakat kodi"
            >
              <option value="+998">+998</option>
              <option value="+7">+7</option>
              <option value="+380">+380</option>
              <option value="+1">+1</option>
            </select>

            <label className="visually-hidden" htmlFor="phone">Telefon</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="00-000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input-field phone-input"
              aria-required="true"
              inputMode="tel"
              pattern="[0-9+\s()-]*"
            />
          </div>

          <button type="submit" className="submit-btn" aria-label="Ma'lumot olish">
            Ma'lumot olish
          </button>
        </form>
      </div>
    </div>
  );
}
