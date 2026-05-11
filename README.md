# Demo YAPAYS

HTML prototype untuk YAPAYS Budget & Payment System.

## Stack
- HTML murni
- Bootstrap 5.3.3 via CDN
- Bootstrap Icons via CDN
- CSS modular
- JavaScript modular untuk onclick mega menu

## Entry point
- `index.html`
- `pages/user-dashboard.html`
- `pages/admin-dashboard.html`

## Warna
Palet disesuaikan dari arah visual dokumen KTS Assistance Propose Solution:
- Executive navy
- Gold accent
- Cyan/blue system accent
- Teal supporting accent
- Clean white/cloud enterprise surface

## Struktur
```text
assets/
  css/
    00-tokens.css
    01-base.css
    02-topbar.css
    03-navbar.css
    04-dashboard.css
    05-themes.css
    06-responsive.css
    app.css
  js/
    menu.js
  images/
    logo-yapays.svg
pages/
  user-dashboard.html
  admin-dashboard.html
index.html
.nojekyll
```

## GitHub Pages
Untuk URL root `https://demo-yapays.github.io`, repository harus bernama `demo-yapays.github.io` pada akun/organization `demo-yapays`.

Kalau repository hanya bernama `demo-yapays`, URL GitHub Pages default menjadi:

```text
https://<username>.github.io/demo-yapays/
```

## Deploy manual
```bash
git init
git add .
git commit -m "Initial demo YAPAYS UI"
git branch -M main
git remote add origin https://github.com/<OWNER>/<REPO>.git
git push -u origin main
```

Aktifkan GitHub Pages dari Settings > Pages > Deploy from branch > `main` / root.
