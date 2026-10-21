# Tumbly — Cute & Aesthetic Tumbler Shop

Website toko tumbler dengan nuansa **pink soft + ivory**, dibuat responsive dan siap untuk GitHub Pages.

## File
- `index.html` — halaman utama (sudah dilengkapi Open Graph / og:image)
- `style.css` — desain & responsive layout
- `script.js` — katalog, keranjang, dan checkout WhatsApp
- `favicon.svg` — ikon website
- `og-image.png` — gambar thumbnail untuk share ke sosmed / WhatsApp (1200×630)

## Upload ke GitHub
1. Buat repository baru (atau replace file yang sudah ada).
2. Upload semua file: `index.html`, `style.css`, `script.js`, `favicon.svg`, `og-image.png`.
3. Masuk ke **Settings → Pages**.
4. Pilih branch utama sebagai source.
5. Simpan. Website akan tersedia di `https://username.github.io/tumbly/`.

## Open Graph (Thumbnail saat share)
Setelah di-deploy, link website akan otomatis menampilkan thumbnail saat di-share ke WhatsApp, Facebook, Twitter/X, Telegram, dll. berkat meta tag `og:image`.

Kalau thumbnail lama masih muncul, cache Facebook bisa di-refresh di:  
https://developers.facebook.com/tools/debug/

## Catatan WhatsApp
Checkout saat ini menggunakan `wa.me` umum. Untuk mengarah langsung ke nomor toko, ubah URL di fungsi `checkout()` pada `script.js` menjadi nomor WhatsApp toko.
