import React, { useEffect, useState } from 'react';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            document.body.style.overflow = 'auto';
            window.dispatchEvent(new Event('app-started'));
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 60);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontFamily: 'sans-serif'
      }}
    >
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px' }}>
  
  <div style={{ marginBottom: '20px', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
    <img
      src="/darkmax.png"
      alt="DarkMaxDev"
      onError={(e) => {
        e.target.style.display = 'none';
        if (e.target.parentNode) {
          e.target.parentNode.innerHTML = '<h1 style="font-size: 3rem; color: #d8d7d5; font-family: Georgia, serif; letter-spacing: 4px; text-align: center; margin: 0;">DarkMaxDev</h1>';
        }
      }}
      style={{ height: '140px', width: 'auto', objectFit: 'contain', display: 'block', margin: '0 auto' }}
    />
  </div>

        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', letterSpacing: '0.35em', color: '#f4f4f5', margin: '0', textTransform: 'uppercase' }}>
          NOW LOADING
        </h2>

        <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', letterSpacing: '0.5em', color: '#a1a1aa', textTransform: 'uppercase', display: 'block', marginTop: '8px' }}>
          DarkMaxDev Presents
        </span>

        <div style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#8b887e', marginTop: '24px', letterSpacing: '2px' }}>
          [ {progress}% ]
        </div>

        {/* Barra de progreso */}
        <div style={{ marginTop: '12px', height: '3px', width: '200px', backgroundColor: '#18181b', borderRadius: '999px', overflow: 'hidden', border: '1px solid #27272a', margin: '12px auto 0' }}>
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(to right, #141414, #918f8c, #fdfdfd)',
              transition: 'width 0.1s linear'
            }}
          />
        </div>
      </div>
    </div>
  );
};