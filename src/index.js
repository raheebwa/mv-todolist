
import projectsView from './modules/projects/projectsView';
import tasksView from './modules/tasks/tasksView';
import renderProjectForm from './modules/projects/addProjectForm';
import renderTaskForm from './modules/tasks/addTaskForm';


// render forms
document.getElementById('add-form').appendChild(renderProjectForm());
document.getElementById('add-form').appendChild(renderTaskForm());

//  Listen for clickevents
document.getElementById('btn-add-project').addEventListener('click', () => {
  // hide task form and display project form
  document.getElementById('project-form').className = '';
  document.getElementById('task-form').className = 'd-none';
});

document.getElementById('btn-add-task').addEventListener('click', () => {
  document.getElementById('task-form').className = '';
  document.getElementById('project-form').className = 'd-none';
});

// Render Project list
document.getElementById('project-list').appendChild(projectsView.all());
// Render Card list
tasksView.all();
// Add to project list and store locally
projectsView.add();
// Add to tasklist and store locally
tasksView.add();
