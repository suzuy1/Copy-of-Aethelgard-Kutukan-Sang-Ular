# Salinan Aethelgard: Kutukan Sang Ular

Proyek ini adalah aplikasi React yang dibangun dengan Vite dan TypeScript, dirancang untuk menampilkan berbagai bagian dari dunia fiksi bernama Aethelgard. Proyek ini memiliki komponen UI interaktif dan efek visual untuk memperkaya pengalaman pengguna.

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Memulai](#memulai)
  - [Prasyarat](#prasyarat)
  - [Instalasi](#instalasi)
  - [Variabel Lingkungan](#variabel-lingkungan)
- [Script yang Tersedia](#script-yang-tersedia)
- [Struktur Proyek](#struktur-proyek)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## Fitur

- **Bagian Dinamis:** Termasuk bagian khusus untuk Hero, Fitur, Lore, Dunia, Karakter, Bestiary, Galeri Media, dan Ajakan Bertindak.
- **UI Interaktif:** Menggunakan berbagai komponen React untuk pengalaman pengguna yang kaya.
- **Efek Visual:** Menggabungkan efek latar seperti partikel, hujan, bintang, dan angin untuk meningkatkan estetika.
- **Desain Responsif:** (Diasumsikan, berdasarkan praktik pengembangan web modern dan struktur berbasis komponen)
- **Tombol Scroll ke Atas:** Memudahkan navigasi.

## Teknologi yang Digunakan

<table>
  <tr>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="40" height="40"/>
      <br /><b>React 19.2.0</b>
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" height="40"/>
      <br /><b>TypeScript 5.8.2</b>
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vite/vite-original.svg" alt="Vite" width="40" height="40"/>
      <br /><b>Vite 6.2.0</b>
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React DOM" width="40" height="40"/>
      <br /><b>React DOM 19.2.0</b>
    </td>
  </tr>
</table>

- **React**: Library JavaScript untuk membangun antarmuka pengguna.
- **TypeScript**: Superset dari JavaScript yang menambahkan tipe statis.
- **Vite**: Alat build dan server pengembangan yang cepat.
- **React DOM**: Titik masuk ke DOM dan renderer server untuk React.

## Memulai

Ikuti instruksi berikut untuk mendapatkan salinan proyek dan menjalankannya di mesin lokal Anda untuk tujuan pengembangan dan pengujian.

### Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

-   Node.js (disarankan versi LTS)
-   npm (sudah termasuk dalam Node.js) atau Yarn

### Instalasi

1.  **Klon repositori:**
    ```bash
    git clone https://github.com/suzuy1/Copy-of-Aethelgard-Kutukan-Sang-Ular.git
    cd copy-of-aethelgard_-kutukan-sang-ular
    ```
2.  **Instal dependensi:**
    ```bash
    npm install
    # atau
    yarn install
    ```

### Variabel Lingkungan

Proyek ini menggunakan variabel lingkungan, khususnya `GEMINI_API_KEY`. Anda perlu membuat file `.env` di root proyek dan tambahkan API key Gemini Anda:

```
GEMINI_API_KEY=masukkan_gemini_api_key_anda_di_sini
```

## Script yang Tersedia

Di direktori proyek, Anda dapat menjalankan:

-   **`npm run dev`**
    Menjalankan aplikasi dalam mode pengembangan.
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihatnya.
    Halaman akan memuat ulang jika Anda melakukan perubahan. Anda juga akan melihat error lint di konsol.

-   **`npm run build`**
    Membuat build aplikasi untuk produksi di folder `dist`.
    Build akan mengoptimalkan React dan performa aplikasi.

-   **`npm run preview`**
    Menyajikan folder `dist` secara lokal untuk pratinjau produksi.

## Struktur Proyek

Proyek mengikuti struktur standar aplikasi React:

```
.
├── public/
├── src/
│   ├── components/             # Komponen UI yang dapat digunakan ulang & efek visual
│   │   ├── icons/              # SVG icon atau komponen ikon
│   │   ├── BestiarySection.tsx
│   │   ├── CharacterSection.tsx
│   │   ├── CtaSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ImageWithLoader.tsx
│   │   ├── LoreSection.tsx
│   │   ├── MediaGallery.tsx
│   │   ├── Modal.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── RainEffect.tsx
│   │   ├── ScrollToTopButton.tsx
│   │   ├── StarryBackground.tsx
│   │   ├── Tooltip.tsx
│   │   ├── WindEffect.tsx
│   │   └── WorldSection.tsx
│   ├── App.tsx                 # Komponen aplikasi utama
│   └── index.tsx               # Entry point aplikasi React
├── .gitignore                  # File yang diabaikan oleh git
├── index.html                  # File HTML utama
├── metadata.json               # Metadata proyek
├── package.json                # Dependensi dan script proyek
├── package-lock.json           # Versi pasti dari dependensi
├── README.md                   # File ini
├── tsconfig.json               # Konfigurasi TypeScript
└── vite.config.ts              # Konfigurasi build Vite
```

## Kontribusi

Kontribusi sangat diterima! Silakan ajukan pull request atau buka issue.

## Lisensi

(Silakan tentukan lisensi proyek Anda di sini, misal MIT, Apache 2.0, dll.)
