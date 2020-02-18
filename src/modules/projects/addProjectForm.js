// find form container
const formContainer = document.getElementById('add-form');

// create form
const form = document.createElement('form');

// create form fields
const textBox = document.createElement('input');
textBox.setAttribute('type', 'text');
textBox.setAttribute('class', 'form-control my-2');
textBox.setAttribute('placeholder', 'Project Name');
textBox.setAttribute('id', 'project-name');

const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('class', 'btn btn-outline-dark btn-block my-4');
submitBtn.innerText = 'Create Project';

const renderProjectForm = () => {
  form.appendChild(textBox);
  form.appendChild(submitBtn);
  formContainer.appendChild(form);

  return formContainer;
};

export default renderProjectForm;