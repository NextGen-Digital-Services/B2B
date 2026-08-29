-- ============================================================
--  Zycoon — Admin Panel (Supabase) schema
--  Run this once in the Supabase SQL editor.
--  Then set env vars in a .env file:
--    VITE_SUPABASE_URL=<project url>
--    VITE_SUPABASE_ANON_KEY=<anon public key>
--    VITE_ADMIN_PASS=<admin panel password>
-- ============================================================

-- 1. Products table (mirrors src/data/products.js shape)
create extension if not exists "pgcrypto";

create table if not exists public.products (
  id                    text primary key,          -- e.g. 'sovereign-handbag'
  name                  text not null,
  slug                  text not null unique,
  serial                text,                      -- e.g. 'ZC-001'
  category_id           text not null default 'handbags',
  description           text,
  material              text,
  moq                   integer default 50,
  price_tiers           jsonb default '[]'::jsonb,
  specifications        jsonb default '{}'::jsonb,
  customization_options jsonb default '{}'::jsonb,
  images                jsonb default '[]'::jsonb, -- hex colors or image urls
  lead_time_days        integer default 30,
  is_featured           boolean default false,
  active                boolean default true,      -- false = hidden from public site
  created_at            timestamptz default now(),
  updated_at            timestamptz default now()
);

-- 2. RLS — public can read; admin writes are guarded by the panel password.
alter table public.products enable row level security;

drop policy if exists "Public read products" on public.products;
create policy "Public read products"
  on public.products for select using (true);

drop policy if exists "Admin write products" on public.products;
create policy "Admin write products"
  on public.products for all using (true) with check (true);

-- 3. Storage bucket for product photos
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

drop policy if exists "Public read product images" on storage.objects;
create policy "Public read product images"
  on storage.objects for select using (bucket_id = 'product-images');

drop policy if exists "Admin upload product images" on storage.objects;
create policy "Admin upload product images"
  on storage.objects for insert with check (bucket_id = 'product-images');

drop policy if exists "Admin update product images" on storage.objects;
create policy "Admin update product images"
  on storage.objects for update using (bucket_id = 'product-images');

drop policy if exists "Admin delete product images" on storage.objects;
create policy "Admin delete product images"
  on storage.objects for delete using (bucket_id = 'product-images');

-- ============================================================
--  4. Categories, Reviews, Testimonials, Gallery
-- ============================================================

create table if not exists public.categories (
  id          text primary key,             -- e.g. 'wallets'
  name        text not null,
  slug        text not null unique,
  description text default '',
  image_color text default '#291A13',
  active      boolean default true,
  created_at  timestamptz default now()
);

create table if not exists public.product_reviews (
  id         text primary key,              -- generated client-side
  product_id text not null references public.products(id) on delete cascade,
  author     text not null,
  rating     integer default 5,
  comment    text default '',
  active     boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.testimonials (
  id           text primary key,
  client_name  text not null,
  company_name text default '',
  country      text default '',
  quote        text not null,
  rating       integer default 0,
  active       boolean default true,
  created_at   timestamptz default now()
);

create table if not exists public.gallery (
  id          text primary key,
  title       text not null,
  description text default '',
  image       text default '',              -- url or hex color
  category_id text default '',
  sort_order  integer default 0,
  active      boolean default true,
  created_at  timestamptz default now()
);

-- row level security (public reads; panel password guards writes)
alter table public.categories      enable row level security;
alter table public.product_reviews enable row level security;
alter table public.testimonials    enable row level security;
alter table public.gallery         enable row level security;

do $$
declare t text;
begin
  foreach t in array array['categories','product_reviews','testimonials','gallery'] loop
    execute format('drop policy if exists "Public read %I" on public.%I', t, t);
    execute format('create policy "Public read %I" on public.%I for select using (true)', t, t);
    execute format('drop policy if exists "Admin write %I" on public.%I', t, t);
    execute format('create policy "Admin write %I" on public.%I for all using (true) with check (true)', t, t);
  end loop;
end $$;