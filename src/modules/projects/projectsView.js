import projectsModel from './projectsModel';
import database from '../database';
import tasksView from "./../tasks/tasksView";

const renderListItem = (content, id) => {
  const listItem = document.createElement('a');
  listItem.setAttribute('class', 'border border-dark rounded-0 list-group-item list-group-item-action');
  listItem.setAttribute('id', 'proj-'+id);
  listItem.innerHTML = content;
  return listItem;
};

const projectsView = {
  all() {
    const listGroup = document.createElement('div');
    listGroup.setAttribute('class', 'list-group border border-dark');
    listGroup.setAttribute('id', 'project-list-group');

    projectsModel.allProjects().forEach((lItem, index) => {
      const listItem = renderListItem(lItem, index);
      listItem.addEventListener('click', ()=>{
        document.getElementById('tasks-list').innerText = '';
        tasksView.all(index);
      });
      listGroup.appendChild(listItem);
    });
    return listGroup;
  },

  add() {
    const projValue = document.getElementById('projectName');
    const listGroup = document.getElementById('project-list-group');

    const form = document.getElementById('project-form');
    form.addEventListener('submit', (e) => {
      const listItem = renderListItem(projValue.value);
      listGroup.appendChild(listItem);
      if (!database.retrieve('projects')) {
        projectsModel.addProject(projValue.value);
        database.store('projects', projectsModel.allProjects());
      } else {
        const storedProj = database.retrieve('projects');
        storedProj.push(projValue.value);
        database.store('projects', storedProj);
      }
      projValue.value = '';
      location.reload();
    });
  },
};

export default projectsView;