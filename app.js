let form = document.getElementById('form')
let textInput = document.getElementById('textInput')
let dateInput = document.getElementById('dateInput')
let descInput = document.getElementById('descInput')

let msg = document.getElementById('msg')

let tasks = document.getElementById('tasks')
let addBtn = document.getElementById('add')

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
    acceptData()
    addBtn.setAttribute('data-bs-dismiss', 'modal')
    addBtn.click()
    //create function and invoke it right aaway at once
    ;(() => {
      addBtn.setAttribute('data-bs-dismiss', '')
    })()
  }
}

let data = {}

let acceptData = () => {
  data['text'] = textInput.value
  data['date'] = dateInput.value
  data['desc'] = descInput.value
  createTasks()
}

let createTasks = () => {
  tasks.innerHTML += `
  <div>
          <span class="fw-bold">${data.text}</span>
          <span class="small text-secondary">${data.date}</span>
          <p>${data.desc}</p>

          <span class="options">
            <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form"  class="fas fa-edit"></i>
            <i onClick="deleteTask(this)" class="fas fa-trash"></i>
          </span>
        </div>
        `
  resetForm()
}

let deleteTask = (e) => {
  e.parentElement.parentElement.remove()
}

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement
  textInput.value = selectedTask.children[0].innerHTML
  dateInput.value = selectedTask.children[1].innerHTML
  descInput.value = selectedTask.children[2].innerHTML
  selectedTask.remove()
}

let resetForm = () => {
  textInput.value = ''
  dateInput.value = ''
  descInput.value = ''
}
