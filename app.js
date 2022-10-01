let form = document.getElementById('form')
let textInput = document.getElementById('textInput')
let dateInput = document.getElementById('dateInput')
let descInput = document.getElementById('descInput')

let msg = document.getElementById('msg')

let Task = getElementById('tasks')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  formValidation()
})

let formValidation = () => {
  if (textInput.value === '') {
    msg.innerHTML = 'Task cannot be blank'
  } else {
    console.log('succees')
    msg.innerHTML = ''
  }
}
