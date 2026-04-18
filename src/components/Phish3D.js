import React from 'react';
import { ShieldAlert } from 'lucide-react';

// Only importing the 2 images you have
import img1 from '../assets/project2/img1.jpg';
import img2 from '../assets/project2/img2.jpg';

const images = [img1, img2];

export default function Phish3D() {
  return (
    <div style={styles.wrapper}>
      <style>{`
        @keyframes twin-float {
          0%, 100% { transform: translateY(0px) rotateX(10deg) rotateY(-5deg); }
          50% { transform: translateY(-15px) rotateX(15deg) rotateY(5deg); }
        }
        .twin-system {
          animation: twin-float 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }
      `}</style>
      
      <div className="twin-system" style={styles.container}>
        <div style={styles.bgIcon}>
           <ShieldAlert size={140} opacity={0.03} />
        </div>

        {images.map((img, i) => (
          <div 
            key={i} 
            style={{
              ...styles.pane,
              top: `${i * 30}px`,
              left: `${i * 30}px`,
              zIndex: i,
              transform: `rotateZ(${(i === 0 ? -5 : 5)}deg) translateZ(${i * 20}px)`,
            }}
          >
            <img src={img} alt={`Phish-UI-${i}`} style={styles.img} />
            <div style={styles.label}>SEC_SCAN_0{i+1}</div>
          </div>
        ))}
      </div>
      <div style={styles.emitter}></div>
    </div>
  );
}

const styles = {
  wrapper: { height: '280px', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', perspective: '1200px' },
  container: { position: 'relative', width: '220px', height: '160px' },
  pane: { position: 'absolute', width: '220px', height: '140px', background: '#000', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' },
  img: { width: '100%', height: '100%', objectFit: 'cover', opacity: '0.85' },
  label: { position: 'absolute', bottom: '8px', left: '10px', color: '#ef4444', fontSize: '8px', fontWeight: 'bold', letterSpacing: '2px' },
  bgIcon: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#ef4444' },
  emitter: { width: '180px', height: '8px', background: 'radial-gradient(ellipse at center, rgba(239, 68, 68, 0.4) 0%, transparent 80%)', marginTop: '100px', filter: 'blur(15px)' }
};
