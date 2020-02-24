import tasksModel from './tasksModel';
import database from '../database';
import renderEditTaskForm from "./EditTaskForm";
import { clearContent, mySafeString, deleteValue } from '../utlities';
import projectsModel from '../projects/projectsModel';

const renderCard = (title, desc, dueDate, priority, count, project) => {
  const card = document.createElement('div');
  card.setAttribute('project-number', project);
  card.classList.add('card', 'text-dark', 'border-warning', 'bg-warning');
  card.setAttribute('id', `card-no-${count}`);
  const priorityBadge = document.createElement('span');
  if (Number(priority) === 1) {
    priorityBadge.setAttribute('class', 'badge badge-info');
    priorityBadge.innerText = 'Priority: Low';
  } else if (Number(priority) === 2) {
    priorityBadge.setAttribute('class', 'badge badge-success');
    priorityBadge.innerText = 'Priority: Medium';
  } else if (Number(priority) === 3) {
    priorityBadge.setAttribute('class', 'badge badge-danger');
    priorityBadge.innerText = 'Priority: High';
  } else {
    priorityBadge.setAttribute('class', 'badge badge-primary');
    priorityBadge.innerText = 'Priority: None';
  }

  const btnEdit = document.createElement('a');
  btnEdit.setAttribute('id', 'edit-btn');
  btnEdit.classList.add('mr-1', 'btn', 'btn-sm', 'btn-outline-dark');
  btnEdit.setAttribute('href', '#');
  btnEdit.setAttribute('edit-data-id', count);
  btnEdit.innerText = 'Edit';
  btnEdit.addEventListener('click', ()=>{
    tasksView.edit(btnEdit.getAttribute('edit-data-id'));
  })


  const btnDel = document.createElement('a');
  btnDel.classList.add('btn', 'btn-sm', 'btn-dark');
  btnDel.setAttribute('id', 'del-btn');
  btnDel.setAttribute('href', '#');
  btnDel.setAttribute('data-project-id', count);
  btnDel.innerText = 'Done';
  btnDel.addEventListener('click', ()=>{
    btnDel.parentElement.parentElement.classList.add("d-none");
    database.store('tasks',deleteValue(tasksModel.allTasks(), Number(btnDel.getAttribute('data-project-id'))));
  });

  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card-body');

  const cardHeader = document.createElement('div');
  cardHeader.setAttribute('class', 'card-header');

  const cardFooter = document.createElement('div');
  cardFooter.setAttribute('class', 'card-footer');

  const cardTitle = document.createElement('h4');
  cardTitle.setAttribute('class', 'card-title');
  cardTitle.innerText = title;

  const cardText = document.createElement('p');
  cardText.setAttribute('class', 'card-text');
  cardText.setAttribute('id', `task-no-${count}`);
  cardText.innerText = desc;

  const cardBadge = document.createElement('span');
  cardBadge.setAttribute('class', 'badge badge-secondary mr-1');
  cardBadge.innerText = `Due: ${dueDate}`;

  cardHeader.appendChild(btnEdit);
  cardHeader.appendChild(btnDel);
  cardFooter.appendChild(cardBadge);
  cardFooter.appendChild(priorityBadge);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  return card;
};

const tasksView = {
  all(project = 0) {
    const cardContainer = document.getElementById('tasks-list');
    const projectTitle = document.getElementById('project-title');
    projectTitle.innerText = '';
    projectTitle.innerText = projectsModel.allProjects()[project];

    tasksModel.allTasks().forEach(function(lItem, index) {
      const card = renderCard(lItem.title, lItem.description,
        lItem.dueDate, lItem.priority, index, lItem.project);
        if (project != lItem.project) {
          card.classList.add('d-none');
        }
      cardContainer.appendChild(card);
    });
    return cardContainer;
  },

  add() {
    const taskTitle = document.getElementById('taskName');
    const taskDesc = document.getElementById('taskDesc');
    const taskDueDate = document.getElementById('due-date');
    const taskPriority = document.getElementById('select-priority');
    const taskProject = document.getElementById('select-projects');


    const cardContainer = document.getElementById('tasks-list');

    const form = document.getElementById('task-form');
    form.addEventListener('submit', (e) => {
      const myTask = {
        title: taskTitle.value,
        description: taskDesc.value,
        dueDate: taskDueDate.value,
        priority: taskPriority.value,
        project: taskProject.value,
      };

      const card = renderCard(myTask.title, myTask.description, myTask.dueDate,
        myTask.priority, myTask.project);
      cardContainer.appendChild(card);

      if (!database.retrieve('tasks')) {
        tasksModel.addTask(myTask);
        database.store('tasks', tasksModel.allTasks());
      } else {
        const storedTask = database.retrieve('tasks');
        storedTask.push(myTask);
        database.store('tasks', storedTask);
      }

      taskTitle.value = '';
      taskDesc.value = '';
      taskDueDate.value = '';
      taskPriority.value = 0;
      taskProject.value = 0;

      e.preventDefault();
    });
  },

  edit(id) {
    clearContent('add-form');
    let myTask = tasksModel.allTasks()[Number(id)];
    const myForm = renderEditTaskForm(myTask.title, myTask.description, myTask.dueDate,
      myTask.priority, myTask.project);
    const formContainer = document.getElementById('add-form');
    formContainer.appendChild(myForm);
    
    const editForm = document.getElementById('edit-task');
    editForm.addEventListener('submit', (e) => {
      const taskTitle = document.getElementById('taskName');
      const taskDesc = document.getElementById('taskDesc');
      const taskDueDate = document.getElementById('due-date');
      const taskPriority = document.getElementById('select-priority');
      const taskProject = document.getElementById('select-projects');

      const myEditedTask = {
        title: taskTitle.value,
        description: taskDesc.value,
        dueDate: taskDueDate.value,
        priority: taskPriority.value,
        project: taskProject.value,
      };

      const data = tasksModel.allTasks(); 

     data[Number(id)] = myEditedTask;
      database.store('tasks', data);
      location.reload();

    })
  }

};

export default tasksView;