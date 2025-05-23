# 🧑‍💻 Online Judge Sederhana

Aplikasi **Online Judge Sederhana** ini memungkinkan peserta menulis, menjalankan, dan memvalidasi kode secara langsung dari browser. Sistem backend menggunakan **Express.js** dan terhubung dengan **Judge0 API** untuk eksekusi kode.

---

## ✨ Fitur

- Mendukung berbagai bahasa pemrograman (Python, C++, Java, JavaScript).
- Validasi otomatis antara output peserta dan expected output.
- Dapat dihosting di layanan hosting biasa (tidak memerlukan Docker).
- Cocok untuk lomba Competitive Programming sederhana.

---

## 🚀 Cara Menjalankan

### 1. Clone Repositori

```bash
git clone https://github.com/NeoBitose/Express-NeoJudge-Simple-Online-Judge.git
cd online-judge-sederhana
```

### 2. Install Dependensi

```bash
npm install
```

### 3. Buat File `.env`

Buat file `.env` di direktori root, lalu isi seperti berikut:

```env
PORT=3000

JUDGE_API_BASE=https://judge0-ce.p.rapidapi.com
JUDGE_API_HOST=judge0-ce.p.rapidapi.com
JUDGE_API_KEY=ISI_API_KEY_KAMU_DISINI
```

> 🔑 Dapatkan API Key dari [RapidAPI - Judge0](https://rapidapi.com/judge0-official/api/judge0-ce)

### 4. Jalankan Server

```bash
npm start
```

### 5. Akses di Browser

Buka `http://localhost:3000` untuk menggunakan aplikasinya.

---

## 📁 Struktur Proyek

```
.
├── public/
│   └── index.html         # Halaman frontend
├── server.js              # Backend Express.js
├── .env                   # Variabel lingkungan
├── package.json
└── README.md
```

---

## 📌 Catatan

- Output peserta dibandingkan dengan **expected output** menggunakan perbandingan teks langsung (`===`).
- Tambahkan dukungan bahasa lain dengan memasukkan `language_id` sesuai dokumentasi Judge0.

---

## 🙌 Kontribusi

Butuh bantuan atau saran pengembangan? Silakan hubungi atau buat issue di GitHub!
