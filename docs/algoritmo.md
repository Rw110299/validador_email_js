# 🧩 Algoritmo de Validação de Email

Este documento explica **passo a passo** como o **validador de email em JavaScript** foi implementado no projeto.

---

## 🎯 Objetivo

Validar se um **endereço de email está em formato válido**, retornando:

✅ `true` se for válido  
❌ `false` se for inválido

---

## 🧪 Regras de Validação

O email é considerado válido se:

- Contiver o caractere `@`.
- Tiver ao menos um caractere antes do `@`.
- Tiver ao menos um `.` após o `@`.
- Não conter espaços em branco.
- O domínio (parte após `@`) possuir ao menos 2 caracteres antes do ponto e 2 após o ponto.

---

## ⚙️ Implementação

### 1️⃣ Utilização de Regex

Utiliza a seguinte expressão regular para validação:

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

# 🧩 Algoritmo de Validação de Email

Este documento explica **passo a passo** como o **validador de email em JavaScript** foi implementado no projeto.

---

## 🎯 Objetivo

Validar se um **endereço de email está em formato válido**, retornando:

✅ `true` se for válido  
❌ `false` se for inválido

---

## 🧪 Regras de Validação

O email é considerado válido se:

- Contiver o caractere `@`.
- Tiver ao menos um caractere antes do `@`.
- Tiver ao menos um `.` após o `@`.
- Não conter espaços em branco.
- O domínio (parte após `@`) possuir ao menos 2 caracteres antes do ponto e 2 após o ponto.

---

## ⚙️ Implementação

### 1️⃣ Utilização de Regex

Utiliza a seguinte expressão regular para validação:
```js
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

