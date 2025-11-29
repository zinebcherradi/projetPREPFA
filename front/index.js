document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;

      // Réinitialiser les erreurs
      document.querySelectorAll('.error').forEach(el => el.textContent = '');

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Veuillez entrer une adresse e-mail valide.';
        valid = false;
      }

      if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
        valid = false;
      }

      if (valid) {
        alert('Connexion réussie ! (simulation)');
        // Ici, vous enverriez normalement les données à un serveur
      }
    });