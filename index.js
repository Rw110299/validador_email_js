// Importa o validador do próprio pacote publicado no npm
const { validarEmail } = require('validador-email-js');

// Email para testar
const email = 'teste@email.com';

if (validarEmail(email)) {
    console.log('✅ Email válido');
} else {
    console.log('❌ Email inválido');
}
