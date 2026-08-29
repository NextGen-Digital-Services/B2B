import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, ExternalLink, LogOut, Database, HardDrive } from 'lucide-react';
import { getAllProducts, isSupabaseReady, deleteProduct, setProductActive, upsertProduct, NO_SUPABASE } from '../../lib/productAdmin';
import { B2B_CONFIG } from '../../utils/helpers';
import AdminProductsTable from '../../components/admin/AdminProductsTable';
import ProductForm from '../../components/admin/ProductForm';
import { ReviewsAdmin, TestimonialsAdmin, GalleryAdmin, CategoriesAdmin } from '../../components/admin/ContentScreens';
import { useContentRefresh } from '../../context/ZycoonContext';

const NAV = [
  {
    group: 'Catalogue',
    tabs: [
      { id: 'products', label: 'Products' },
      { id: 'add', label: 'Add Product' },
    ],
  },
  {
    group: 'Content',
    tabs: [
      { id: 'reviews', label: 'Reviews' },
      { id: 'testimonials', label: 'Testimonials' },
      { id: 'gallery', label: 'Gallery' },
    ],
  },
  {
    group: 'Taxonomy',
    tabs: [
      { id: 'categories', label: 'Categories' },
    ],
  },
];

const TITLES = {
  products: 'Product Inventory',
  add: 'Add New Product',
  reviews: 'Product Reviews',
  testimonials: 'Testimonials',
  gallery: 'Gallery',
  categories: 'Categories',
};

function StatusBadge({ ready }) {
  return ready ? (
    <span className="inline-flex items-center space-x-1.5 text-[9px] font-mono uppercase tracking-wider text-leather">
      <Database className="w-3 h-3" strokeWidth={1.5} /> Supabase Connected
    </span>
  ) : (
    <span className="inline-flex items-center space-x-1.5 text-[9px] font-mono uppercase tracking-wider text-burgundy">
      <HardDrive className="w-3 h-3" strokeWidth={1.5} /> Demo Mode — Local Browser Storage
    </span>
  );
}

export default function AdminDashboard({ onLogout }) {
  const refresh = useContentRefresh();
  const [tab, setTab] = useState('products');
  const [editing, setEditing] = useState(null);
  const [products, setProducts] = useState(null);
  const [banner, setBanner] = useState('');
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    setLoading(true);
    try {
      setProducts(await getAllProducts());
      setBanner('');
    } catch (e) {
      setBanner(e?.message || 'Failed to load products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadProducts(); }, []);

  const saveProduct = async (product) => {
    try {
      await upsertProduct(product);
      await Promise.all([loadProducts(), refresh()]);
      setTab('products');
      setEditing(null);
    } catch (e) {
      setBanner(e?.message || 'Save failed.');
      throw e;
    }
  };

  const toggleActive = async (id, active) => {
    try {
      await setProductActive(id, active);
      await Promise.all([loadProducts(), refresh()]);
    } catch (e) {
      setBanner(e?.message || 'Update failed.');
    }
  };

  const deleteProductById = async (id) => {
    await deleteProduct(id);
    await Promise.all([loadProducts(), refresh()]);
  };

  const isContentTab = ['reviews', 'testimonials', 'gallery', 'categories'].includes(tab);

  return (
    <div className="min-h-screen flex bg-ivory text-ink">
      {/* ── Sidebar ── */}
      <aside className="w-56 lg:w-64 bg-ink text-ivory flex-shrink-0 flex flex-col">
        <div className="px-6 py-7 border-b border-ivory/10">
          <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-gold/70">Admin Console</p>
          <h1 className="text-3xl font-serif text-ivory mt-1 leading-none">{B2B_CONFIG.brandName}</h1>
          <p className="text-[9px] text-ivory/40 font-mono uppercase tracking-wider mt-2">Bags & Backpacks · B2B</p>
        </div>

        <nav className="flex-1 px-4 py-5 overflow-y-auto space-y-5">
          {NAV.map((group) => (
            <div key={group.group}>
              <p className="px-4 mb-1.5 text-[8px] font-mono uppercase tracking-[0.3em] text-ivory/30">{group.group}</p>
              <div className="space-y-0.5">
                {group.tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => { setTab(t.id); setEditing(null); }}
                    className={`w-full text-left px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 border-l-2 ${
                      tab === t.id
                        ? 'border-gold text-gold bg-ivory/5'
                        : 'border-transparent text-ivory/50 hover:text-ivory hover:border-ivory/20'
                    }`}
                  >
                    {t.id === 'products' ? `Products (${products ? products.length : '…'})` : t.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="px-6 py-6 space-y-3 border-t border-ivory/10">
          <Link
            to="/"
            className="flex items-center space-x-2 text-[9px] uppercase tracking-wider text-ivory/50 hover:text-gold transition-colors"
          >
            <ExternalLink className="w-3 h-3" strokeWidth={1.5} /> View Site
          </Link>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 text-[9px] uppercase tracking-wider text-ivory/50 hover:text-gold transition-colors"
          >
            <LogOut className="w-3 h-3" strokeWidth={1.5} /> Logout
          </button>
        </div>
      </aside>

      {/* ── Content ── */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-card border-b border-border px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted">
              {isContentTab ? 'Manage Content' : 'Manage Catalogue'}
            </p>
            <h2 className="text-3xl font-serif text-ink mt-1">
              {editing ? 'Edit Product' : TITLES[tab]}
            </h2>
          </div>
          <div className="flex items-center space-x-5">
            <StatusBadge ready={isSupabaseReady()} />
            {tab === 'products' && (
              <button
                onClick={() => { setTab('add'); setEditing(null); }}
                className="flex items-center space-x-2 bg-ink text-ivory px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-espresso transition-colors duration-300"
              >
                <Plus className="w-3.5 h-3.5" strokeWidth={1.5} /> Add Product
              </button>
            )}
          </div>
        </header>

        <div className="flex-1 px-6 lg:px-10 py-8">
          {banner && (
            <div className="mb-6 border border-burgundy/30 bg-burgundy/5 px-4 py-3.5 text-xs text-burgundy font-medium flex items-start space-x-2">
              <span>{banner}</span>
              <span className="text-burgundy/60 font-mono text-[10px]">{!isSupabaseReady() && NO_SUPABASE}</span>
            </div>
          )}

          {tab === 'add' && (
            <ProductForm
              key="new"
              product={null}
              onSave={saveProduct}
              onCancel={() => setTab('products')}
              onDelete={null}
              onToggleActive={null}
            />
          )}

          {tab === 'products' && !editing && (
            loading ? (
              <p className="text-xs text-muted font-mono uppercase tracking-wider">Loading catalogue…</p>
            ) : (
              <AdminProductsTable
                products={products || []}
                onEdit={(p) => { setEditing(p); setTab('products'); }}
                onAdd={() => setTab('add')}
                onToggleActive={toggleActive}
                onDelete={deleteProductById}
              />
            )
          )}

          {tab === 'products' && editing && (
            <ProductForm
              key={editing.id}
              product={editing}
              onSave={saveProduct}
              onCancel={() => { setEditing(null); setTab('products'); }}
              onDelete={async (id) => { await deleteProductById(id); setEditing(null); setTab('products'); }}
              onToggleActive={(id, active) => toggleActive(id, active)}
            />
          )}

          {tab === 'reviews' && <ReviewsAdmin />}
          {tab === 'testimonials' && <TestimonialsAdmin />}
          {tab === 'gallery' && <GalleryAdmin />}
          {tab === 'categories' && <CategoriesAdmin />}
        </div>
      </div>
    </div>
  );
}