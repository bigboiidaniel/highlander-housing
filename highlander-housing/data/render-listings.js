// Highlander Housing — Listing Card Renderer
// Shared by listings.html, subleases.html, and index.html

const DISCORD = 'https://discord.gg/YEFmgVtf9A';

async function fetchJSON(path) {
  const res = await fetch(path + '?v=' + Date.now());
  if (!res.ok) throw new Error('Failed to load ' + path);
  return res.json();
}

function leaseCard(l) {
  const imgStyle = l.photo
    ? `background-image:url('${l.photo}');background-size:cover;background-position:center;font-size:0;`
    : '';
  const emoji = l.photo ? '' : '🏡';
  const tags = (l.tags || []).map(t => `<span class="listing-tag">${t}</span>`).join('');
  const areaLine = l.neighborhood ? `${l.area} · ${l.neighborhood}` : l.area;
  return `<div class="listing-card">
    <div class="listing-img" style="${imgStyle}">${emoji}<span class="listing-badge">Full Lease</span></div>
    <div class="listing-body">
      <div class="listing-area">${areaLine}</div>
      <div class="listing-name">${l.description}</div>
      <div class="listing-price">${l.rent}<span>/mo</span></div>
      <div class="listing-meta">
        ${l.available ? `<span class="listing-meta-item">📅 ${l.available}</span>` : ''}
        ${l.neighborhood ? `<span class="listing-meta-item">📍 ${l.neighborhood}</span>` : ''}
      </div>
      ${tags ? `<div class="listing-tags">${tags}</div>` : ''}
      <a href="${DISCORD}" class="listing-cta">Join Discord for Details</a>
    </div>
  </div>`;
}

function subleaseCard(l) {
  const imgStyle = l.photo
    ? `background-image:url('${l.photo}');background-size:cover;background-position:center;font-size:0;`
    : '';
  const emoji = l.photo ? '' : (l.gender ? '🛏️' : '🏠');
  const priceHtml = l.show_rent !== false
    ? `<div class="listing-price">${l.rent}<span>/mo</span></div>`
    : `<div class="listing-price">Rooms Available<span> — Join for pricing</span></div>`;
  const tags = (l.tags || []).map(t => `<span class="listing-tag">${t}</span>`).join('');
  return `<div class="listing-card">
    <div class="listing-img" style="${imgStyle}">${emoji}<span class="listing-badge sublease">Sublease</span></div>
    <div class="listing-body">
      <div class="listing-area">${l.area}</div>
      <div class="listing-name">${l.description}</div>
      ${priceHtml}
      <div class="listing-meta">
        ${l.available ? `<span class="listing-meta-item">📅 ${l.available}</span>` : ''}
        ${l.gender ? `<span class="listing-meta-item">👤 ${l.gender}</span>` : ''}
      </div>
      ${tags ? `<div class="listing-tags">${tags}</div>` : ''}
      <a href="${DISCORD}" class="listing-cta">Join Discord for Details</a>
    </div>
  </div>`;
}

function setGrid(id, html) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = html || `<p class="text-muted t-sm" style="grid-column:1/-1;text-align:center;padding:2rem;">
    No listings right now — <a href="${DISCORD}" style="color:var(--c-blue)">join the Discord</a> for the latest.
  </p>`;
}

function loadingState(id) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = `<p class="text-muted t-sm" style="grid-column:1/-1;text-align:center;padding:2rem;">Loading...</p>`;
}
