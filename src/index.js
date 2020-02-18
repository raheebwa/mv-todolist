
import renderProjectForm from './modules/projects/addProjectForm';
import renderTaskForm from './modules/tasks/addTaskForm';

// Clean container
const clearContent = elementID => {
  const div = document.getElementById(elementID);
  div.removeChild(div.firstChild);
};

//  Listen for clickevents
document.getElementById('btn-add-project').addEventListener('click', () => {
  clearContent('add-form');
  document.getElementById('add-form').appendChild(renderProjectForm());
});

document.getElementById('btn-add-task').addEventListener('click', () => {
  clearContent('add-form');
  document.getElementById('add-form').appendChild(renderTaskForm());
});