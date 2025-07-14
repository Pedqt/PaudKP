Catatan: Proyek ini sekarang hanya berisi frontend saja. Semua file backend telah dihapus sesuai permintaan user.

# PAUD Anggrek Mekar - Sistem Manajemen PAUD

Aplikasi web untuk manajemen sistem PAUD (Pendidikan Anak Usia Dini) yang dibangun menggunakan Vue.js 3 dan Tailwind CSS.

## Fitur Utama

### 🔐 Sistem Autentikasi
- **Login**: Masuk dengan username dan password
- **Register**: Daftar akun baru dengan berbagai peran
- **Logout**: Keluar dari sistem
- **Role-based Access**: Kontrol akses berdasarkan peran (Admin, Guru, Orang Tua)

### 👥 Manajemen User
- **Multi-role Support**: Admin, Guru, dan Orang Tua
- **User Registration**: Form pendaftaran lengkap dengan validasi
- **User Authentication**: Login dengan user yang sudah didaftarkan
- **Profile Management**: Informasi user ditampilkan di navbar

### 📊 Manajemen Data
- **Data Siswa**: CRUD operasi untuk data siswa (Admin only)
- **Data Guru**: Struktur untuk data guru
- **Data Kelas**: Struktur untuk data kelas
- **Jadwal**: Struktur untuk jadwal kegiatan

## Teknologi yang Digunakan

- **Frontend**: Vue.js 3 dengan Composition API
- **Styling**: Tailwind CSS
- **Routing**: Vue Router 4
- **Build Tool**: Vite
- **Data Storage**: LocalStorage (untuk demo)

## Cara Menjalankan

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Jalankan development server**:
   ```bash
   npm run dev
   ```

3. **Buka browser** dan akses `http://localhost:5173`

## Struktur Aplikasi

```
src/
├── components/
│   ├── Navbar.vue          # Navigation bar dengan user info
│   └── Footer.vue          # Footer component
├── pages/
│   ├── LandingPage.vue     # Halaman utama
│   ├── Login.vue          # Halaman login
│   ├── Register.vue       # Halaman daftar (BARU)
│   └── SiswaCRUD.vue      # Manajemen data siswa
├── router/
│   └── index.js           # Konfigurasi routing
└── main.js                # Entry point aplikasi
```

## Fitur Register (Baru Ditambahkan)

### Form Pendaftaran
- **Nama Lengkap**: Validasi input wajib
- **Email**: Validasi format email
- **Username**: Minimal 3 karakter, unik
- **Password**: Minimal 6 karakter
- **Konfirmasi Password**: Harus cocok dengan password
- **Peran**: Pilihan Admin, Guru, atau Orang Tua

### Validasi
- ✅ Validasi form real-time
- ✅ Cek username duplikat
- ✅ Validasi format email
- ✅ Konfirmasi password
- ✅ Pesan error yang informatif

### Integrasi dengan Login
- ✅ User yang didaftarkan bisa langsung login
- ✅ Fallback ke demo admin (admin/admin123)
- ✅ Redirect berdasarkan peran user
- ✅ Session management dengan localStorage

## Demo Account

**Admin Demo**:
- Username: `admin`
- Password: `admin123`

## Peran dan Akses

### Admin
- ✅ Akses penuh ke semua fitur
- ✅ Manajemen data siswa
- ✅ Dashboard admin

### Guru
- ✅ Akses terbatas
- ✅ Melihat data siswa (dalam pengembangan)
- ✅ Dashboard guru (dalam pengembangan)

### Orang Tua
- ✅ Akses terbatas
- ✅ Melihat data anak (dalam pengembangan)
- ✅ Dashboard orang tua (dalam pengembangan)

## Pengembangan Selanjutnya

- [ ] Integrasi dengan backend API
- [ ] Database persistence
- [ ] Password hashing
- [ ] Email verification
- [ ] Reset password
- [ ] Dashboard untuk setiap peran
- [ ] Manajemen data guru
- [ ] Manajemen data kelas
- [ ] Sistem jadwal
- [ ] Upload foto profil
- [ ] Notifikasi sistem

## Kontribusi

Silakan berkontribusi dengan membuat pull request atau melaporkan bug melalui issues.

## Lisensi

MIT License

## 🚀 Fitur

- **Landing Page** yang menarik dengan desain modern
- **Sistem Login** dengan autentikasi
- **Manajemen Data Siswa** dengan operasi CRUD lengkap
- **Responsive Design** yang optimal di semua perangkat
- **UI/UX** yang user-friendly dan intuitif

## 🛠️ Teknologi

- **Vue.js 3** - Framework JavaScript progresif
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Build tool yang cepat
- **Vue Router** - Router resmi untuk Vue.js

## 📱 Responsive

Aplikasi ini dirancang responsif dan dapat diakses dengan baik di:
- Desktop
- Tablet
- Mobile

## 🎨 Desain

Menggunakan desain modern dengan:
- Gradien warna yang menarik
- Animasi transisi yang halus
- Layout yang bersih dan terorganisir
- Typography yang mudah dibaca

## 📞 Kontak

Untuk informasi lebih lanjut, silakan hubungi:
- Email: info@paudanggrekmekar.com
- Telepon: (021) 1234-5678

---

**PAUD Anggrek Mekar** - Mendidik anak-anak dengan ceria dan penuh kasih sayang untuk masa depan yang gemilang. 🌟 