import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './EmailVerification.css';
const EmailVerification = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState([null, null, null, null]);
  const [verifyOtp, setVerifyOtp] = useState('');
  const inputRef = useRef([]);
  const handleChange = (e, index) => {
    otp[index] = e.target.value;
    inputRef.current[index + 1].focus();
    setOtp(otp);
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      otp[index] = null;
      inputRef.current[index - 1].focus();
    }
  };
  const user = JSON.parse(localStorage.getItem('user'));

  const handleOtp = (e, index) => {
    e.preventDefault();
    console.log(user);
    if (!otp) {
      toast.error('Pleaes enter the otp!', {
        position: 'top-right',
      });
      return;
    } else {
      axios
        .post(
          'http://localhost:8000/api/users/verify-otp',
          { email: user.email, otp: otp.join('') },
          {
            headers: 'application/json',
          },
        )
        .then((response) => setVerifyOtp(response?.data));
      if (otp !== verifyOtp?.data.otp) {
        toast.error(verifyOtp.message, {
          position: 'top-right',
        });
        return;
      } else {
        toast.success(verifyOtp?.message, {
          position: 'top-right',
          theme: 'dark',
        });
        setTimeout(() => {
          setLoading(true);
        }, 3000);
        navigate('/');
      }
      setOtp([null, null, null, null]);
    }
    console.log('object');
  };
  return (
    <div
      className="otp-verification-screen"
      style={{
        margin: '20rem auto',
      }}
    >
      <div className="otp-inner">
        <form
          onSubmit={handleOtp}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {[1, 2, 3, 4].map((input, index) => {
              console.log(index);
              return (
                <input
                  className="input-otp"
                  key={index}
                  ref={(el) => {
                    if (el) {
                      inputRef.current[index] = el;
                    }
                  }}
                  type="text"
                  style={{
                    textAlign: 'center',
                    fontSize: 40,
                    width: '60px',
                    height: '60px',
                    marginBottom: '1rem',
                    marginRight: 45,
                    padding: '10px',
                    border: '1px solid gray',
                    borderRadius: '4px',
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 1px 15px 0px',
                  }}
                  value={otp[index]}
                  onChange={(e) => handleChange(e, index)}
                  maxLength={1}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  placeholder="-"
                />
              );
            })}
          </div>
          <div className="submit-otp">
            <button
              type="submit"
              style={{
                backgroundColor: '#FF0000',
                border: '1px solid #FF0000',
                borderRadius: 4,
                padding: '10px 150px',
                color: 'white',
                fontSize: 18,
              }}
            >
              Verify Otp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
