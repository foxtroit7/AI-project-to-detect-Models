import '../css/login.css';
import { useState } from 'react';
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
const Login = () => {
const [showPassword, setShowPassword] = useState(false);
  return (
    <div 
    className='fullscreen-center'

    >
      <div className="container-fluid" style={{ maxWidth: '1000px', width: '100%' }}>
      <div 
        className="row g-0 position-relative" 
        style={{ 
          margin: 0,
          borderRadius: '50px',
          overflow: 'hidden',
          boxShadow: ' 0px 4px 8px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Left Section - Form */}
        <div className="col-md-6 p-5 d-flex flex-column justify-content-center position-relative" 
             style={{ 
               zIndex: 2,
         background:  '#2f3136'
             }}>
          <div className="mx-auto" style={{ maxWidth: '400px', width: '100%' }}>
            {/* Welcome Section */}
            <div className="text-center mb-5">
              <div className="mb-3">
                <div 
                  className="d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '110px',
             
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>JMBAXI</span>
                </div>
              </div>
              <h2 className="fw-bold mb-2" style={{ fontSize: '2rem' }}>Welcome Back</h2>
              <p  style={{ fontSize: '0.95rem' }}>
                Enter your credentials to access your account
              </p>
            </div>
            
            <form>
              {/* Email Field */}
              <div className="mb-4">
                <label className="form-label d-flex justify-content-start fw-semibold mb-2" style={{ color: '#374151', fontSize: '0.9rem' }}>
                  Email
                </label>
                <div className="position-relative">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                    style={{
                      padding: '12px 16px',
                      fontSize: '1rem',
                      border: '1.5px solid #e2e8f0',
                      borderRadius: '12px',
                      backgroundColor: '#ffffff',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label className="form-label d-flex justify-content-start  fw-semibold mb-2" style={{ color: '#374151', fontSize: '0.9rem' }}>
                  Password
                </label>
                <div className="position-relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    placeholder="Enter your password"
                    required
                    style={{
                      padding: '12px 16px',
                      fontSize: '1rem',
                      border: '1.5px solid #e2e8f0',
                      borderRadius: '12px',
                      backgroundColor: '#ffffff',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#ffffff'
                    }}
                    aria-label="Toggle Password Visibility"
                  >
                    {showPassword ? <FaLockOpen /> : <FaLock />}
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <button 
                type="submit" 
                className="btn w-100 fw-semibold"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 0',
                  fontSize: '1rem',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
                }}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

        {/* Right Section - Branding with Curved Edge */}
        <div
          className="col-md-6 d-none d-md-flex flex-column align-items-center justify-content-center text-white position-absolute"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a, #3b82f6, #1e40af)',
            right: 0,
            top: 0,
            height: '100vh',
            overflowY: 'hidden',
            width: '50%',
            clipPath: 'ellipse(120% 100% at 100% 50%)',
            zIndex: 1
          }}
        >
          {/* Background Image */}
          <div 
            className="position-absolute w-100 h-100"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3,
              zIndex: 1
            }}
          ></div>
          
          {/* Gradient Overlay */}
          <div 
            className="position-absolute w-100 h-100"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.6), rgba(30, 64, 175, 0.9))',
              zIndex: 2
            }}
          ></div>
          
          {/* Content */}
          <div className="position-relative" style={{ zIndex: 3 }}>
          <div className="branding-center">
  <div 
    className=" mb-3"
    style={{
      width: '160px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}
  >
    <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>JMBAXI</span>
  </div>

  <p className="mt-3 text-center" style={{ fontSize: '1.1rem', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
    Innovative Solutions <br />
    <span className="fw-semibold">for Tomorrow's Challenges</span>
  </p>
</div>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
