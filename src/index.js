import projectsModel from './modules/projects/projectsModel';
import projectsView from './modules/projects/projectsView';
import tasksModel from './modules/tasks/tasksModel';
import tasksView from './modules/tasks/tasksView';
import renderProjectForm from './modules/projects/addProjectForm';
import renderTaskForm from './modules/tasks/addTaskForm';

// console.log();

// Clean container
const clearContent = elementID => {
  const div = document.getElementById(elementID);
  div.removeChild(div.firstChild);
};

// render forms
document.getElementById('add-form').appendChild(renderProjectForm());
document.getElementById('add-form').appendChild(renderTaskForm());

//  Listen for clickevents
document.getElementById('btn-add-project').addEventListener('click', () => {
  // hide task form and display project form
  document.getElementById('project-form').className = "";
  document.getElementById('task-form').className = "d-none";
});

document.getElementById('btn-add-task').addEventListener('click', () => {
  document.getElementById('task-form').className = "";
  document.getElementById('project-form').className = "d-none";
});

// Render Project list
document.getElementById('project-list').appendChild(projectsView.all(projectsModel.allProjects()));
// Render Card list
tasksView.all(tasksModel.allTasks());
// Add to project list and store locally
projectsView.add();
// Add to tasklist and store locally
tasksView.add();