import { useEffect } from 'react';

interface CitySectionProps {
  id: string;
  cityLabel: string;
  cityName: string;
  cityNameItalic: string;
  cityKey: string;
}

const models = [
  { name: 'Mai Linh', age: 22, district: 'Quận 1', price: 16, height: 162, weight: 50, views: 185.4, tags: ['Nhiệt tình', 'Chiều chuộng'], vip: false },
  { name: 'Thùy Tiên', age: 20, district: 'Quận 3', price: 15, height: 165, weight: 52, views: 172.1, tags: ['Tính cảm', 'Lắng nghe'], vip: true },
  { name: 'Hà Mỹ', age: 19, district: 'Quận 10', price: 13.5, height: 160, weight: 48, views: 165.3, tags: ['Hài hước', 'Dễ thương'], vip: false },
  { name: 'Khánh Huyền', age: 23, district: 'Bình Thạnh', price: 13, height: 163, weight: 51, views: 158.9, tags: ['Qua đêm'], vip: false },
  { name: 'Mỹ Linh', age: 21, district: 'Quận 2', price: 11.5, height: 168, weight: 54, views: 149.8, tags: ['Vui vẻ'], vip: true },
  { name: 'Phương Anh', age: 24, district: 'Quận 2', price: 8, height: 155, weight: 46, views: 145.2, tags: ['Chiều chuộng'], vip: false },
  { name: 'Ngọc Hân', age: 20, district: 'Quận 5', price: 12, height: 161, weight: 49, views: 162.5, tags: ['Tính cảm'], vip: false },
  { name: 'Linh Đan', age: 22, district: 'Quận 7', price: 14, height: 167, weight: 53, views: 170.8, tags: ['Nhiệt tình'], vip: true },
  { name: 'Hoa Hương', age: 21, district: 'Quận 1', price: 9.5, height: 159, weight: 47, views: 155.6, tags: ['Dễ thương'], vip: false },
  { name: 'Vy Khanh', age: 23, district: 'Bình Thạnh', price: 11, height: 164, weight: 50, views: 168.3, tags: ['Qua đêm'], vip: false },
  { name: 'Tâm Nhi', age: 20, district: 'Quận 3', price: 10, height: 158, weight: 45, views: 152.1, tags: ['Hài hước'], vip: false },
  { name: 'Diễm My', age: 24, district: 'Quận 10', price: 15.5, height: 166, weight: 52, views: 174.9, tags: ['Lắng nghe', 'Vui vẻ'], vip: true },
];

export default function CitySection({ id, cityLabel, cityName, cityNameItalic, cityKey }: CitySectionProps) {
  useEffect(() => {
    const track = document.getElementById(`track-${cityKey}`);
    if (!track) return;

    track.innerHTML = models.map((model, index) => {
      const rank = index < 3 ? index + 1 : 0;
      const vipClass = model.vip ? 'vip' : '';
      const rankClass = rank > 0 ? `rank-${rank}` : '';

      return `
        <div class="model-card">
          <div class="card-img-wrap">
            <div class="card-img-placeholder">${String(index + 1).padStart(2, '0')}</div>
            ${rank > 0 ? `<div class="badge-rank ${rankClass}">${rank}</div>` : ''}
            ${model.vip ? '<div class="badge-vip">VIP</div>' : ''}
            <div class="card-gradient"></div>
          </div>
          <div class="card-info">
            <div class="card-name">${model.name}</div>
            <div class="card-age-area">${model.age} tuổi · ${model.district}</div>
            <div class="card-stats">
              <div class="card-stat-row">
                <span class="cs-label">Giá</span>
                <span class="cs-val gold">${model.price}tr</span>
              </div>
              <div class="card-stat-row">
                <span class="cs-label">Cao / Nặng</span>
                <span class="cs-val">${model.height}cm / ${model.weight}kg</span>
              </div>
              <div class="card-stat-row">
                <span class="cs-label">Lượt xem</span>
                <span class="cs-val gold">${model.views}k</span>
              </div>
            </div>
            <div class="card-tags">
              ${model.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
            </div>
            <button class="card-btn">Xem chi tiết</button>
          </div>
        </div>
      `;
    }).join('');
  }, [cityKey]);

  const handleSlide = (direction: number) => {
    const track = document.getElementById(`track-${cityKey}`);
    if (!track) return;

    const scrollAmount = 230 * direction;
    track.scrollBy({
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
            <button className="cnav" onClick={() => handleSlide(-1)}>←</button>
            <button className="cnav" onClick={() => handleSlide(1)}>→</button>
          </div>
        </div>
      </div>
      <div className="carousel-outer">
        <div className="carousel-track" id={`track-${cityKey}`}>
        </div>
      </div>
    </section>
  );
}
