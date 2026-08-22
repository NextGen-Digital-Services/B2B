import React from 'react';
import { motion } from 'framer-motion';
import { Ship, ReceiptText, FileCheck, Landmark, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import { B2B_CONFIG } from '../utils/helpers';

export default function ExportWholesale() {
  const incoterms = [
    {
      icon: Ship,
      title: 'FOB Kolkata Port (Incoterms 2020)',
      desc: 'Our standard pricing covers transport to Kolkata ocean port, local custom export clearances, and carrier loading fees. Ocean/Air freight bookings are billed to the buyer.'
    },
    {
      icon: Ship,
      title: 'CIF (Cost, Insurance & Freight)',
      desc: 'Upon request, we arrange ocean transit to your target destination port (e.g., Rotterdam, Hamburg, London Gateway, Los Angeles). We handle insurance bookings under Institute Cargo Clauses.'
    }
  ];

  const papers = [
    'Commercial Invoice (stamped for customs)',
    'Detailed Packing List (gross weights & volumes)',
    'Bill of Lading / Sea Waybill (negotiable & copy)',
    'Certificate of Origin (issued by Indian Chamber of Commerce)',
    'GSP Form A / Trade agreement certifications',
    'EU REACH Chemical Declaration & Lab Reports'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-ivory font-sans"
    >
      
      {/* Editorial Header */}
      <section className="bg-primary-dark text-ivory py-20 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gold">
            Global Trade Logistics
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-ivory mt-4 max-w-3xl leading-tight">
            Wholesale Logistics & Shipping Framework
          </h1>
          <p className="mt-6 text-sm sm:text-base text-muted font-light max-w-2xl leading-relaxed">
            Operating as an experienced exporter to {B2B_CONFIG.countriesExported} countries. We streamline customs clearances and secure safe ocean container loading.
          </p>
        </div>
      </section>

      {/* Incoterms Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Delivery terms"
          title="FOB Kolkata Port & Custom CIF Arrangements"
          description="We support international standards to ensure risk transfer is clearly documented at every checkpoint."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {incoterms.map((term, idx) => {
            const Icon = term.icon;
            return (
              <div
                key={idx}
                className="bg-card border border-border p-8 hover:border-gold/30 transition-colors rounded-[2px]"
              >
                <div className="bg-[#FAF5EC] border border-border p-3.5 rounded-[2px] text-cognac inline-block">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-serif text-primary uppercase mt-6 tracking-wide">
                  {term.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-3 leading-relaxed font-light">
                  {term.desc}
                </p>
              </div>
            );
          })}
        </div>

      </section>

      {/* Payment & Documents (Two columns) */}
      <section className="bg-card border-t border-b border-border py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Payment terms (Col 6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-[#FAF5EC] border border-border p-2 rounded-[2px] text-cognac">
                  <Landmark className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-serif text-primary uppercase tracking-wide">
                  Standard Payment Terms
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                To initiate manufacturing runs and lock material batches, we require standard B2B transaction approvals:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-2 border-gold pl-4 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">30% Advance + 70% Balance</h4>
                  <p className="text-[11px] text-muted leading-relaxed">
                    30% advance via bank Telegraphic Transfer (T/T). The remaining 70% balance is payable upon submission of the Bill of Lading (B/L) scan and container sealing receipts.
                  </p>
                </div>
                <div className="border-l-2 border-gold pl-4 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">Irrevocable Letter of Credit (L/C)</h4>
                  <p className="text-[11px] text-muted leading-relaxed">
                    For orders exceeding $50,000, we accept irrevocable Letter of Credit (L/C) at sight issued by recognized international A-grade banks.
                  </p>
                </div>
              </div>
            </div>

            {/* Document Checklist (Col 6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-[#FAF5EC] border border-border p-2 rounded-[2px] text-cognac">
                  <FileCheck className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-serif text-primary uppercase tracking-wide">
                  Export Documentation Checklist
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                Every container shipment includes full certification to bypass local customs delays:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-charcoal pt-2">
                {papers.map((doc, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-gold mr-2.5 mt-0.5 font-bold">•</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Cargo protection */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 relative h-[300px] flex items-center justify-center">
            <div className="absolute inset-4 border border-gold/10 pointer-events-none" />
            <div className="w-4/5 h-[220px] bg-primary-dark leather-grain border border-gold/25 p-6 flex flex-col justify-between text-ivory">
              <span className="text-[9px] font-mono tracking-widest text-gold uppercase">Ocean Packaging Spec</span>
              <div className="space-y-1.5 text-[10px] text-muted/90 leading-relaxed font-mono">
                <p>• Carton: Double-Wall Corrugated (5-ply)</p>
                <p>• Liners: Waterproof Polyethylene</p>
                <p>• Desiccant: 50g Silica gel packs / box</p>
                <p>• Palletization: Plastic wrap + strapping</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-[#FAF5EC] border border-border p-2 rounded-[2px] text-cognac">
                <ReceiptText className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-serif text-primary uppercase tracking-wide">
                Cargo Care & Moisture Defense
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
              Leather is sensitive to high humidity levels during ocean transit. To prevent mildew and finish deterioration, every product is packed with desiccant gel packs inside individual protective bags, then sealed in 5-ply export-grade corrugated boxes. Boxes are stacked on heat-treated pallets and wrapped in thick stretch-film prior to terminal handover.
            </p>
          </div>

        </div>
      </section>

    </motion.div>
  );
}
export { ExportWholesale };
