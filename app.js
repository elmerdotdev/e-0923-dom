// const btn = document.querySelector('.trigger')
// const todo = document.querySelector('.todo')
// const control = document.querySelector('.btn-control')

// btn.addEventListener('click', () => {

//   const todoValue = document.querySelector('#todo-text').value
//   const newTodo = document.createElement("div")
//   newTodo.textContent = todoValue
//   newTodo.classList.add('task-item')
//   todo.prepend(newTodo)
  
// })


const addBtn = document.querySelector('.add')
const subBtn = document.querySelector('.subtract')
const mulBtn = document.querySelector('.multiply')
const divBtn = document.querySelector('.divide')
const result = document.querySelector('#result')

function calculate(num1, num2, operator) {
  let res = 0;
  if (operator === 'add') {
    res = Number(num1) + Number(num2)
  } else if (operator === 'subtract') {
    res = Number(num1) - Number(num2)
  } else if (operator === 'multiply') {
    res = Number(num1) * Number(num2)
  } else if (operator === 'divide') {
    res = Number(num1) / Number(num2)
  }

  return res
}

addBtn.addEventListener('click', () => {
  const num1 = document.querySelector('#val1').value
  const num2 = document.querySelector('#val2').value

  const sum = calculate(num1, num2, 'add')
  result.textContent = sum
})

subBtn.addEventListener('click', () => {
  const num1 = document.querySelector('#val1').value
  const num2 = document.querySelector('#val2').value

  const sum = calculate(num1, num2, 'subtract')
  result.textContent = sum
})

mulBtn.addEventListener('click', () => {
  const num1 = document.querySelector('#val1').value
  const num2 = document.querySelector('#val2').value

  const sum = calculate(num1, num2, 'multiply')
  result.textContent = sum
})

divBtn.addEventListener('click', () => {
  const num1 = document.querySelector('#val1').value
  const num2 = document.querySelector('#val2').value

  const sum = calculate(num1, num2, 'divide')
  result.textContent = sum
})


result.addEventListener('click', (event) => {
  console.log(event.target.getAttribute('customAttribute'))
})



const keyMonitor = document.querySelector('#keyMonitor')

keyMonitor.addEventListener('keyup', (event) => {
  console.log(event.key)
})



const bubble = document.querySelector('.bubble')
const bubbleBtn = document.querySelector('.bubble-btn')

bubble.addEventListener('click', () => {
  alert('clicked on red box!')
})

bubbleBtn.addEventListener('click', (event) => {
  event.stopPropagation()
  alert('CLICKED ON BUTTON!')
})
