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

//  Listen for clickevents
document.getElementById('btn-add-project').addEventListener('click', () => {
  clearContent('add-form');
  document.getElementById('add-form').appendChild(renderProjectForm());
});

document.getElementById('btn-add-task').addEventListener('click', () => {
  clearContent('add-form');
  document.getElementById('add-form').appendChild(renderTaskForm());
});

// Render Project list
document.getElementById('project-list').appendChild(projectsView.all(projectsModel.allProjects()));
// Render Card list
document.getElementById('tasks-list').appendChild(tasksView.all(tasksModel.allTasks()));