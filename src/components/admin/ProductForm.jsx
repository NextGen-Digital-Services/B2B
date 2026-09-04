import React, { useState } from 'react';
import { Upload, Trash2, Save, X } from 'lucide-react';
import { useCategories } from '../../context/ZycoonContext';
import { uploadProductImage, slugify, newProductShape } from '../../lib/productAdmin';

const inputBase = "w-full bg-ivory border border-border py-2.5 px-4 text-xs font-sans text-ink focus:outline-none focus:border-leather transition-colors duration-300 placeholder-muted";

function Field({ label, children, optional }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted block">
        {label} {optional && <span className="text-muted/50">(optional)</span>}
      </label>
      {children}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="border border-border bg-card">
      <div className="px-6 py-3.5 border-b border-border-light">
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-leather">{title}</h3>
      </div>
      <div className="p-6 space-y-5">{children}</div>
    </div>
  );
}

function isImageUrl(v) {
  return typeof v === 'string' && (v.startsWith('http') || v.startsWith('/') || v.startsWith('data:'));
}

function ImageThumb({ value }) {
  if (isImageUrl(value)) {
    return <img src={value} alt="" className="w-12 h-12 object-cover border border-border" />;
  }
  return <div className="w-12 h-12 border border-border leather-grain" style={{ backgroundColor: value || '#291A13' }} />;
}

export default function ProductForm({ product, onSave, onCancel, onDelete, onToggleActive }) {
  const categories = useCategories();
  const [form, setForm] = useState(() =>
    product ? JSON.parse(JSON.stringify(product)) : newProductShape()
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [colorInput, setColorInput] = useState((form.customization_options.colors || []).join(', '));

  const set = (patch) => setForm((f) => ({ ...f, ...patch }));

  const handleName = (name) => {
    const patch = { name };
    if (!form.slug) patch.slug = slugify(name);
    set(patch);
  };

  const handleSave = async () => {
    if (!form.name.trim()) { setError('Product name is required.'); return; }
    if (!form.slug.trim()) { setError('Slug is required.'); return; }
    setError('');
    setSaving(true);
    try {
      const payload = {
        ...form,
        id: form.id || form.slug,
        slug: slugify(form.slug),
        customization_options: {
          ...form.customization_options,
          colors: colorInput.split(',').map((c) => c.trim()).filter(Boolean),
        },
      };
      await onSave(payload);
    } catch (e) {
      setError(e?.message || 'Save failed. See banner above.');
      setSaving(false);
    }
  };

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    console.log('File selected:', file.name, file.size, file.type);
    setUploading(true);
    setError('');
    
    try {
      const url = await uploadProductImage(file, form.slug);
      console.log('Image URL received:', url?.substring(0, 50) + '...');
      set((f) => ({ ...f, images: [...f.images.filter(isImageUrl), url] }));
      console.log('Image added to form');
    } catch (err) {
      console.error('Upload failed:', err);
      setError(`Upload failed: ${err?.message || 'Unknown error'}`);
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header actions */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted">Product Form</p>
          <p className="text-xs text-ink">
            {product
              ? `Editing: ${product.serial ? product.serial + ' · ' : ''}${product.name}`
              : 'Create a new catalogue entry'}
          </p>
        </div>
        {(product && onToggleActive) && (
          <button
            onClick={() => onToggleActive(form.id, !form.active)}
            className={`text-[9px] uppercase tracking-wider font-mono border px-3 py-1.5 transition-colors duration-300 ${
              form.active ? 'text-leather border-leather/30 hover:border-leather' : 'text-burgundy border-burgundy/30 hover:border-burgundy'
            }`}
          >
            {form.active ? 'Live — click to hide' : 'Hidden — click to publish'}
          </button>
        )}
      </div>

      {error && (
        <div className="border border-burgundy/30 bg-burgundy/5 px-4 py-3 text-xs text-burgundy font-medium">{error}</div>
      )}

      {/* Identity */}
      <Section title="01 · Identity & Serial">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Product Name">
            <input className={inputBase} value={form.name} onChange={(e) => handleName(e.target.value)} placeholder="e.g. Sovereign Full-Grain Handbag" />
          </Field>
          <Field label="Slug">
            <input className={inputBase} value={form.slug} onChange={(e) => set({ slug: e.target.value })} placeholder="auto from name" />
          </Field>
          <Field label="Serial Number">
            <input className={`${inputBase} font-mono`} value={form.serial} onChange={(e) => set({ serial: e.target.value })} placeholder="e.g. ZC-007" />
          </Field>
          <Field label="Category">
            <select className={inputBase} value={form.category_id} onChange={(e) => set({ category_id: e.target.value })}>
              {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </Field>
          <div className="flex items-end space-x-6 pb-1">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" checked={form.is_featured} onChange={(e) => set({ is_featured: e.target.checked })} className="accent-leather" />
              <span className="text-[9px] font-mono uppercase tracking-wider text-muted">Featured</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" checked={form.active !== false} onChange={(e) => set({ active: e.target.checked })} className="accent-leather" />
              <span className="text-[9px] font-mono uppercase tracking-wider text-muted">Active on site</span>
            </label>
          </div>
        </div>
      </Section>

      {/* Details */}
      <Section title="02 · Details">
        <Field label="Description">
          <textarea className={`${inputBase} resize-y`} rows="3" value={form.description} onChange={(e) => set({ description: e.target.value })} placeholder="Short wholesale-facing description…" />
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Field label="Material">
            <input className={inputBase} value={form.material} onChange={(e) => set({ material: e.target.value })} placeholder="e.g. Full-Grain Cowhide" />
          </Field>
          <Field label="Minimum Order (MOQ)">
            <input className={`${inputBase} font-mono`} type="number" value={form.moq} onChange={(e) => set({ moq: Number(e.target.value) })} />
          </Field>
          <Field label="Lead Time (days)">
            <input className={`${inputBase} font-mono`} type="number" value={form.lead_time_days} onChange={(e) => set({ lead_time_days: Number(e.target.value) })} />
          </Field>
        </div>
      </Section>

      {/* Specifications */}
      <Section title="03 · Specifications">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Dimensions" optional>
            <input className={inputBase} value={form.specifications.dimensions || ''} onChange={(e) => set({ specifications: { ...form.specifications, dimensions: e.target.value } })} placeholder="32cm (W) x 24cm (H) x 12cm (D)" />
          </Field>
          <Field label="Weight" optional>
            <input className={inputBase} value={form.specifications.weight || ''} onChange={(e) => set({ specifications: { ...form.specifications, weight: e.target.value } })} placeholder="0.85 kg" />
          </Field>
          <Field label="Hardware" optional>
            <input className={inputBase} value={form.specifications.hardware || ''} onChange={(e) => set({ specifications: { ...form.specifications, hardware: e.target.value } })} placeholder="Antique Solid Brass" />
          </Field>
          <Field label="Lining" optional>
            <input className={inputBase} value={form.specifications.lining || ''} onChange={(e) => set({ specifications: { ...form.specifications, lining: e.target.value } })} placeholder="Premium 10 oz Cotton Canvas" />
          </Field>
        </div>
      </Section>

      {/* Colors */}
      <Section title="04 · Available Colors">
        <Field label="Color names (comma separated)">
          <input className={inputBase} value={colorInput} onChange={(e) => setColorInput(e.target.value)} placeholder="Oxblood Burgundy, Cognac Tan, Charcoal Noir" />
        </Field>
      </Section>

      {/* Images */}
      <Section title="05 · Images">
        <p className="text-[10px] text-muted leading-relaxed">
          Upload product photos (first one becomes the card thumbnail) or add hex swatch colors. Colours shown here map 1:1 to the Available Colors list above.
        </p>
        <div className="flex flex-wrap gap-3 items-start">
          {form.images.map((img, idx) => (
            <div key={idx} className="relative group">
              <ImageThumb value={img} />
              <button
                onClick={() => set({ images: form.images.filter((_, i) => i !== idx) })}
                className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 bg-ink text-ivory hover:bg-burgundy transition-colors"
                title="Remove"
              >
                <X className="w-3 h-3" strokeWidth={1.5} />
              </button>
            </div>
          ))}
          <label className={`flex items-center justify-center w-12 h-12 border border-dashed border-border text-muted cursor-pointer hover:border-leather hover:text-leather transition-colors ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
            {uploading ? '…' : <Upload className="w-4 h-4" strokeWidth={1.5} />}
            <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
          </label>
          <div className="flex gap-3">
            {['#291A13', '#4A1420', '#A9683B', '#6B5A4E', '#C6A15B'].map((hex) => (
              <button
                key={hex}
                onClick={() => set((f) => ({ ...f, images: [...f.images, hex] }))}
                className="w-8 h-8 border border-border hover:border-ink transition-colors leather-grain"
                style={{ backgroundColor: hex }}
                title={`Add swatch ${hex}`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Actions */}
      <div className="flex items-center justify-between pt-2">
        <div>
          {product && onDelete && (
            <button
              onClick={() => { if (window.confirm(`Delete "${product.name}"?`)) onDelete(product.id); }}
              className="flex items-center space-x-2 text-[10px] uppercase tracking-wider text-burgundy hover:text-burgundy/70 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" strokeWidth={1.5} /> Delete Product
            </button>
          )}
        </div>
        <div className="flex items-center space-x-3">
          <button onClick={onCancel} className="px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-muted hover:text-ink transition-colors">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center space-x-2 bg-ink text-ivory px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-espresso transition-colors duration-300 disabled:opacity-50"
          >
            <Save className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>{saving ? 'Saving…' : 'Save Product'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}