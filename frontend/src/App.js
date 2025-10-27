import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [noiseEnabled, setNoiseEnabled] = useState(false);

  useEffect(() => {
    if (noiseEnabled) document.documentElement.classList.add('enable-noise');
    else document.documentElement.classList.remove('enable-noise');
  }, [noiseEnabled]);

  return (
    <div className="App" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px',
      color: 'white',
      textAlign: 'center'
    }}>
      {/* Noise toggle (optional) */}
      <div style={{ position: 'absolute', top: 14, right: 18, zIndex: 11000, color: '#cbd5e1' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem' }}>
          <input type="checkbox" checked={noiseEnabled} onChange={e => setNoiseEnabled(e.target.checked)} />
          <span style={{ opacity: 0.9 }}>Noise</span>
        </label>
      </div>
      <img 
        src={logo} 
        className="App-logo" 
        alt="logo" 
        style={{ 
          width: '100px', 
          height: '100px', 
          marginBottom: '30px',
          animation: 'App-logo-spin infinite 20s linear'
        }}
      />
      
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '20px',
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        This is testing for MERN project
      </h1>
      
      <p style={{ 
        fontSize: '1.2rem', 
        marginBottom: '40px',
        opacity: '0.9'
      }}>
        Frontend: React.js ⚛️ | Backend: Node.js + Express.js 🚀 | Database: MongoDB 🍃
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px',
        maxWidth: '800px',
        width: '100%'
      }}>
        <div className="glass">
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '20px',
            color: '#4ecdc4'
          }}>
            ⚛️ Frontend Status
          </h3>
          <div style={{ textAlign: 'left', lineHeight: '2' }}>
            <div>✅ React App Running</div>
            <div>✅ Axios Installed</div>
            <div>✅ React Router Installed</div>
            <div>✅ Styling Applied</div>
          </div>
        </div>
        
        <div className="glass">
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '20px',
            color: '#ff6b6b'
          }}>
            🚀 Backend Status
          </h3>
          <div style={{ textAlign: 'left', lineHeight: '2' }}>
            <div>✅ Express Server Running</div>
            <div>✅ CORS Enabled</div>
            <div>✅ Port: 5000</div>
            <div>⏳ MongoDB: Ready to Connect</div>
          </div>
        </div>
      </div>
      
      <div className="glass-pill" style={{
        marginTop: '40px',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        color: '#fff'
      }}>
        🎉 MERN Stack Ready!
      </div>
    </div>
  );
}

export default App;
