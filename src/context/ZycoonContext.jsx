import React, { createContext, useContext, useEffect, useCallback, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { products as staticProducts } from '../data/products';
import { categories as staticCategories } from '../data/categories';
import { testimonials as staticTestimonials } from '../data/testimonials';
import { galleryItems } from '../data/gallery';

const KEYS = {
  products: 'zycoon_local_products',
  categories: 'zycoon_local_categories',
  testimonials: 'zycoon_local_testimonials',
  gallery: 'zycoon_local_gallery',
  reviews: 'zycoon_local_reviews',
};

const seed = {
  products: staticProducts,
  categories: staticCategories,
  testimonials: staticTestimonials,
  gallery: galleryItems,
  reviews: [],
};

function readLocal(key) {
  try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; }
}

const withDefaults = {
  products: (r) => ({
    ...r,
    serial: r.serial || '',
    price_tiers: Array.isArray(r.price_tiers) ? r.price_tiers : [],
    specifications: r.specifications || {},
    customization_options: r.customization_options || { colors: [], logo_branding: true, custom_packaging: true },
    images: Array.isArray(r.images) ? r.images : [],
    active: r.active !== false,
    is_featured: !!r.is_featured,
  }),
  categories: (r) => r,
  testimonials: (r) => r,
  gallery: (r) => r,
  reviews: (r) => r,
};

const ZycoonContext = createContext({
  products: seed.products,
  categories: seed.categories,
  testimonials: seed.testimonials,
  gallery: seed.gallery,
  reviews: [],
  loading: false,
  refresh: () => {},
});

export function ZycoonProvider({ children }) {
  const [state, setState] = useState(seed);
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const next = { ...seed };
      if (supabase) {
        const tables = [
          { key: 'products', table: 'products', query: (q) => q.select('*').eq('active', true).order('serial', { ascending: true }) },
          { key: 'categories', table: 'categories', query: (q) => q.select('*').eq('active', true).order('name', { ascending: true }) },
          { key: 'testimonials', table: 'testimonials', query: (q) => q.select('*').eq('active', true).order('created_at', { ascending: false }) },
          { key: 'gallery', table: 'gallery', query: (q) => q.select('*').eq('active', true).order('sort_order', { ascending: true }) },
          { key: 'reviews', table: 'product_reviews', query: (q) => q.select('*').eq('active', true).order('created_at', { ascending: false }) },
        ];
        await Promise.all(tables.map(async ({ key, table, query }) => {
          const { data, error } = await query(supabase.from(table));
          if (!error && data && data.length) next[key] = data.map(withDefaults[key]);
        }));
      } else {
        Object.keys(KEYS).forEach((key) => {
          const local = readLocal(KEYS[key]);
          if (local && local.length) next[key] = local.map(withDefaults[key]);
        });
      }
      setState(next);
    } catch {
      // keep static fallback
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  return (
    <ZycoonContext.Provider value={{ ...state, loading, refresh }}>
      {children}
    </ZycoonContext.Provider>
  );
}

export const useProducts = () => useContext(ZycoonContext).products;
export const useCategories = () => useContext(ZycoonContext).categories;
export const useTestimonials = () => useContext(ZycoonContext).testimonials;
export const useGallery = () => useContext(ZycoonContext).gallery;
export const useProductReviews = () => useContext(ZycoonContext).reviews;
export const useContentRefresh = () => useContext(ZycoonContext).refresh;