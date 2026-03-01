import { useRef } from 'react';

interface CitySectionProps {
  id: string;
  cityLabel: string;
  cityName: string;
  cityNameItalic: string;
}

export default function CitySection({ id, cityLabel, cityName, cityNameItalic }: CitySectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const slide = (direction: number) => {
    if (!trackRef.current) return;

    const cardWidth = 320;
    const gap = 24;
    const scrollAmount = (cardWidth + gap) * direction;

    trackRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="city-section" id={id}>
      <div className="city-header reveal">
        <div className="city-name-wrap">
          <div className="city-label">{cityLabel}</div>
          <h2 className="city-name">
            {cityName} <em>{cityNameItalic}</em>
          </h2>
        </div>
        <div className="city-meta">
          <div className="city-nav-btns">
            <button className="cnav" onClick={() => slide(-1)}>&#8592;</button>
            <button className="cnav" onClick={() => slide(1)}>&#8594;</button>
          </div>
        </div>
      </div>
      <div className="carousel-outer">
        <div className="carousel-track" ref={trackRef}>
        </div>
      </div>
    </section>
  );
}
