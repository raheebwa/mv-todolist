import projectsModel from '../projects/projectsModel';

// create form
const form = document.createElement('form');
form.setAttribute('id', 'edit-task');


const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('class', 'btn btn-outline-dark btn-block my-4');
submitBtn.innerText = 'Update Task';

const renderEditTaskForm = (title, desc, date, priority, project) => {
  // create form fields
  const textBox = (title = null) => {
    const textBox = document.createElement('input');
    textBox.setAttribute('type', 'text');
    textBox.setAttribute('class', 'form-control my-2');
    textBox.setAttribute('placeholder', 'Task title');
    textBox.setAttribute('id', 'taskName');
    textBox.setAttribute('name', 'task-name');
    if (title != null) {
      textBox.setAttribute('value', title);
    }
    return textBox;
  };
  const textArea = (desc) => {
    const textArea = document.createElement('textarea');
    textArea.setAttribute('class', 'form-control my-2');
    textArea.setAttribute('placeholder', 'Task Description');
    textArea.setAttribute('id', 'taskDesc');
    textArea.setAttribute('name', 'task-desc');
    if (desc != null) {
      textArea.innerText = (desc);
    }
    return textArea;
  };

  const textDate = (date) => {
    const textDate = document.createElement('input');
    textDate.setAttribute('type', 'date');
    textDate.setAttribute('class', 'form-control my-2');
    textDate.setAttribute('id', 'due-date');
    textDate.setAttribute('name', 'due-date');
    if (date != null) {
      textDate.setAttribute('value', date);
    }
    return textDate;
  };


  const renderSelect = (id, options, value) => {
    const select = document.createElement('select');
    select.setAttribute('class', 'form-control my-2');
    select.setAttribute('id', id);

    let count = 0;
    options.forEach(opt => {
      const option = document.createElement('option');
      option.setAttribute('value', count);
      option.innerText = opt;
      select.appendChild(option);
      if (value != null && Number(value) === count) {
        option.setAttribute('selected', 'selected');
      }
      count += 1;
    });

    return select;
  };

  const selectPriority = (priority) => renderSelect('select-priority', ['None', 'Low', 'Medium', 'High'], (priority != null) ? priority : null);
  const selectProjects = (project) => renderSelect('select-projects', projectsModel.allProjects(), (project != null) ? project : null);

  form.appendChild(textBox(title));
  form.appendChild(textArea(desc));
  form.appendChild(textDate(date));
  form.appendChild(selectPriority(priority));
  form.appendChild(selectProjects(project));
  form.appendChild(submitBtn);
  return form;
};

export default renderEditTaskForm;