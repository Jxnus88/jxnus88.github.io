/**
 * contact.js
 * Copy-to-clipboard handler for the email button
 */

function copyEmail() {
  navigator.clipboard.writeText('contacto.jlezama.list928@aleeas.com').then(function () {
    var label = document.getElementById('email-label');
    var btn   = document.getElementById('email-btn');

    label.textContent     = '¡Copiado!';
    btn.style.borderColor = 'var(--green)';
    btn.style.background  = 'var(--green-bg)';

    setTimeout(function () {
      label.textContent     = 'Email — click para copiar';
      btn.style.borderColor = '';
      btn.style.background  = '';
    }, 2000);
  });
}
