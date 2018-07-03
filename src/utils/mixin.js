export const setLocalStorage = (key, value) => {
  if (!key) return
  let val = value
  if (typeof value !== 'string') {
    val = JSON.stringify(value)
  }
  window.localStorage.setItem(key, val)
}

export const getLocalStorage = (key) => {
  if (!key) return
  return window.localStorage.getItem(key)
}

export const removeLocalStorage = (key) => {
  if (!key) return
  window.localStorage.removeItem(key)
}

export const setSessionStorage = (key, value) => {
  if (!key) return
  let val = value
  if (typeof value !== 'string') {
    val = JSON.stringify(value)
  }
  window.sessionStorage.setItem(key, val)
}

export const getSessionStorage = (key) => {
  if (!key) return
  return window.sessionStorage.getItem(key)
}

export const removeSessionStorage = (key) => {
  if (!key) return
  window.sessionStorage.removeItem(key)
}
