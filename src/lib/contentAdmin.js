import { supabase } from './supabaseClient';
import { slugify } from './productAdmin';

const nid = (prefix) => `${prefix}-${Date.now()}`;

function localKey(key) { return `zycoon_local_${key}`; }

function readLocal(key) {
  try { return JSON.parse(localStorage.getItem(localKey(key)) || '[]'); } catch { return []; }
}
function writeLocal(key, rows) {
  localStorage.setItem(localKey(key), JSON.stringify(rows));
}

async function loadStatic(key) {
  const mod = await import(`../data/${key}.js`);
  if (key === 'categories') return mod.categories;
  if (key === 'testimonials') return mod.testimonials;
  if (key === 'gallery') return mod.galleryItems;
  return [];
}

async function crud(key, { get = true, row = null, id = null } = {}) {
  const tableMap = { products: 'products', categories: 'categories', testimonials: 'testimonials', gallery: 'gallery', reviews: 'product_reviews' };
  const table = tableMap[key];
  const local = localKey(key);

  if (supabase) {
    if (get) {
      const { data, error } = await supabase.from(table).select('*').order('created_at', { ascending: false });
      if (error) throw error;
      return data || [];
    }
    if (row) {
      const { error } = await supabase.from(table).upsert(row, { onConflict: 'id' });
      if (error) throw error;
      return;
    }
    if (id) {
      const { error } = await supabase.from(table).delete().eq('id', id);
      if (error) throw error;
      return;
    }
  }

  let rows = readLocal(local);
  if (!rows.length && key !== 'reviews') rows = await loadStatic(key);

  if (get) return rows;
  if (row) {
    const idx = rows.findIndex((r) => r.id === row.id);
    row.created_at = idx >= 0 ? rows[idx].created_at : new Date().toISOString();
    if (idx >= 0) rows[idx] = row; else rows.push(row);
    writeLocal(local, rows);
    return;
  }
  if (id) {
    writeLocal(local, rows.filter((r) => r.id !== id));
  }
}

export async function getAllContent(key) { return crud(key, { get: true }); }

export async function upsertContent(key, row) { await crud(key, { row }); }

export async function deleteContent(key, id) { await crud(key, { id }); }

export async function toggleContent(key, id, list) {
  const target = (await getAllContent(key)).find((r) => r.id === id) || list.find((r) => r.id === id);
  const current = target ? target.active !== false : true;
  return crud(key, {
    row: { ...(target || { id }), active: !current, id },
  });
}

// ── shape helpers ─────────────────────────────────────────────
export function newCategory(name = '') {
  const slug = slugify(name);
  return { id: slug, name, slug, description: '', image_color: '#291A13', active: true };
}

export function newTestimonial() {
  return { id: nid('t'), client_name: '', company_name: '', country: '', quote: '', rating: 0, active: true };
}

export function newReview(productId = '', productName = '') {
  return { id: nid('r'), product_id: productId, product_name: productName, author: '', rating: 5, comment: '', active: true };
}

export function newGalleryItem() {
  return { id: nid('g'), title: '', description: '', image: '', category_id: '', sort_order: 0, active: true };
}

export { slugify };