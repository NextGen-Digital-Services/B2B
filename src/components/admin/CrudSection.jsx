import React, { useState } from 'react';
import { Pencil, Trash2, Plus, Save, Upload, X, Star } from 'lucide-react';
import { slugify } from '../../lib/productAdmin';

const inputBase = "w-full bg-ivory border border-border py-2.5 px-4 text-xs font-sans text-ink focus:outline-none focus:border-leather transition-colors duration-300 placeholder-muted";
const isUrl = (v) => typeof v === 'string' && (v.startsWith('http') || v.startsWith('/') || v.startsWith('data:'));

function Preview({ value }) {
  if (!value) return <div className="w-12 h-12 border border-dashed border-border bg-ivory" />;
  if (isUrl(value)) return <img src={value} alt="" className="w-12 h-12 object-cover border border-border" />;
  return <div className="w-12 h-12 border border-border leather-grain" style={{ backgroundColor: value }} />;
}

export default function CrudSection({
  eyebrow,
  title,
  items,
  fields,
  idOf,
  rowTitle,
  rowSub,
  previewKey,
  onSave,
  onDelete,
  onToggle,
  onUpload,
  newItem,
  emptyText,
  autoSlug,
  countLabel,
}) {
  const [mode, setMode] = useState('list'); // 'list' | 'form'
  const [editing, setEditing] = useState(null); // item being edited, null = adding new
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const openAdd = () => { setEditing(null); setForm(newItem()); setMode('form'); };
  const openEdit = (item) => { setEditing(item); setForm({ ...item }); setMode('form'); };
  const close = () => { setMode('list'); setError(''); };

  const set = (patch) => setForm((f) => ({ ...f, ...patch }));

  const handleName = (name) => {
    const patch = { name };
    if (autoSlug && (!form.slug || editing === null)) patch.slug = slugify(name);
    set(patch);
  };

  const handleUpload = async (file) => {
    setError('');
    try {
      const url = await onUpload(file);
      set({ [fieldByType('image').key]: url });
    } catch (e) {
      setError(e?.message || 'Upload failed.');
    }
  };

  const handleSave = async () => {
    const missing = fields.find((f) => f.required && !String(form[f.key] ?? '').trim());
    if (missing) { setError(`${missing.label} is required.`); return; }
    setError('');
    setSaving(true);
    try {
      const payload = { ...form };
      fields.forEach((f) => {
        if (f.type === 'number') payload[f.key] = Number(payload[f.key]) || 0;
        if (['text', 'textarea', 'hex', 'image'].includes(f.type)) payload[f.key] = String(payload[f.key] ?? '').trim();
        if (f.type === 'select') payload[f.key] = payload[f.key] || '';
      });
      payload.id = editing ? editing.id : idOf(payload);
      if (payload.slug && autoSlug) payload.slug = slugify(payload.slug);
      await onSave(payload, !editing);
      close();
    } catch (e) {
      setError(e?.message || 'Save failed.');
      setSaving(false);
    }
  };

  const fieldByType = (type) => fields.find((f) => f.type === type);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border border-border bg-card px-6 py-4">
        <div className="space-y-1">
          <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted">{eyebrow}</p>
          <h3 className="text-lg font-serif text-ink">{title}</h3>
          <p className="text-[9px] font-mono uppercase tracking-wider text-muted">{countLabel}</p>
        </div>
        {mode === 'list' && (
          <button
            onClick={openAdd}
            className="flex items-center space-x-2 bg-ink text-ivory px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-espresso transition-colors duration-300"
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} /> Add
          </button>
        )}
      </div>

      {/* Form */}
      {mode === 'form' && (
        <div className="border border-border bg-card">
          <div className="px-6 py-3.5 border-b border-border-light flex items-center justify-between">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-leather">
              {editing ? 'Edit Entry' : 'New Entry'}
            </h4>
            <button onClick={close} className="text-muted hover:text-ink transition-colors"><X className="w-4 h-4" strokeWidth={1.5} /></button>
          </div>

          {error && <div className="mx-6 mt-4 border border-burgundy/30 bg-burgundy/5 px-3 py-2.5 text-[11px] text-burgundy font-medium">{error}</div>}

          <div className="p-6 space-y-5">
            {fields.map((f) => {
              if (f.type === 'image') {
                return (
                  <div key={f.key} className="space-y-2">
                    <p className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted">{f.label}</p>
                    <div className="flex items-start space-x-3">
                      <Preview value={form[f.key]} />
                      <label className="flex items-center space-x-2 border border-border px-4 py-2 cursor-pointer text-muted hover:border-leather hover:text-leather transition-colors">
                        <Upload className="w-3.5 h-3.5" strokeWidth={1.5} />
                        <span className="text-[10px] uppercase tracking-wider">Upload Photo</span>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])} />
                      </label>
                      <button
                        onClick={() => set({ [f.key]: '' })}
                        className="text-[10px] uppercase tracking-wider text-muted hover:text-burgundy transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                    <p className="text-[9px] text-muted font-mono">Or paste a value (photo URL / hex color):</p>
                    <input className={inputBase} value={form[f.key] || ''} onChange={(e) => set({ [f.key]: e.target.value })} placeholder="#70482F or https://…" />
                  </div>
                );
              }

              if (f.type === 'number') {
                return (
                  <div key={f.key} className="space-y-1.5">
                    <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted block">{f.label}</label>
                    <input className={`${inputBase} font-mono`} type="number" min={f.min} max={f.max} value={form[f.key] ?? ''} onChange={(e) => set({ [f.key]: e.target.value })} />
                  </div>
                );
              }

              if (f.type === 'select') {
                return (
                  <div key={f.key} className="space-y-1.5">
                    <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted block">{f.label}</label>
                    <select className={inputBase} value={form[f.key] || ''} onChange={(e) => set({ [f.key]: e.target.value })}>
                      <option value="">— select —</option>
                      {(f.options || []).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>
                );
              }

              if (f.type === 'hex') {
                return (
                  <div key={f.key} className="space-y-1.5">
                    <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted block">{f.label}</label>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 border border-border leather-grain" style={{ backgroundColor: form[f.key] || '#291A13' }} />
                      <input className={`${inputBase} font-mono w-32`} value={form[f.key] || ''} onChange={(e) => set({ [f.key]: e.target.value })} placeholder="#70482F" />
                      <div className="flex space-x-1.5">
                        {['#291A13', '#4A1420', '#A9683B', '#6B5A4E', '#C6A15B', '#5A5A3A', '#70482F'].map((h) => (
                          <button key={h} onClick={() => set({ [f.key]: h })} className="w-6 h-6 border border-border hover:border-ink transition-colors" style={{ backgroundColor: h }} title={h} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (f.type === 'textarea') {
                return (
                  <div key={f.key} className="space-y-1.5">
                    <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted block">{f.label}</label>
                    <textarea className={`${inputBase} resize-y`} rows={f.rows || 4} value={form[f.key] || ''} onChange={(e) => set({ [f.key]: e.target.value })} placeholder={f.placeholder} />
                  </div>
                );
              }

              return (
                <div key={f.key} className="space-y-1.5">
                  <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted block">{f.label}</label>
                  <input className={inputBase} value={form[f.key] || ''} onChange={(e) => (f.key === 'name' ? handleName(e.target.value) : set({ [f.key]: e.target.value }))} placeholder={f.placeholder} />
                </div>
              );
            })}
          </div>

          <div className="px-6 py-4 border-t border-border-light flex items-center justify-end space-x-3">
            <button onClick={close} className="px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-muted hover:text-ink transition-colors">Cancel</button>
            <button onClick={handleSave} disabled={saving} className="flex items-center space-x-2 bg-ink text-ivory px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-espresso transition-colors duration-300 disabled:opacity-50">
              <Save className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>{saving ? 'Saving…' : 'Save'}</span>
            </button>
          </div>
        </div>
      )}

      {/* List */}
      {mode === 'list' && (
        <div className="border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-border-light last:border-0 hover:bg-ivory/50 transition-colors">
                    <td className="px-5 py-3 w-16">{previewKey && <Preview value={item[previewKey]} />}</td>
                    <td className="px-2 py-3">
                      <p className="text-xs font-medium text-ink">{rowTitle(item)}</p>
                      {rowSub && <p className="text-[10px] text-muted mt-0.5 line-clamp-1 max-w-md">{rowSub(item)}</p>}
                      {item.rating > 0 && (
                        <div className="flex items-center space-x-0.5 mt-1">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <Star key={n} className={`w-2.5 h-2.5 ${n <= item.rating ? 'text-gold fill-gold' : 'text-border'}`} strokeWidth={1.5} />
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {onToggle && (
                        <button
                          onClick={() => onToggle(item.id)}
                          className={`text-[9px] uppercase tracking-wider font-mono border px-2.5 py-1 transition-colors duration-300 ${
                            item.active !== false
                              ? 'text-leather border-leather/30 hover:border-leather'
                              : 'text-burgundy border-burgundy/30 hover:border-burgundy'
                          }`}
                        >
                          {item.active !== false ? 'Live' : 'Hidden'}
                        </button>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end space-x-2">
                        <button onClick={() => openEdit(item)} className="flex items-center justify-center w-8 h-8 border border-border hover:border-leather/40 hover:bg-leather/5 transition-all duration-300" title="Edit">
                          <Pencil className="w-3.5 h-3.5 text-muted" strokeWidth={1.5} />
                        </button>
                        <button
                          onClick={() => { if (window.confirm(`Delete this entry?`)) onDelete(item.id); }}
                          className="flex items-center justify-center w-8 h-8 border border-border hover:border-burgundy/40 hover:bg-burgundy/5 transition-all duration-300"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-muted" strokeWidth={1.5} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!items.length && <p className="p-8 text-center text-xs text-muted">{emptyText}</p>}
        </div>
      )}
    </div>
  );
}