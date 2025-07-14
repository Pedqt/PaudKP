// Utility functions untuk autentikasi dengan localStorage

// Fungsi untuk login
export const loginUser = (username, role) => {
  const userData = {
    username: username,
    role: role,
    loginTime: new Date().toISOString()
  }
  
  localStorage.setItem('currentUser', JSON.stringify(userData))
  localStorage.setItem('isLoggedIn', 'true')
  localStorage.setItem('userRole', role)
}

// Fungsi untuk logout
export const logoutUser = () => {
  localStorage.removeItem('currentUser')
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('userRole')
  localStorage.removeItem('isAdmin')
}

// Fungsi untuk mengecek apakah user sudah login
export const isLoggedIn = () => {
  return localStorage.getItem('isLoggedIn') === 'true'
}

// Fungsi untuk mendapatkan data user yang sedang login
export const getCurrentUser = () => {
  const userData = localStorage.getItem('currentUser')
  return userData ? JSON.parse(userData) : null
}

// Fungsi untuk mendapatkan role user
export const getUserRole = () => {
  return localStorage.getItem('userRole')
}

// Fungsi untuk mengecek apakah user adalah guru
export const isGuru = () => {
  return getUserRole() === 'guru'
}

// Fungsi untuk mengecek apakah user adalah orangtua
export const isOrangTua = () => {
  return getUserRole() === 'orangtua'
}

// Fungsi untuk validasi kredensial
export const validateCredentials = (username, password, role) => {
  const credentials = {
    guru: { username: 'Guru', password: 'Guru123' },
    orangtua: { username: 'Ortu', password: 'Ortu123' }
  }
  
  const currentCredential = credentials[role]
  return username === currentCredential.username && password === currentCredential.password
} 