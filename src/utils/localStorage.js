// Utility untuk mengelola data localStorage

// USERS
export const getUsers = () => {
  return JSON.parse(localStorage.getItem('users') || '[]')
}
export const setUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users))
}

// NILAI SISWA
export const getNilaiSiswa = () => {
  return JSON.parse(localStorage.getItem('nilaiSiswa') || '{}')
}
export const setNilaiSiswa = (nilaiObj) => {
  localStorage.setItem('nilaiSiswa', JSON.stringify(nilaiObj))
}

// SISWA LIST (opsional, jika ingin simpan data siswa di localStorage)
export const getSiswaList = () => {
  return JSON.parse(localStorage.getItem('siswaList') || '[]')
}
export const setSiswaList = (list) => {
  localStorage.setItem('siswaList', JSON.stringify(list))
} 