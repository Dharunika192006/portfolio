import React from 'react';

// Importing all 8 images confirmed in your assets/project1 folder
import img1 from '../assets/project1/img1.jpg';
import img2 from '../assets/project1/img2.jpg';
import img3 from '../assets/project1/img3.jpg';
import img4 from '../assets/project1/img4.jpg';
import img5 from '../assets/project1/img5.jpg';
import img6 from '../assets/project1/img6.jpg';
import img7 from '../assets/project1/img7.jpg';
import img8 from '../assets/project1/img8.jpg'; // 👈 New 8th Image added

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Glimpse3D() {
  return (
    <div style={styles.wrapper}>
      {/* Injecting CSS directly to ensure zero "Module Not Found" errors */}
      <style>{`
        @keyframes orbit-mini {
          from { transform: rotateY(0deg) rotateX(-5deg); }
          to { transform: rotateY(360deg) rotateX(-5deg); }
        }
      `}</style>
      
      <div style={styles.system}>
        <div style={styles.spinner}>
          {images.map((img, i) => (
            <div 
              key={i} 
              style={{
                ...styles.pane,
                /* Adjusted Math: 360 / 8 = 45 degrees per image */
                transform: `rotateY(${i * 45}deg) translateZ(180px)` 
              }}
            >
              <img src={img} alt={`UI-${i}`} style={styles.img} />
            </div>
          ))}
        </div>
      </div>
      <div style={styles.emitter}></div>
    </div>
  );
}

const styles = {
  wrapper: { 
    height: '300px', 
    width: '300px', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    perspective: '1500px' 
  },
  system: { 
    width: '150px', 
    height: '100px', 
    position: 'relative', 
    transformStyle: 'preserve-3d' 
  },
  spinner: { 
    width: '100%', 
    height: '100%', 
    position: 'absolute', 
    transformStyle: 'preserve-3d', 
    animation: 'orbit-mini 20s infinite linear' 
  },
  pane: { 
    position: 'absolute', 
    width: '180px', 
    height: '110px', 
    left: '-15px', 
    top: '0', 
    border: '1px solid rgba(6, 182, 212, 0.4)', 
    borderRadius: '8px', 
    overflow: 'hidden', 
    background: '#000', 
    boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)', 
    backfaceVisibility: 'visible' 
  },
  img: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover', 
    opacity: '0.9' 
  },
  emitter: { 
    width: '140px', 
    height: '6px', 
    background: '#06b6d4', 
    marginTop: '100px', 
    filter: 'blur(20px)', 
    borderRadius: '50%', 
    opacity: '0.4' 
  }
};
