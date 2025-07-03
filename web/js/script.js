// Importa a função de validação
import { validarEmail } from '../../cod/emailValidator.js';

// Seleciona os elementos do DOM
const emailInput = document.getElementById('email');
const btnValidar = document.getElementById('btnValidar');
const resultado = document.getElementById('resultado');

// Adiciona evento de clique ao botão
btnValidar.addEventListener('click', () => {
  const email = emailInput.value.trim();

  if (validarEmail(email)) {
    resultado.textContent = '✅ Email válido!';
    resultado.style.color = 'green';
  } else {
    resultado.textContent = '❌ Email inválido!';
    resultado.style.color = 'red';
  }
});
