import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import useSplitReveal from '../hooks/useSplitReveal';
import { B2B_CONFIG } from '../utils/helpers';

const timelineEvents = [
  {
    year: '2007',
    title: 'Manufacturing Begins',
    desc: 'Zycoon started its manufacturing journey in Mumbai in 2007, with a focus on making reliable bags and backpacks.',
  },
  {
    year: '2013',
    title: 'Our First Store',
    desc: 'In 2013, we opened our first store. This helped us understand our customers better and improve our designs.',
  },
  {
    year: '2014 – 2018',
    title: 'Growing the Business',
    desc: 'With increasing demand, we expanded our product range and strengthened our manufacturing capabilities.',
  },
  {
    year: '2019 – 2022',
    title: 'Building Stronger Relationships',
    desc: 'Consistent quality and customer feedback helped us earn the trust of retailers, corporate clients and business partners across India.',
  },
  {
    year: 'Today',
    title: 'Pan-India Presence',
    desc: 'Today, Zycoon supplies bags and backpacks across India, serving retail, wholesale, corporate and other markets.',
  },
  {
    year: 'Beyond India',
    title: 'Reaching Further',
    desc: 'Some of our products also reach customers outside India through our business partners and associated partners.',
  },
];

const journeyStats = [
  { value: '2007', label: 'Established' },
  { value: '2013', label: 'First Store' },
  { value: 'Pan-India', label: 'Market Presence' },
  { value: 'Bags & Backpacks', label: 'Our Focus' },
  { value: 'Growing', label: 'With Every Partnership' },
];

const craftsmanshipCards = [
  {
    title: 'MATERIAL & CUTTING',
    desc: 'Materials are carefully selected and cut according to the design, dimensions and intended use of each bag.',
  },
  {
    title: 'PRECISION STITCHING',
    desc: 'Skilled workmanship and careful stitching bring each panel, pocket and component together with a clean, durable finish.',
  },
  {
    title: 'FINISHING & INSPECTION',
    desc: 'Every finished piece is checked for construction, detailing and overall presentation before it moves forward.',
  },
];

export default function About() {
  const splitRef = useRef(null);
  useSplitReveal(splitRef);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-ivory"
    >
      {/* Hero */}
      <section ref={splitRef} className="bg-ivory border-b border-border py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 leather-grain opacity-10 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <span className="stamp text-muted border-border mb-6 inline-block">THE ZYCOON STORY</span>
          <h1 data-split className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink leading-[1.05] max-w-3xl">
            Built on Craft. Made for Brands.
          </h1>
          <p className="mt-6 text-sm text-muted font-light max-w-2xl leading-relaxed">
            Since 2007, {B2B_CONFIG.brandName} has been building bags and backpacks for businesses, brands, retailers and distributors. From everyday backpacks to custom-made designs, we bring practical design, skilled workmanship and reliable manufacturing together under one roof.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {['Bags', 'Backpacks', 'Custom Manufacturing', 'B2B Wholesale'].map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-[10px] font-sans font-medium uppercase tracking-[0.15em] text-muted">{tag}</span>
                {i < 3 && <span className="text-leather text-xs">•</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted/60 font-sans tracking-wider uppercase">
            Artisanal Heritage Backed by Global Industrial Capacity
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-ivory py-20 lg:py-32 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <SectionHeading
                eyebrow="OUR STORY"
                title="The Zycoon Journey"
                description="From a Mumbai beginning to a growing name in bags and backpacks."
              />
              <div className="space-y-4">
                <p className="text-sm text-muted leading-relaxed font-light">
                  Zycoon began its journey in 2007 with a simple ambition — to create bags that combine practical design, dependable quality and a strong sense of style.
                </p>
                <p className="text-sm text-muted leading-relaxed font-light">
                  What started as a local business gradually grew through years of learning, making and understanding what customers actually need from a bag. In 2013, we took another step forward with the opening of our first store, bringing Zycoon closer to the people who use and trust our products.
                </p>
                <p className="text-sm text-muted leading-relaxed font-light">
                  Over the years, our focus has continued to evolve. From everyday bags and backpacks to designs made for brands, retailers, distributors and corporate requirements, we have built our capabilities around one thing: making products that work in the real world.
                </p>
                <p className="text-sm text-muted leading-relaxed font-light">
                  Today, Zycoon brings design, material selection, sampling and manufacturing together to serve customers looking for dependable bags and backpacks at scale — while keeping the attention to detail that shaped our journey from the beginning.
                </p>
              </div>
              <p className="text-xs font-serif italic text-leather pt-2">
                From our first steps in Mumbai to every bag we make today, the journey is still about making better.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {[
                { label: 'Products', note: 'Signature bags & backpacks', img: '/products/backpack-features-sports.jpg' },
                { label: 'Machinery & Workshop', note: 'Cutting & stitching lines', img: '/products/backpack-detail-1.jpg' },
                { label: 'Raw Materials', note: 'Leather, hardware & linings', img: '/products/backpack-detail-2.jpg' },
                { label: 'Brand & Logo', note: 'Zycoon identity', img: '/products/backpack-detail-3.jpg' },
              ].map((tile, i) => (
                <div key={i} className="group relative border border-border overflow-hidden aspect-[4/3] flex items-end">
                  <img
                    src={tile.img}
                    alt={tile.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="relative z-10 p-5 w-full">
                    <h4 className="text-sm font-serif text-ivory">{tile.label}</h4>
                    <p className="text-[10px] text-ivory/60 mt-0.5">{tile.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey — Timeline */}
      <section className="py-20 lg:py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left - Timeline */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="OUR JOURNEY"
              title="A Journey of Trust and Steady Growth"
              align="left"
            />
            <div className="space-y-0 mt-12">
              {timelineEvents.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative border-l border-leather/30 pl-8 pb-8 last:pb-0"
                >
                  <span className="absolute -left-[5px] top-1 w-2 h-2 bg-leather rounded-full" />
                  <span className="text-[10px] font-mono font-medium text-leather uppercase tracking-wider">
                    {item.year} — {item.title}
                  </span>
                  <h4 className="text-sm font-serif text-ink mt-1">{item.title}</h4>
                  <p className="text-xs text-muted mt-1 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Factory Visual */}
          <div className="lg:col-span-5">
            <div className="border border-border overflow-hidden sticky top-28">
              <img
                src="/products/philosophy-brown-backpack.jpg"
                alt="ZYCOON brown leather backpack - craftsmanship"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-16 pt-12 border-t border-border">
          {journeyStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center space-y-1"
            >
              <p className="text-lg font-serif font-bold text-ink">{stat.value}</p>
              <p className="text-[9px] text-muted font-mono uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="relative border-y border-border py-20 lg:py-32 overflow-hidden">
        {/* Background image */}
        <img
          src="/products/process-sewing.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left - Cards */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="CRAFTSMANSHIP"
                title="Where Every Bag Takes Shape"
                description="From the first cut to the final stitch, every Zycoon bag is built with attention to detail."
                align="left"
                inverted
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
                {craftsmanshipCards.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="bg-ink/60 backdrop-blur-sm border border-ivory/10 p-6 space-y-3"
                  >
                    <span className="section-number text-2xl text-gold">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-ivory">{item.title}</h3>
                    <p className="text-[11px] text-ivory/60 leading-relaxed font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Workshop Visual */}
            <div className="lg:col-span-5">
              <div className="border border-ivory/10 p-8 text-center space-y-4 bg-ink/40 backdrop-blur-sm">
                <p className="text-3xl lg:text-4xl font-serif italic text-ivory leading-tight">
                  Every stitch tells a story of precision.
                </p>
                <div className="w-10 h-px bg-gold mx-auto" />
                <p className="text-[10px] text-ivory/40 font-sans tracking-[0.15em] uppercase">
                  ZYCOON WORKSHOP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Quality */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background image */}
        <img
          src="/products/philosophy-brown-backpack.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-8">
              <SectionHeading
                eyebrow="HOW WE MAKE IT"
                title="Made With Purpose. Built to Perform."
                description="A good bag is more than its appearance. It needs the right materials, strong construction and attention to detail at every stage."
                inverted
              />
              <p className="text-sm text-ivory/70 leading-relaxed font-light">
                At Zycoon, we work with a wide range of materials to create bags and backpacks for different markets, requirements and price points. Every product begins with selecting the right material and understanding how the finished bag needs to perform.
              </p>
              <p className="text-sm text-ivory/70 leading-relaxed font-light">
                From cutting and stitching to fitting hardware, finishing and final inspection, each stage plays a part in the finished product. Our manufacturing process combines practical experience with careful workmanship to deliver products that are made for everyday use and ready for wholesale requirements.
              </p>
              <p className="text-sm text-ivory/70 leading-relaxed font-light">
                Whether it is a backpack developed from an existing design or a custom product created for a brand, we focus on getting the details right — from construction and functionality to finish and presentation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {[
                  { title: 'MATERIALS', desc: 'A range of materials selected according to design, use and budget.' },
                  { title: 'CONSTRUCTION', desc: 'Careful stitching, assembly and finishing for dependable everyday use.' },
                  { title: 'QUALITY CHECK', desc: 'Products reviewed through the manufacturing process before they are ready to move forward.' },
                ].map((item, i) => (
                  <div key={i} className="border-l border-gold/30 pl-4 space-y-1">
                    <h4 className="text-[10px] font-sans font-semibold uppercase tracking-wider text-ivory">{item.title}</h4>
                    <p className="text-[11px] text-ivory/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Cutting', img: '/products/backpack-features-gaming.jpg' },
                  { label: 'Precision Stitching', img: '/products/backpack-gaming-clean.jpg' },
                  { label: 'Factory Floor', img: '/products/backpack-bunny-clean.jpg' },
                  { label: 'Product Inspection', img: '/products/backpack-features-bunny.jpg' },
                  { label: 'Packaging', img: '/products/backpack-sports-clean.jpg' },
                  { label: 'Finished Products', img: '/products/backpack-features-2.jpg' },
                ].map((tile, i) => (
                  <div key={i} className="group relative border border-ivory/10 overflow-hidden aspect-[4/3] flex items-end">
                    <img
                      src={tile.img}
                      alt={tile.label}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                    <div className="relative z-10 p-4 w-full">
                      <p className="text-[9px] font-mono tracking-widest text-ivory/70 uppercase">{tile.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="bg-ink py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 leather-grain opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="stamp text-ivory/40 border-ivory/15">PARTNER WITH ZYCOON</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-ivory leading-[1.05]">
              Ready to Build Something Together?
            </h2>
            <p className="text-sm text-ivory/50 font-light max-w-lg mx-auto leading-relaxed">
              From ready-to-order designs to fully customized manufacturing, we work with brands, retailers and businesses across India and beyond.
            </p>
            <a href="/contact" className="inline-flex items-center text-ivory bg-gold/90 hover:bg-gold px-6 py-3 text-[10px] uppercase tracking-[0.15em] font-medium transition-colors">
              DISCUSS YOUR REQUIREMENT →
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
