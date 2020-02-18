import projectsModel from '../projects/projectsModel';

// find form container
const formContainer = document.getElementById('task-form');

// create form
const form = document.createElement('form');

// create form fields
const textBox = document.createElement('input');
textBox.setAttribute('type', 'text');
textBox.setAttribute('class', 'form-control my-2');
textBox.setAttribute('placeholder', 'Task title');
textBox.setAttribute('id', 'task-name');
textBox.setAttribute('name', 'task-name');

const textArea = document.createElement('textarea');
textArea.setAttribute('class', 'form-control my-2');
textArea.setAttribute('placeholder', 'Task Description');
textArea.setAttribute('id', 'task-desc');
textArea.setAttribute('name', 'task-desc');

const textDate = document.createElement('input');
textDate.setAttribute('type', 'date');
textDate.setAttribute('class', 'form-control my-2');
textDate.setAttribute('id', 'due-date');
textDate.setAttribute('name', 'due-date');

const renderSelect = (id, options) => {
  const select = document.createElement('select');
  select.setAttribute('class', 'form-control my-2');
  select.setAttribute('id', id);

  options.forEach(opt => {
    const option = document.createElement('option');
    option.setAttribute('value', opt);
    option.innerText = opt;
    select.appendChild(option);
  });

  return select;
};

const selectPriority = renderSelect('select-priority', ['None', 'Low', 'Medium', 'High']);
const selectProjects = renderSelect('select-projects', projectsModel.allProjects());

const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('class', 'btn btn-outline-dark btn-block my-4');
submitBtn.innerText = 'Create Task';

const renderTaskForm = () => {
  form.appendChild(textBox);
  form.appendChild(textArea);
  form.appendChild(textDate);
  form.appendChild(selectPriority);
  form.appendChild(selectProjects);
  form.appendChild(submitBtn);

  formContainer.appendChild(form);
  return formContainer;
};

export default renderTaskForm;