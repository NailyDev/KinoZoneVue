export function ValidateRegister(login, email, password) {
  const errors = {}
  
  if (login.length <= 5) {
    errors.login = 'Логин должен содержать больше 5 символов'
  }
  
  const gmailRegex = /^[^\s@]+@gmail\.com$/
  if (!gmailRegex.test(email)) {
    errors.email = 'Используйте Gmail для регистрации'
  }
  
  if (password.length <= 4) {
    errors.password = 'Пароль должен быть более 4-х символов'
  }
  
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors: errors
    }
  }

  return {
    success: true
  }
}