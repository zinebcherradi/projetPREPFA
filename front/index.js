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