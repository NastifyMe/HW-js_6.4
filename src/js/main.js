import add from "./add.js"
import subtract from "./subtract.js"
import divide from "./divide.js"
import multiply from "./multiply.js"

const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')
const operator = document.querySelector('.operator')
const btn = document.querySelector('.btn')
const resultBox = document.querySelector('.result')
const clean = document.querySelector('.clean')

btn.addEventListener('click', () => {
  const a = Number(num1.value)
  const b = Number(num2.value)
  const op = operator.value.trim()

  let res

  if (op === '+') {
    res = add(a, b)
  } else if (op === '-') {
    res = subtract(a, b)
  } else if (op === '*') {
    res = multiply(a, b)
  } else if (op === '/') {
    res = divide(a, b)
  } else {
    res = 'Ви ввели невірний оператор'
  }

  resultBox.textContent = `Результат: ${res}`
})

clean.addEventListener('click', () => {
    num1.value = ''
    num2.value = ''
    resultBox.textContent = ''
})