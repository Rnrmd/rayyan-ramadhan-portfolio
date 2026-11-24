# Rayyan — Portfolio (Next.js)

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lenis (velocity scroll).

## Jalankan di komputer

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Foto profil

Taruh foto di `public/profil.jpg`. Kalau belum ada, tampil placeholder "R".

## Deploy ke Vercel

1. Upload folder ini ke GitHub (repo baru).
2. Buka vercel.com, login dengan GitHub, klik Add New > Project.
3. Pilih repo tadi, klik Deploy. Selesai.

## Struktur

- `app/page.tsx` hanya memanggil komponen, tanpa desain
- `components/` satu file per bagian (Hero, About, Experience, dst)
- `data/content.ts` semua teks, ubah isi portfolio cukup di sini
- Kekuatan efek velocity: `MAX_SKEW` dan `SENSITIVITY` di `components/SmoothScroll.tsx`
