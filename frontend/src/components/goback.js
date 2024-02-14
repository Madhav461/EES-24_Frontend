import React from 'react';

const BackButton = () => {
  const goBack = () => {
    window.history.back(); // Go back using browser history
  };

  return (
    <button
      className="bg-black"
      onClick={goBack}
    >
      <img className='h-[3vw]' src="/Group 2028.svg" alt="" />
    </button>
  );
};

export default BackButton;