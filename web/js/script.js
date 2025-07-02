import { validarEmail } from '../../cod/emailValidator.js';

const inputEmail = document.getElementById('email');
const btnValidar = document.getElementById('btnValidar');
const resultado = document.getElementById('resultado');

btnValidar.addEventListener('click', () => {
  const email = inputEmail.value.trim();
  if (validarEmail(email)) {
    resultado.textContent = "Email válido ✅";
    resultado.style.color = 'green';
  } else {
    resultado.textContent = "Email inválido ❌";
    resultado.style.color = 'red';
  }
});
