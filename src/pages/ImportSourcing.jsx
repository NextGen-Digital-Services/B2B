import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Factory, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import Button from '../components/shared/Button';

const EASE_OUT = [0.23, 1, 0.32, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const importedRange = [
  { name: 'Backpacks', img: '/product-images/product-1.webp' },
  { name: 'Travel Bags', img: '/product-images/product-2.webp' },
  { name: 'Laptop Bags', img: '/product-images/product-3.webp' },
  { name: 'Duffel Bags', img: '/product-images/product-10.webp' },
  { name: 'Office Bags', img: '/product-images/product-6.webp' },
  { name: 'Totes & Handbags', img: '/product-images/product-5.webp' },
  { name: 'Accessories', img: '/product-images/product-7.webp' },
  { name: 'Other Imported Products', img: '/product-images/product-9.webp' },
];

const sourcingSteps = [
  { num: '01', icon: Search, title: 'MARKET DEMAND', desc: 'We look at what customers and the market are looking for and identify products with genuine demand.' },
  { num: '02', icon: Factory, title: 'SUPPLIER SELECTION', desc: 'We work with suppliers based on product suitability, consistency, quality and commercial requirements.' },
  { num: '03', icon: ShieldCheck, title: 'QUALITY CHECKS', desc: 'Before adding products to our range, we evaluate their quality, finish, functionality and overall suitability for our customers.' },
  { num: '04', icon: Truck, title: 'SUPPLY & PRICING', desc: 'We coordinate sourcing and supply with a focus on availability, competitive pricing and dependable delivery.' },
];

const importBenefits = [
  { title: 'QUALITY', desc: 'Products selected with attention to quality and finish.' },
  { title: 'AVAILABILITY', desc: 'Access to a broader range of products and styles.' },
  { title: 'COMPETITIVE PRICING', desc: 'Products sourced with commercial value in mind.' },
  { title: 'MARKET DEMAND', desc: 'Our range evolves as customer preferences and market requirements change.' },
];

export default function ImportSourcing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow"
    >
      {/* 01 / Import & Sourcing */}
      <section className="bg-ivory border-b border-border py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 leather-grain opacity-10 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <span className="stamp text-muted border-border mb-6 inline-block">01 / IMPORT &amp; SOURCING</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink leading-[1.05] max-w-3xl mb-6">
            Imported Products. Trusted Sourcing.
          </h1>
          <div className="space-y-4 max-w-2xl">
            <p className="text-sm text-muted font-light leading-relaxed">
              Alongside our own manufacturing, Zycoon also sources selected bags and travel products from trusted suppliers in China.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed">
              We select products based on market demand, quality, availability, functionality and commercial requirements — giving our customers access to a wider range of products without compromising on our sourcing standards.
            </p>
          </div>

          <Link to="/products" className="inline-block mt-8">
            <Button variant="primary" className="text-xs group">
              EXPLORE IMPORTED PRODUCTS
              <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </Button>
          </Link>
        </div>
      </section>

      {/* 02 / Our Imported Range */}
      <section className="py-20 lg:py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="02 / OUR IMPORTED RANGE"
          title="Products Ready for Your Market."
          description="Our imported range changes with market demand, availability and new product opportunities."
          align="left"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {importedRange.map((product, idx) => (
            <motion.div key={product.name} variants={item} whileHover={{ translateY: -4 }} transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}>
              <Link
                to="/products"
                className="group relative flex flex-col h-full border border-border bg-card hover:border-leather/30 transition-all duration-500 overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border-light">
                  <span className="text-[9px] text-muted font-mono tracking-wider uppercase">
                    Import / {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-muted font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ENQUIRE
                  </span>
                </div>

                <div className="relative w-full aspect-[4/5] overflow-hidden bg-ivory">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 flex items-center justify-between gap-2">
                  <h3 className="text-sm font-serif text-ink leading-tight group-hover:text-leather transition-colors duration-300">
                    {product.name}
                  </h3>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-muted group-hover:text-leather transition-all duration-300 group-hover:translate-x-0.5" strokeWidth={1.5} />
                </div>

                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-transparent group-hover:border-leather/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-transparent group-hover:border-leather/20 transition-colors duration-500" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <Link to="/products" className="inline-block">
            <Button variant="outline" className="text-xs group">
              VIEW ALL IMPORTED PRODUCTS
              <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </Button>
          </Link>
          <p className="text-[11px] text-muted font-light">
            This range is updated continuously as new China-imported products become available.
          </p>
        </div>
      </section>

      {/* 03 / How We Source */}
      <section className="bg-card border-y border-border py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="03 / HOW WE SOURCE"
            title="Right Product. Right Supplier. Right Quality."
            description="A straightforward sourcing process that keeps quality, availability and commercial value aligned."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sourcingSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE_OUT }}
                className="border border-border bg-ivory p-6 sm:p-8 flex flex-col justify-between hover:border-leather/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <span className="section-number text-3xl">{step.num}</span>
                  <step.icon className="w-5 h-5 text-leather" strokeWidth={1.5} />
                </div>
                <div className="mt-8 space-y-3">
                  <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-ink">{step.title}</h3>
                  <p className="text-xs text-muted leading-relaxed font-light">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 / Why We Import */}
      <section className="py-20 lg:py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="04 / WHY WE IMPORT"
          title="More Products. More Possibilities."
          description="Our own manufacturing allows us to develop products around specific requirements. International sourcing allows us to offer additional styles, categories and market opportunities."
          align="left"
        />

        <p className="text-sm text-muted font-light leading-relaxed max-w-2xl -mt-6 lg:-mt-8">
          We import when it makes sense for our customers — whether they are looking for a particular product, a new style, competitive pricing or additional product variety.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {importBenefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE_OUT }}
              className="border border-border bg-card p-6 space-y-3 hover:border-leather/30 transition-all duration-300"
            >
              <span className="block w-10 h-1 border border-leather/40 bg-leather" />
              <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-ink">{benefit.title}</h3>
              <p className="text-[11px] text-muted leading-relaxed font-light">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 border border-border bg-espresso relative overflow-hidden">
          <div className="absolute inset-0 leather-grain opacity-20 pointer-events-none" />
          <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl space-y-3">
              <span className="stamp text-ivory/40 border-ivory/15">LOOKING FOR A SPECIFIC PRODUCT?</span>
              <p className="text-sm text-ivory/60 font-light leading-relaxed">
                Tell us what you're looking for. Our team can help you explore currently available imported products and sourcing options.
              </p>
            </div>
            <Link to="/contact" className="flex-shrink-0">
              <Button variant="secondary" className="text-xs group w-full lg:w-auto">
                ENQUIRE ABOUT IMPORTED PRODUCTS
                <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
