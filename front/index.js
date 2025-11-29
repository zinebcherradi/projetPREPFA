document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  let valid = true;

  if (!email || !email.includes('@')) {
    document.getElementById('emailError').textContent = 'Veuillez entrer une adresse e-mail valide.';
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
    valid = false;
  }

  if (valid) {
    alert('Connexion réussie !');
    // À remplacer par un appel API en production
  }
});

// Toggle afficher/masquer le mot de passe
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});

// Gestion du "Mot de passe oublié ?"
document.getElementById('forgotPasswordLink').addEventListener('click', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!email || !email.includes('@')) {
    alert('Veuillez entrer une adresse e-mail valide avant de demander une réinitialisation.');
    return;
  }
  alert(`Un e-mail de réinitialisation a été envoyé à ${email} (simulation).`);
});