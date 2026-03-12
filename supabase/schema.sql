create extension if not exists "pgcrypto";

create table if not exists public.businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  city text,
  owner_id uuid not null,
  created_at timestamptz not null default now(),
  is_blocked boolean not null default false
);

create index if not exists businesses_owner_id_idx on public.businesses (owner_id);

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  telegram_id text not null unique,
  phone text,
  name text,
  created_at timestamptz not null default now()
);

create table if not exists public.business_clients (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses (id) on delete cascade,
  client_id uuid not null references public.clients (id) on delete cascade,
  points integer not null default 0,
  visits integer not null default 0,
  last_visit_at timestamptz,
  created_at timestamptz not null default now(),
  unique (business_id, client_id)
);

create index if not exists business_clients_business_id_idx on public.business_clients (business_id);
create index if not exists business_clients_client_id_idx on public.business_clients (client_id);

create table if not exists public.transactions (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses (id) on delete cascade,
  client_id uuid not null references public.clients (id) on delete cascade,
  amount numeric(12, 2) not null,
  points_added integer not null,
  created_at timestamptz not null default now()
);

create index if not exists transactions_business_id_idx on public.transactions (business_id);
create index if not exists transactions_client_id_idx on public.transactions (client_id);
create index if not exists transactions_created_at_idx on public.transactions (created_at);

create table if not exists public.campaigns (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses (id) on delete cascade,
  title text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists campaigns_business_id_idx on public.campaigns (business_id);

create table if not exists public.business_reward_settings (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses (id) on delete cascade,
  type text not null check (type in ('percent', 'fixed')),
  percent numeric(5, 2),
  fixed_points integer,
  welcome_points integer default 0,
  updated_at timestamptz not null default now()
);

create unique index if not exists business_reward_settings_business_id_idx
  on public.business_reward_settings (business_id);

create table if not exists public.locations (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses (id) on delete cascade,
  name text not null,
  address text,
  city text,
  latitude numeric(9,6),
  longitude numeric(9,6),
  created_at timestamptz not null default now()
);

create index if not exists locations_business_id_idx on public.locations (business_id);
create index if not exists locations_city_idx on public.locations (city);

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'business_owner' check (role in ('platform_admin', 'business_owner')),
  created_at timestamptz not null default now()
);

