import React, { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <div id="main">
      {isVisible ? (
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
      ) : (
        <p id="para" className="hide">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
      )}
      <button id="click" onClick={handleClick}>Click to Show Paragraph</button>
    </div>
  );
}

export default App;
