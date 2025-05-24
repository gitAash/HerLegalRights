import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here (API call, etc.)
    console.log('Registering:', formData);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 className="section-title">Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Create Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                className="form-input" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
