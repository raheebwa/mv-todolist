import projectsModel from '../projects/projectsModel';

// create form
const form = document.createElement('form');
form.setAttribute('id', 'task-form');
form.className = ('d-none');
// create form fields
const textBox = (value = null) => {
  let textBox = document.createElement('input');
textBox.setAttribute('type', 'text');
textBox.setAttribute('class', 'form-control my-2');
textBox.setAttribute('placeholder', 'Task title');
textBox.setAttribute('id', 'taskName');
textBox.setAttribute('name', 'task-name');
if (value != null) {
  textBox.setAttribute('value',value);
}
  return textBox
}; 
const textArea = (value = null) => {
  let textArea = document.createElement('textarea');
textArea.setAttribute('class', 'form-control my-2');
textArea.setAttribute('placeholder', 'Task Description');
textArea.setAttribute('id', 'taskDesc');
textArea.setAttribute('name', 'task-desc');
  if (value != null) {
    textArea.setAttribute('value', value);
  }
  return textArea
}

const textDate = (value = null) =>{
  let textDate = document.createElement('input');
textDate.setAttribute('type', 'date');
textDate.setAttribute('class', 'form-control my-2');
textDate.setAttribute('id', 'due-date');
textDate.setAttribute('name', 'due-date');
if (value != null) {
  textDate.setAttribute('value', value);
}
  return textDate;
}


const renderSelect = (id, options, value = null) => {
  const select = document.createElement('select');
  select.setAttribute('class', 'form-control my-2');
  select.setAttribute('id', id);

  if (value != null) {
    pop.setAttribute('selected', value);
  }

  let count = 0;
  options.forEach(opt => {
    const option = document.createElement('option');
    option.setAttribute('value', count);
    option.innerText = opt;
    select.appendChild(option);
    if (value != null && value == count) {
      option.setAttribute('selected', 'selected');
    }
    count += 1;
  });

  return select;
};

const selectPriority = (value = null) => { 
  return renderSelect('select-priority', ['None', 'Low', 'Medium', 'High'], (value != null)? value: null );
}
const selectProjects = (value = null) => { 
  return renderSelect('select-projects', projectsModel.allProjects(), (value != null)? value: null );
}

const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('class', 'btn btn-outline-dark btn-block my-4');
submitBtn.innerText = 'Submit Task';

const renderTaskForm = (title, desc, date, priority, project) => {
  form.appendChild(textBox(title));
  form.appendChild(textArea(desc));
  form.appendChild(textDate(date));
  form.appendChild(selectPriority(priority));
  form.appendChild(selectProjects(project));
  form.appendChild(submitBtn);
  return form;
};

export default renderTaskForm;