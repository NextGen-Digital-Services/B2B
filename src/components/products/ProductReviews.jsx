import React from 'react';
import { Star } from 'lucide-react';

export default function ProductReviews({ reviews }) {
  if (!reviews || !reviews.length) return null;

  const avg = Math.round((reviews.reduce((s, r) => s + (r.rating || 0), 0) / reviews.length) * 10) / 10;

  return (
    <div className="border-t border-border pt-12 mt-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted">Buyer Feedback</p>
          <h3 className="text-2xl sm:text-3xl font-serif text-ink mt-1 leading-tight">Client Reviews</h3>
        </div>
        <div className="text-right">
          <p className="text-2xl font-serif text-leather">{avg}</p>
          <div className="flex items-center space-x-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} className={`w-3 h-3 ${n <= Math.round(avg) ? 'text-gold fill-gold' : 'text-border'}`} strokeWidth={1.5} />
            ))}
          </div>
          <p className="text-[9px] font-mono uppercase tracking-wider text-muted mt-1">{reviews.length} reviews</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {reviews.map((r) => (
          <div key={r.id} className="border border-border bg-card p-6 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-sans font-medium text-ink">{r.author}</p>
              <div className="flex items-center space-x-0.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className={`w-3 h-3 ${n <= (r.rating || 0) ? 'text-gold fill-gold' : 'text-border'}`}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
            </div>
            {r.comment && (
              <p className="text-xs text-muted leading-relaxed italic font-serif">{r.comment}</p>
            )}
            {r.created_at && (
              <p className="text-[9px] font-mono uppercase tracking-wider text-muted/70">
                {new Date(r.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}