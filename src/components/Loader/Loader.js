import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      className="loading-screen"
      style={{
        height: '100vh',
        background: 'rgba(0,0,0,0.5)',
        width: '100%',
        display: 'flex',
        zIndex: '1000',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'translate(0%,-10%)',
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        color="aqua"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
