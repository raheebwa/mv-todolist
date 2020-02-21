// create form
const form = document.createElement('form');
form.setAttribute('id', 'project-form');
form.className = ('d-none');

// create form fields
const textBox = document.createElement('input');
textBox.setAttribute('type', 'text');
textBox.setAttribute('class', 'form-control my-2');
textBox.setAttribute('placeholder', 'Project Name');
textBox.setAttribute('id', 'projectName');
textBox.setAttribute('name', 'project-name');

const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('class', 'btn btn-outline-dark btn-block my-4');
submitBtn.innerText = 'Create Project';

const renderProjectForm = () => {
  form.appendChild(textBox);
  form.appendChild(submitBtn);
  return form;
};

export default renderProjectForm;