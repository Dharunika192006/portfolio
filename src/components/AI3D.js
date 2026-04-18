import React from 'react';

// Import the 12 images from project3
import img1 from '../assets/project3/img1.jpg';
import img2 from '../assets/project3/img2.jpg';
import img3 from '../assets/project3/img3.jpg';
import img4 from '../assets/project3/img4.jpg';
import img5 from '../assets/project3/img5.jpg';
import img6 from '../assets/project3/img6.jpg';
import img7 from '../assets/project3/img7.jpg';
import img8 from '../assets/project3/img8.jpg';
import img9 from '../assets/project3/img9.jpg';
import img10 from '../assets/project3/img10.jpg';
import img11 from '../assets/project3/img11.jpg';
import img12 from '../assets/project3/img12.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

export default function AI3D() {
  return (
    <div style={styles.wrapper}>
      <style>{`
        @keyframes scroll-vertical {
          0% { transform: translateY(0) rotateX(15deg) rotateZ(-2deg); }
          100% { transform: translateY(-50%) rotateX(15deg) rotateZ(-2deg); }
        }
        .reel-scroll { animation: scroll-vertical 25s linear infinite; }
        .reel-scroll:hover { animation-play-state: paused; }
      `}</style>
      
      <div style={styles.viewport}>
        <div className="reel-scroll" style={styles.reel}>
          {[...images, ...images].map((img, i) => (
            <div key={i} style={styles.card}>
              <img src={img} alt="AI UI" style={styles.img} />
              <div style={styles.label}>[ DATA_STREAM_{i % 12 + 1} ]</div>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.emitter}></div>
    </div>
  );
}

const styles = {
  wrapper: { height: '320px', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', perspective: '1200px' },
  viewport: { height: '280px', width: '240px', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.4)', borderRadius: '12px', background: '#000', boxShadow: '0 0 30px rgba(168, 85, 247, 0.1)' },
  reel: { display: 'flex', flexDirection: 'column', gap: '12px', padding: '12px' },
  card: { width: '100%', height: '140px', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, position: 'relative' },
  img: { width: '100%', height: '100%', objectFit: 'cover', opacity: '0.85' },
  label: { position: 'absolute', bottom: '6px', left: '8px', fontSize: '7px', color: '#a855f7', fontWeight: 'bold', letterSpacing: '1px' },
  emitter: { width: '180px', height: '8px', background: '#a855f7', marginTop: '20px', filter: 'blur(20px)', borderRadius: '50%', opacity: '0.3' }
};
