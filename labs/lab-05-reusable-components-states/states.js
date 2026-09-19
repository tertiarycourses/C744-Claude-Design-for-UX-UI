const form = document.querySelector('form');
const email = document.querySelector('#email');
const error = document.querySelector('#email-error');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!email.validity.valid) {
    error.textContent = 'Enter an email address in the format name@example.com.';
    email.setAttribute('aria-invalid', 'true');
    email.focus();
    return;
  }
  error.textContent = '';
  email.removeAttribute('aria-invalid');
  form.querySelector('button').textContent = 'Details saved';
});
