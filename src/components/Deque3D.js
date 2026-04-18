import React from 'react';
import { Layers } from 'lucide-react';

// Using your 4 images
import img1 from '../assets/project4/img1.jpg';
import img2 from '../assets/project4/img2.jpg';
import img3 from '../assets/project4/img3.jpg';
import img4 from '../assets/project4/img4.jpg';

const images = [img1, img2, img3, img4];

export default function Deque3D() {
  return (
    <div style={styles.wrapper}>
      {/* 🚀 DEQUE LOGIC ANIMATION */}
      <style>{`
        @keyframes deque-flow {
          0%, 100% { transform: translateX(-30px) translateZ(0px) rotateY(10deg); }
          50% { transform: translateX(30px) translateZ(50px) rotateY(-10deg); }
        }
        .deque-node {
          animation: deque-flow 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        .node-hover:hover {
          transform: scale(1.1) translateZ(100px) !important;
          border-color: #ffffff !important;
          box-shadow: 0 0 30px rgba(255,255,255,0.4) !important;
          z-index: 100 !important;
        }
      `}</style>
      
      <div className="deque-node" style={styles.container}>
        {/* Central Logic Icon */}
        <div style={styles.bgIcon}>
           <Layers size={150} opacity={0.05} />
        </div>

        {images.map((img, i) => (
          <div 
            key={i} 
            className="node-hover"
            style={{
              ...styles.pane,
              // Distribute nodes along the 3D axis
              top: `${i * 15}px`,
              left: `${(i - 1.5) * 40}px`,
              zIndex: i,
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <img src={img} alt={`Deque-UI-${i}`} style={styles.img} />
            <div style={styles.label}>[ FRONT_REAR_ACCESS_NODE_0{i+1} ]</div>
          </div>
        ))}
      </div>
      <div style={styles.emitter}></div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: '350px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1500px',
  },
  container: {
    position: 'relative',
    width: '300px',
    height: '180px',
  },
  pane: {
    position: 'absolute',
    width: '240px',
    height: '140px',
    background: '#000',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
    cursor: 'pointer',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '0.8',
  },
  label: {
    position: 'absolute',
    bottom: '8px',
    left: '10px',
    color: '#fff',
    fontSize: '7px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    opacity: 0.4
  },
  bgIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    pointerEvents: 'none',
  },
  emitter: {
    width: '220px',
    height: '5px',
    background: 'rgba(255,255,255,0.2)',
    marginTop: '80px',
    filter: 'blur(15px)',
    borderRadius: '50%',
  }
};
