const form = document.querySelector('#booking');
const service = document.querySelector('#service');
const time = document.querySelector('#time');
const error = document.querySelector('#error');
const status = document.querySelector('#status');
const confirmation = document.querySelector('#confirmation');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!service.value || !time.value) {
    error.hidden = false;
    error.textContent = 'Choose both a service and an available time.';
    (!service.value ? service : time).focus();
    return;
  }
  if (time.value === '2:30 PM') {
    error.hidden = false;
    error.textContent = 'That time is no longer available. Your service selection is preserved; choose another time.';
    time.focus();
    return;
  }
  error.hidden = true; form.hidden = true; confirmation.hidden = false;
  status.textContent = `Confirmed: ${service.value} at ${time.value}.`;
});
document.querySelector('#reset').addEventListener('click', () => {
  confirmation.hidden = true; form.hidden = false; form.reset(); status.textContent = 'Choose a service and time.'; service.focus();
});
