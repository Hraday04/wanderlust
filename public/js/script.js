// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated')
    }, false)
  });
})();


//togglepassword

const togglePassword = document.querySelector('togglepassword');
const password = document.querySelector('password');

// togglePassword.addEventListener('click', (e) => {
// const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
// password.setAttribute('type', type);
// e.target.classList.toggle('bi bi-eye');

togglePassword.addEventListener('click', function() {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
});

