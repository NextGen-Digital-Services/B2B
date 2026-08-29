import { supabase } from './supabaseClient';

export const PRODUCT_FIELDS = [
  'id',
  'name',
  'slug',
  'serial',
  'category_id',
  'description',
  'material',
  'moq',
  'price_tiers',
  'specifications',
  'customization_options',
  'images',
  'lead_time_days',
  'is_featured',
  'active',
  'created_at',
];

// ── Demo mode (no Supabase keys) ──────────────────────────────
const LOCAL_KEY = 'zycoon_local_products';
const NO_SUPABASE = 'Supabase not configured. Add VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY to a .env file, then run the schema in supabase/schema.sql';

export const isSupabaseReady = () => !!supabase;

function readLocal() {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]'); } catch { return []; }
}
function writeLocal(rows) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(rows));
}

// ── mapping ───────────────────────────────────────────────────
function mapRow(r) {
  return {
    id: r.id,
    name: r.name,
    slug: r.slug,
    serial: r.serial || '',
    category_id: r.category_id || 'handbags',
    description: r.description || '',
    material: r.material || '',
    moq: typeof r.moq === 'number' ? r.moq : 50,
    price_tiers: Array.isArray(r.price_tiers) ? r.price_tiers : [],
    specifications: r.specifications || {},
    customization_options: r.customization_options || { colors: [], logo_branding: true, custom_packaging: true },
    images: Array.isArray(r.images) ? r.images : [],
    lead_time_days: typeof r.lead_time_days === 'number' ? r.lead_time_days : 30,
    is_featured: !!r.is_featured,
    active: r.active !== false,
    created_at: r.created_at,
  };
}

// mirror of src/data/products.js used as the local "seed"
async function loadStaticProducts() {
  const mod = await import('../data/products');
  return mod.products.map((p, i) => mapRow({ ...p, serial: p.serial || `ZC-${String(i + 1).padStart(3, '0')}`, created_at: p.created_at }));
}

export async function getAllProducts() {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('products').select('*').order('serial', { ascending: true });
      if (!error && data) return data.map(mapRow);
      throw error;
    } catch (e) {
      if (e?.message?.includes('does not exist') || e?.code === '42P01') {
        throw new Error('Products table missing. Run supabase/schema.sql in the Supabase SQL editor.');
      }
      throw e;
    }
  }
  return readLocal().length ? readLocal().map(mapRow) : loadStaticProducts();
}

export async function upsertProduct(product) {
  const row = {
    id: product.id,
    name: product.name,
    slug: product.slug,
    serial: product.serial || '',
    category_id: product.category_id,
    description: product.description || '',
    material: product.material || '',
    moq: Number(product.moq) || 50,
    price_tiers: product.price_tiers,
    specifications: product.specifications,
    customization_options: product.customization_options,
    images: product.images,
    lead_time_days: Number(product.lead_time_days) || 30,
    is_featured: !!product.is_featured,
    active: product.active !== false,
  };
  if (supabase) {
    const { error } = await supabase.from('products').upsert(row, { onConflict: 'id' });
    if (error) throw error;
    return;
  }
  let rows = readLocal();
  if (!rows.length) {
    const seed = await loadStaticProducts();
    rows = seed.map((p) => ({
      id: p.id, name: p.name, slug: p.slug, serial: p.serial, category_id: p.category_id,
      description: p.description, material: p.material, moq: p.moq, price_tiers: p.price_tiers,
      specifications: p.specifications, customization_options: p.customization_options,
      images: p.images, lead_time_days: p.lead_time_days, is_featured: p.is_featured,
      active: true, created_at: p.created_at,
    }));
  }
  const idx = rows.findIndex((r) => r.id === row.id);
  row.created_at = idx >= 0 ? rows[idx].created_at : new Date().toISOString();
  if (idx >= 0) rows[idx] = row; else rows.push(row);
  writeLocal(rows);
}

export async function deleteProduct(id) {
  if (supabase) {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) throw error;
    return;
  }
  writeLocal(readLocal().filter((r) => r.id !== id));
}

export async function setProductActive(id, active) {
  if (supabase) {
    const { error } = await supabase.from('products').update({ active }).eq('id', id);
    if (error) throw error;
    return;
  }
  const rows = readLocal();
  const idx = rows.findIndex((r) => r.id === id);
  if (idx >= 0) rows[idx].active = active;
  writeLocal(rows);
}

// ── image upload ──────────────────────────────────────────────
export async function uploadProductImage(file, slug = 'image') {
  if (!supabase) {
    // demo mode: store as base64 data url
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  const ext = (file.name.split('.').pop() || 'png').toLowerCase();
  const cleanSlug = slug.replace(/[^a-z0-9-]/gi, '').slice(0, 40) || 'image';
  const path = `${Date.now()}-${cleanSlug}.${ext}`;
  const { error } = await supabase.storage
    .from('product-images')
    .upload(path, file, { upsert: true, cacheControl: '3600' });
  if (error) throw error;
  const { data } = supabase.storage.from('product-images').getPublicUrl(path);
  return data.publicUrl;
}

// ── misc ──────────────────────────────────────────────────────
export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function newProductShape() {
  return {
    id: '',
    name: '',
    slug: '',
    serial: '',
    category_id: 'handbags',
    description: '',
    material: '',
    moq: 50,
    price_tiers: [{ min_qty: 50, max_qty: 99, unit_price: 50 }, { min_qty: 100, max_qty: 249, unit_price: 40 }],
    specifications: { dimensions: '', weight: '', hardware: '', lining: '' },
    customization_options: { colors: [], logo_branding: true, custom_packaging: true },
    images: [],
    lead_time_days: 30,
    is_featured: false,
    active: true,
  };
}

export { NO_SUPABASE };