const { validarEmail } = require('../cod/emailValidator');

describe('Validador de Email', () => {
  test('Email válido deve retornar true', () => {
    expect(validarEmail('teste@example.com')).toBe(true);
  });

  test('Email sem @ deve retornar false', () => {
    expect(validarEmail('testeexample.com')).toBe(false);
  });

  test('Email sem domínio deve retornar false', () => {
    expect(validarEmail('teste@')).toBe(false);
  });

  test('Email com espaços deve retornar false', () => {
    expect(validarEmail('teste @example.com')).toBe(false);
  });
});
