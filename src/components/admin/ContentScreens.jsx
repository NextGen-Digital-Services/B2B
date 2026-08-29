import React, { useEffect, useState } from 'react';
import CrudSection from './CrudSection';
import { getAllContent, upsertContent, deleteContent, toggleContent, newCategory, newTestimonial, newReview, newGalleryItem } from '../../lib/contentAdmin';
import { uploadProductImage } from '../../lib/productAdmin';
import { useProducts, useContentRefresh } from '../../context/ZycoonContext';

function useContentSection(key, emptyText) {
  const [items, setItems] = useState([]);
  const refreshSite = useContentRefresh();

  const load = async () => setItems(await getAllContent(key));
  useEffect(() => { load(); }, []);

  const save = async (item) => { await upsertContent(key, item); await Promise.all([load(), refreshSite()]); };
  const remove = async (id) => { await deleteContent(key, id); await Promise.all([load(), refreshSite()]); };
  const toggle = async (id) => { await toggleContent(key, id, items); await Promise.all([load(), refreshSite()]); };

  return { items, save, remove, toggle, emptyText };
}

/* ── Product Reviews ────────────────────────────────────────── */
export function ReviewsAdmin() {
  const products = useProducts();
  const { items, save, remove, toggle } = useContentSection('reviews', 'No reviews yet.');

  const productName = (id) => products.find((p) => p.id === id)?.name || '(deleted product)';

  return (
    <CrudSection
      eyebrow="Content · Product Reviews"
      title="Client Reviews"
      items={items}
      newItem={newReview}
      idOf={(p) => p.id}
      rowTitle={(r) => r.author}
      rowSub={(r) => `${productName(r.product_id)}${r.comment ? ' — ' + r.comment : ''}`}
      onSave={save}
      onDelete={remove}
      onToggle={toggle}
      emptyText="No reviews yet. Click Add to attach a review to a product."
      countLabel={`${items.length} reviews · shown next to ${products.length} products`}
      fields={[
        { key: 'product_id', label: 'Product', type: 'select', required: true, options: products.map((p) => ({ value: p.id, label: `${p.serial || ''} ${p.name}`.trim() })) },
        { key: 'author', label: 'Author / Company', type: 'text', required: true, placeholder: 'e.g. Vance & Co. Retail Group' },
        { key: 'rating', label: 'Rating (1–5)', type: 'number', min: 1, max: 5 },
        { key: 'comment', label: 'Review', type: 'textarea', rows: 3, placeholder: 'What did they say about this product?' },
      ]}
    />
  );
}

/* ── Site Testimonials ──────────────────────────────────────── */
export function TestimonialsAdmin() {
  const { items, save, remove, toggle } = useContentSection('testimonials', 'No testimonials yet.');

  return (
    <CrudSection
      eyebrow="Content · Site Reviews"
      title="Testimonials (Home Page)"
      items={items}
      newItem={newTestimonial}
      idOf={(t) => t.id}
      rowTitle={(t) => t.client_name}
      rowSub={(t) => `${t.company_name}${t.country ? ' · ' + t.country : ''}`}
      onSave={save}
      onDelete={remove}
      onToggle={toggle}
      emptyText="No testimonials yet. These appear in the Verified Buyer Testimonials section."
      countLabel={`${items.length} testimonials`}
      fields={[
        { key: 'client_name', label: 'Client Name', type: 'text', required: true, placeholder: 'e.g. Marcus Vance' },
        { key: 'company_name', label: 'Company', type: 'text', placeholder: 'e.g. Vance & Co. Retail Group' },
        { key: 'country', label: 'Country', type: 'text', placeholder: 'e.g. United Kingdom' },
        { key: 'quote', label: 'Quote', type: 'textarea', required: true, rows: 4, placeholder: 'Their experience working with Zycoon…' },
        { key: 'rating', label: 'Star Rating (0 = none)', type: 'number', min: 0, max: 5 },
      ]}
    />
  );
}

/* ── Gallery ────────────────────────────────────────────────── */
export function GalleryAdmin() {
  const { items, save, remove, toggle } = useContentSection('gallery', 'No gallery entries yet.');

  return (
    <CrudSection
      eyebrow="Content · Workshop Gallery"
      title="Gallery Images"
      items={items}
      newItem={newGalleryItem}
      idOf={(g) => g.id}
      previewKey="image"
      rowTitle={(g) => g.title}
      rowSub={(g) => g.description || (g.category_id ? g.category_id : '')}
      onSave={save}
      onDelete={remove}
      onToggle={toggle}
      onUpload={(file) => uploadProductImage(file, 'gallery')}
      emptyText="No gallery entries yet. Add workshop or product photos to the /gallery page."
      countLabel={`${items.length} photos`}
      fields={[
        { key: 'image', label: 'Photo or Color', type: 'image' },
        { key: 'title', label: 'Title', type: 'text', required: true, placeholder: 'e.g. Precision Hydraulic Die Cutting' },
        { key: 'description', label: 'Description', type: 'textarea', rows: 3 },
        { key: 'sort_order', label: 'Order', type: 'number' },
      ]}
    />
  );
}

/* ── Categories ─────────────────────────────────────────────── */
export function CategoriesAdmin() {
  const { items, save, remove, toggle } = useContentSection('categories', 'No categories yet.');

  return (
    <CrudSection
      eyebrow="Taxonomy · Categories"
      title="Product Categories"
      items={items}
      newItem={newCategory}
      idOf={(c) => c.id || c.slug}
      previewKey="image_color"
      rowTitle={(c) => c.name}
      rowSub={(c) => c.description}
      onSave={save}
      onDelete={remove}
      onToggle={toggle}
      autoSlug
      emptyText="No categories yet. New categories appear in the Products form and category filters."
      countLabel={`${items.length} categories · selectable when adding a product`}
      fields={[
        { key: 'name', label: 'Category Name', type: 'text', required: true, placeholder: 'e.g. Wallets & Small Goods' },
        { key: 'slug', label: 'Slug', type: 'text', required: true, placeholder: 'e.g. wallets' },
        { key: 'description', label: 'Description', type: 'textarea', rows: 3 },
        { key: 'image_color', label: 'Swatch Color', type: 'hex' },
      ]}
    />
  );
}