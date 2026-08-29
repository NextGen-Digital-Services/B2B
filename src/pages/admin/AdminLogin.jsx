import React, { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { B2B_CONFIG } from '../../utils/helpers';

export default function AdminLogin({ onSuccess }) {
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const expected = import.meta.env.VITE_ADMIN_PASS || 'zycoon2026';

  const submit = (e) => {
    e.preventDefault();
    if (pass === expected) {
      onSuccess();
    } else {
      setError('Incorrect password. Access denied.');
      setPass('');
    }
  };

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="border border-border bg-card">
          <div className="h-1 bg-gold" />
          <div className="border-b border-border-light px-8 py-8 text-center">
            <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted">Admin Console</p>
            <h1 className="text-4xl font-serif text-ink mt-2">{B2B_CONFIG.brandName}</h1>
            <p className="text-[10px] text-muted font-mono uppercase tracking-wider mt-1">Products · Serial · Images</p>
          </div>

          <form onSubmit={submit} className="p-8 space-y-5">
            <div className="space-y-2">
              <label className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted flex items-center">
                <Lock className="w-3 h-3 mr-1.5" strokeWidth={1.5} /> Password
              </label>
              <input
                type="password"
                value={pass}
                onChange={(e) => { setPass(e.target.value); setError(''); }}
                autoFocus
                placeholder="Enter admin password"
                className="w-full bg-ivory border border-border py-2.5 px-4 text-xs font-sans text-ink focus:outline-none focus:border-leather transition-colors duration-300 placeholder-muted"
              />
            </div>

            {error && (
              <p className="border border-burgundy/30 bg-burgundy/5 py-2.5 px-3 text-[11px] text-burgundy font-medium">{error}</p>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-ink text-ivory px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-espresso transition-colors duration-300"
            >
              <span>Unlock Console</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>

            <p className="text-center text-[9px] text-muted font-mono tracking-wider">
              Default: <span className="text-leather">zycoon2026</span> — set VITE_ADMIN_PASS to change
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}