import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <div>
        <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
          <img src="/images/image002.png" alt="Twitter" style={{ marginRight: '10px', width: '30px' }} />
        </a>
        <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
          <img src="/images/image003.png" alt="Facebook" style={{ marginRight: '10px', width: '30px' }} />
        </a>
        <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
          <img src="/images/image004.png" alt="Instagram" style={{ width: '30px' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
