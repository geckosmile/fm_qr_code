import React from 'react'
import './App.scss'
import QRCode from './assets/image-qr-code.png'

function App() {

  return (
    <div className='App'>
      <div className="qr-wrapper">
        <div className="qr-image">
          <img src={ QRCode } alt="qr-code" />
        </div>
        <div className="text">
          <h3>Improve your front-end skills by building projects</h3>
          <p>Scan the QR code to visit Frontend Mentor and taking your coding skills to the next level!</p>
        </div>
      </div>
    </div>
  )
}

export default App