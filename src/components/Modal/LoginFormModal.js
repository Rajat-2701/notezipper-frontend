import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Modal from 'react-modal';
import { IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { useModalContext } from '../../context/ModalContext';
const LoginFormModal = ({ open, setOpen }) => {
  const { ToogleRegisterModal, ToogleLoginModal } = useModalContext();
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    error,
    showPassword,
    setShowPassword,
    isVisible,
    errorMessage,
    user,
  } = useAuth();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      display: 'flex',
      zIndex: 0,
      alignItems: 'center',
      width: '680px',
      overflow: 'hidden',
      height: '100%',
      maxHeight: '528px',
      transform: 'translate(-50%, -50%)',
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
    },
  };
  return (
    <div>
      {!user && (
        <Modal
          onAfterClose={(p) => console.log(p)}
          contentLabel="Register Modal"
          isOpen={open}
          style={customStyles}
          ariaHideApp={false}
        >
          <div
            style={{
              backgroundColor: '#2874f0',
              color: 'white',
              padding: '40px 33px',
              height: '100%',
              minHeight: '414px',
              width: '40%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              backgroundImage:
                'url(https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png)',
              backgroundPosition: 'center 85%',
              backgroundRepeat: 'no-repeat',
            }}
            className="login-modal-bg"
          >
            <div style={{ marginTop: '1.5rem' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 500 }}>Login....</h2>
              <p
                style={{
                  fontSize: '18px',
                  marginTop: '16px',
                  lineHeight: '150%',
                  color: '#dbdbdb',
                  paddingRight: '1rem',
                }}
              >
                Get access to your Orders, Wishlist and Recommendations
              </p>
            </div>
          </div>
          <form
            onSubmit={handleLogin}
            style={{
              width: '60%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
              paddingLeft: '1rem',
            }}
            className="modal-form"
          >
            <input
              type="text"
              style={{
                width: '350px',
                marginBottom: '1rem',
                padding: '10px',
                border: '1px solid gray',
                borderRadius: '4px',
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 1px 15px 0px',
              }}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && (
              <p style={{ marginTop: -5, color: 'red', marginLeft: '-17rem' }}>
                Email is required
              </p>
            )}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '350px',
                  marginBottom: '1rem',
                  padding: '10px',
                  border: '1px solid gray',
                  borderRadius: '4px',
                  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 1px 15px 0px',
                }}
                placeholder="Enter your password"
              />
              <IconButton
                style={{ position: 'absolute', right: '1%', bottom: '45%' }}
                onClick={isVisible}
              >
                {showPassword ? (
                  <Visibility style={{ color: 'blue' }} />
                ) : (
                  <VisibilityOff />
                )}
              </IconButton>

              {error && (
                <p
                  style={{ marginTop: -5, color: 'red', marginLeft: '-15rem' }}
                >
                  Password is required
                </p>
              )}
              <NavLink to="/forgot-password">Forgot Password?</NavLink>
            </div>
            {/* <div></div> */}
            <button
              type="submit"
              style={{
                width: '350px',
                marginTop: '1rem',
                marginBottom: '1rem',
                padding: '10px',
                color: 'white',
                fontSize: '18px',
                textTransform: 'uppercase',
                border: '1px solid white',
                borderRadius: '5px',
              }}
              id="login"
            >
              Login
            </button>

            <div
              className="register-route"
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <p>
                Not have an account yet?{' '}
                <span
                  className="register-now"
                  style={{
                    color: 'blue',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    ToogleRegisterModal(true);
                    ToogleLoginModal(false);
                  }}
                >
                  Register Now!
                </span>
              </p>
            </div>
          </form>
          <i
            id="close-icon"
            className="fas fa-times"
            style={{
              color: 'black',
              position: 'absolute',
              top: 20,
              right: 20,
              fontSize: 30,
              cursor: 'pointer',
              color: 'black',
            }}
            onClick={() => setOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default LoginFormModal;
