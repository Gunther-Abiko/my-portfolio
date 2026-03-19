// ============================================================
//  components/Portfolio.jsx
// ============================================================

import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Cpt1 from '../assets/Cpt1.jpg';
import Cpt2 from '../assets/Cpt2.jpg';
import Cpt3 from '../assets/Cpt3.jpg';

const CARD_GRADIENTS = [
  'linear-gradient(135deg, #8a6a4a 0%, #5c3d2a 100%)',
  'linear-gradient(135deg, #9b3a1e 0%, #6b2510 100%)',
  'linear-gradient(135deg, #4a6a5c 0%, #2a3d35 100%)',
  'linear-gradient(135deg, #4a4a6a 0%, #2a2a3d 100%)',
];

const PROJECT_IMAGES = [Cpt1, Cpt2, Cpt3];
const WIDE_CARDS = new Set([0, 3]);

// ── Carousel ──────────────────────────────────────────────────
function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % images.length);
  const prev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * (100 / images.length)}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`project-${i}`}
            className="carousel-img"
            style={{ width: `${100 / images.length}%` }}
          />
        ))}
      </div>
      <button className="carousel-btn carousel-btn--prev" onClick={prev}>‹</button>
      <button className="carousel-btn carousel-btn--next" onClick={next}>›</button>
    </div>
  );
}

// ── Portfolio section ─────────────────────────────────────────
export default function Portfolio({ t }) {
  const ref = useScrollReveal();
  const tp = t.portfolio;

  return (
    <section id="portfolio" className="section-wrapper" ref={ref}>

      <div className="reveal portfolio-header">
        <p className="section-num">{tp.sectionNum}</p>
        <h2 className="section-title">{tp.title}<em>{tp.titleEm}</em></h2>
        <div className="section-divider">
          <div className="section-divider__line" />
          <div className="section-divider__dot" />
        </div>
      </div>

      <div className="portfolio-grid">
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

// ── Card ──────────────────────────────────────────────────────
function PortfolioCard({ index, project, gradient, wide, viewMore }) {
  return (
    <div className={`reveal portfolio-card${wide ? ' portfolio-card--wide' : ''}`}>

      <div className="portfolio-card-image">
        {index === 0
          ? <Carousel images={PROJECT_IMAGES} />
          : (
            <div className="portfolio-card-gradient" style={{ background: gradient }}>
              <span className="portfolio-card-label">Project {toRoman(index + 1)}</span>
              <span className="portfolio-card-number">No.00{index + 1}</span>
            </div>
          )
        }
      </div>

      <div className="portfolio-card-body">
        <p className="portfolio-card-tag">{project.tag}</p>
        <h3 className="portfolio-card-title">{project.title}</h3>
        <p className="portfolio-card-desc">{project.desc}</p>
        <a href="#" className="portfolio-card-arrow">{viewMore} →</a>
      </div>

    </div>
  );
}

function toRoman(n) {
  return ['I', 'II', 'III', 'IV', 'V'][n - 1] ?? n;
}
