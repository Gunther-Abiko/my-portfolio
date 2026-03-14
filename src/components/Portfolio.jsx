// ============================================================
//  components/Portfolio.jsx
// ============================================================

import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect, useState } from 'react';
import Cpt1 from '../assets/Cpt1.jpg';
import Cpt2 from '../assets/Cpt2.jpg';
import Cpt3 from '../assets/Cpt3.jpg';

// Card bg gradients — one per project (order matches translations)
const CARD_GRADIENTS = [
  'linear-gradient(135deg, #8a6a4a 0%, #5c3d2a 100%)',
  'linear-gradient(135deg, #9b3a1e 0%, #6b2510 100%)',
  'linear-gradient(135deg, #4a6a5c 0%, #2a3d35 100%)',
  'linear-gradient(135deg, #4a4a6a 0%, #2a2a3d 100%)',
];

const projectImages = [Cpt1, Cpt2, Cpt3];

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>

      {/* 图片轨道 */}
      <div style={{
        display: 'flex',
        width: `${images.length * 100}%`,
        height: '100%',
        transform: `translateX(-${current * (100 / images.length)}%)`,
        transition: 'transform 0.5s ease',
      }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`project-${i}`}
            style={{ width: `${100 / images.length}%`, height: '100%', objectFit: 'cover' }}
          />
        ))}
      </div>

      {/* 左右按钮 */}
      <button onClick={prevImage} style={{
        position: 'absolute', left: '10px', top: '50%',
        transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)',
        color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer'
      }}>‹</button>

      <button onClick={nextImage} style={{
        position: 'absolute', right: '10px', top: '50%',
        transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)',
        color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer'
      }}>›</button>

    </div>
  )};

  // Cards 0 and 3 span 2 columns for visual rhythm
  const WIDE_CARDS = new Set([0, 3]);

  export default function Portfolio({ t }) {
    const ref = useScrollReveal();
    const tp = t.portfolio;

    return (
      <section id="portfolio" className="section-wrapper" ref={ref}>

        <div className="reveal" style={{ marginBottom: '60px' }}>
          <p className="section-num">{tp.sectionNum}</p>
          <h2 className="section-title">
            {tp.title}<em>{tp.titleEm}</em>
          </h2>
          <div className="section-divider">
            <div className="section-divider__line" />
            <div className="section-divider__dot" />
          </div>
        </div>

        <div style={styles.grid}>
          {tp.projects.map((proj, i) => (
            <PortfolioCard
              key={i}
              index={i}
              project={proj}
              gradient={CARD_GRADIENTS[i]}
              wide={WIDE_CARDS.has(i)}
              viewMore={tp.viewMore}
            />
          ))}
        </div>

      </section>
    );
  }

  function PortfolioCard({ index, project, gradient, wide, viewMore }) {
    return (
      <div
        className="reveal"
        style={styles.card(wide)}
      >
        <div style={styles.cardImage}>

          {index === 0
            ? <Carousel images={projectImages} />
            : <div style={{ ...styles.cardImage, background: gradient }}>
              <span style={styles.imageLabel}>Project {toRoman(index + 1)}</span>
              <span style={styles.imageNumber}>No.00{index + 1}</span>
            </div>
          }
        </div>
        <div style={styles.cardBody}>
          <p style={styles.tag}>{project.tag}</p>
          <h3 style={styles.title}>{project.title}</h3>
          <p style={styles.desc}>{project.desc}</p>
          <a href="#" style={styles.arrow}>{viewMore} →</a>
        </div>
      </div>
    );
  }


  function toRoman(n) {
    return ['I', 'II', 'III', 'IV', 'V'][n - 1] ?? n;
  }

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '28px',
    },
    card: (wide) => ({
      background: 'var(--parchment)',
      border: '1px solid var(--border)',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.4s, box-shadow 0.4s',
      gridColumn: wide ? 'span 2' : 'span 1',
    }),
    cardImage: {
      aspectRatio: '4/3',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageLabel: {
      fontFamily: 'var(--font-display)',
      fontSize: '2rem',
      color: 'rgba(245,240,232,0.2)',
      fontStyle: 'italic',
    },
    imageNumber: {
      position: 'absolute',
      top: '16px',
      right: '20px',
      fontSize: '0.7rem',
      letterSpacing: '0.2em',
      color: 'rgba(245,240,232,0.5)',
      textTransform: 'uppercase',
    },
    cardBody: {
      padding: '22px 26px',
      borderTop: '1px solid var(--border)',
    },
    tag: {
      fontSize: '0.72rem',
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      marginBottom: '8px',
    },
    title: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.2rem',
      color: 'var(--ink)',
      marginBottom: '8px',
    },
    desc: {
      fontSize: '0.9rem',
      color: 'var(--muted)',
      lineHeight: 1.5,
    },
    arrow: {
      display: 'inline-block',
      marginTop: '14px',
      fontSize: '0.8rem',
      letterSpacing: '0.2em',
      color: 'var(--rust)',
      textTransform: 'uppercase',
      textDecoration: 'none',
    },
  };
