export const email = (email) => {
  if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase())) 
    return 1
  else 
    return 0
}

export const phone = (phone) => {
  if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)) 
    return 1
  else 
    return 0
}

export const letters = (string) => {
  if (/[^a-zA-Z]/.test(string)) 
    return 0
  else 
    return 1
}