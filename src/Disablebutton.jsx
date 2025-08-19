import React, { useState } from 'react';
import './DisButton.css'; 
import './App.css';

function DisableButton() {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
  };

  return (
    <button
      className={`custom-button ${isDisabled ? 'disabled' : ''}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {isDisabled ? 'Disabled' : 'Click Me'}
    </button>
  );
}

export default DisableButton;
