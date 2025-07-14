import { isLoggedIn, getUserRole } from './auth.js'

// Route guard untuk halaman yang memerlukan login
export const requireAuth = (to, from, next) => {
  if (!isLoggedIn()) {
    next('/login')
  } else {
    next()
  }
}

// Route guard untuk halaman guru
export const requireGuru = (to, from, next) => {
  if (!isLoggedIn()) {
    next('/login')
  } else if (getUserRole() !== 'guru') {
    next('/')
  } else {
    next()
  }
}

// Route guard untuk halaman orangtua
export const requireOrangTua = (to, from, next) => {
  if (!isLoggedIn()) {
    next('/login')
  } else if (getUserRole() !== 'orangtua') {
    next('/')
  } else {
    next()
  }
}

// Route guard untuk halaman yang sudah login (redirect ke dashboard)
export const redirectIfLoggedIn = (to, from, next) => {
  if (isLoggedIn()) {
    const role = getUserRole()
    if (role === 'guru') {
      next('/dguru')
    } else if (role === 'orangtua') {
      next('/drangtua')
    } else {
      next('/')
    }
  } else {
    next()
  }
} 