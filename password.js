function generateRandomPassword(length = 8) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const characters = letters + numbers;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

window.showPassword = function() {
  const password = generateRandomPassword();
  const display = document.getElementById('passwordDisplay');
  display.textContent = password;
};
