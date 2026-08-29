import React from 'react';
import { Pencil, Trash2, Star } from 'lucide-react';
import { useCategories } from '../../context/ZycoonContext';

function ProductThumb({ images }) {
  const first = images?.[0];
  const isUrl = typeof first === 'string' && (first.startsWith('http') || first.startsWith('/') || first.startsWith('data:'));
  if (isUrl) {
    return <img src={first} alt="" className="w-10 h-10 object-cover border border-border" />;
  }
  return <div className="w-10 h-10 border border-border leather-grain" style={{ backgroundColor: first || '#291A13' }} />;
}

export default function AdminProductsTable({ products, onEdit, onAdd, onToggleActive, onDelete }) {
  const categories = useCategories();
  const catName = (id) => categories.find((c) => c.id === id)?.name.split(' ')[0] || id;

  return (
    <div className="border border-border bg-card">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border-light">
        <span className="text-[9px] font-mono uppercase tracking-wider text-muted">
          {products.length} entries · sorted by serial
        </span>
        <button onClick={onAdd} className="text-[9px] uppercase tracking-wider text-leather hover:text-espresso">+ Add</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border-light">
              <th className="px-5 py-2.5 text-[9px] font-mono uppercase tracking-wider text-muted">Serial</th>
              <th className="px-5 py-2.5 text-[9px] font-mono uppercase tracking-wider text-muted">Product</th>
              <th className="px-5 py-2.5 text-[9px] font-mono uppercase tracking-wider text-muted">Category</th>
              <th className="px-5 py-2.5 text-[9px] font-mono uppercase tracking-wider text-muted">MOQ</th>
              <th className="px-5 py-2.5 text-[9px] font-mono uppercase tracking-wider text-muted">Status</th>
              <th className="px-5 py-2.5 text-right text-[9px] font-mono uppercase tracking-wider text-muted">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-border-light last:border-0 hover:bg-ivory/50 transition-colors">
                <td className="px-5 py-3">
                  <span className="text-[10px] font-mono text-leather">{p.serial || '—'}</span>
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center space-x-3">
                    <ProductThumb images={p.images} />
                    <div>
                      <p className="text-xs font-medium text-ink flex items-center space-x-1.5">
                        <span>{p.name}</span>
                        {p.is_featured && <Star className="w-3 h-3 text-gold fill-gold" strokeWidth={1.5} />}
                      </p>
                      <p className="text-[9px] font-mono text-muted mt-0.5">/{p.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-[10px] text-muted">{catName(p.category_id)}</td>
                <td className="px-5 py-3 text-[10px] font-mono text-ink">{p.moq}+</td>
                <td className="px-5 py-3">
                  <button
                    onClick={() => onToggleActive(p.id, !p.active)}
                    className={`text-[9px] uppercase tracking-wider font-mono border px-2.5 py-1 transition-colors duration-300 ${
                      p.active
                        ? 'text-leather border-leather/30 hover:border-leather'
                        : 'text-burgundy border-burgundy/30 hover:border-burgundy'
                    }`}
                    title={p.active ? 'Click to hide from site' : 'Click to make visible'}
                  >
                    {p.active ? 'Live' : 'Hidden'}
                  </button>
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => onEdit(p)}
                      className="flex items-center justify-center w-8 h-8 border border-border hover:border-leather/40 hover:bg-leather/5 transition-all duration-300"
                      title="Edit"
                    >
                      <Pencil className="w-3.5 h-3.5 text-muted" strokeWidth={1.5} />
                    </button>
                    <button
                      onClick={() => { if (window.confirm(`Delete "${p.name}"? This cannot be undone.`)) onDelete(p.id); }}
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

      {!products.length && (
        <p className="p-8 text-center text-xs text-muted">No products yet. Click "+ Add" to create the first one.</p>
      )}
    </div>
  );
}