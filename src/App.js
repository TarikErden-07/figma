import './App.css';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    salary: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="containers">
          
          <div className="container">
            <a className='link' href='link'>Hakkımızda</a>
          </div>

          
          <div className='container2'>
            
            {submittedData ? (
              <div>
                <p>Adınız: {submittedData.name}</p>
                <p>E-posta Adresiniz: {submittedData.email}</p>
                <p>Telefon Numaranız: {submittedData.phone}</p>
                <p>Maaşınız: {submittedData.salary}</p>
              </div>
            ) : (
              <p>Bilgileri doldurun ve "Gir" butonuna tıklayın.</p>
            )}
          </div>

          
          <div className='container3'>
            <div className='input'>
              <p>Adınızı giriniz</p><input type="text" name="name" onChange={handleChange} />
              <br />
              <p>E-posta adresiniz</p><input type="email" name="email" onChange={handleChange} />
              <br />
              <p>Telefon numaranız</p><input type="tel" name="phone" onChange={handleChange} />
              <br />
              <p>Maaşınız</p><input type="text" name="salary" onChange={handleChange} />
            </div>
            <button className='btn' onClick={handleSubmit}>Gir</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

