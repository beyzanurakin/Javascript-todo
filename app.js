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
//we can acces this value from everywhere because its scope is global
let data = []

let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: descInput.value,
  })
  localStorage.setItem('data', JSON.stringify(data))
  console.log(data)
  createTasks()
}

let createTasks = () => {
  tasks.innerHTML = ''
  data.map((task, i) => {
    return (tasks.innerHTML += `
  <div id=${i}>
          <span class="fw-bold">${task.text}</span>
          <span class="small text-secondary">${task.date}</span>
          <p>${task.desc}</p>

          <span class="options">
            <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form"  class="fas fa-edit"></i>
            <i onClick="deleteTask(this)" class="fas fa-trash"></i>
          </span>
        </div>
        `)
  })

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

//IIFE  JavaScript function that runs as soon as it is defined.
;(() => {
  data = JSON.parse(localStorage.getItem('data'))
  createTasks()
  console.log(data)
})()
