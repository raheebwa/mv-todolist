import tasksModel from "./tasksModel";
import database from "./../database";

const renderCard = (title, desc, dueDate, priority, project) => {
  const card = document.createElement('div');
  card.setAttribute('class', 'card text-dark border-dark');

  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card-body');

  const cardTitle = document.createElement('h4');
  cardTitle.setAttribute('class', 'card-title');
  cardTitle.innerText = title;

  const cardText = document.createElement('p');
  cardText.setAttribute('class', 'card-text');
  cardText.innerText = desc;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  return card;
}

const tasksView = {
  all() {
    const cardContainer = document.getElementById('tasks-list');

    tasksModel.allTasks().forEach(lItem => {
      const card = renderCard(lItem.title, lItem.description);
      cardContainer.appendChild(card);
    });
    return cardContainer;
  },

  add(){
    const taskTitle = document.getElementById('taskName');
    const taskDesc = document.getElementById('taskDesc');
    const taskDueDate = document.getElementById('due-date');
    const taskPriority = document.getElementById('select-priority');
    const taskProject = document.getElementById('select-projects');
    
    
    const cardContainer = document.getElementById('tasks-list');

    const form = document.getElementById('task-form');
    form.addEventListener('submit', function (e) {
      const myTask = {
        title: taskTitle.value,
        description: taskDesc.value,
        dueDate: taskDueDate.value,
        priority: taskPriority.value,
        project: taskProject.value,
      };

      const card = renderCard(myTask.title, myTask.description, myTask.dueDate, myTask.priority, myTask.project);
      cardContainer.appendChild(card);

      if (!database.retrieve('tasks')) {
        tasksModel.addTask(myTask);
        database.store('tasks', tasksModel.allTasks());
      } else {
        const storedTask = database.retrieve('tasks');
        storedTask.push(myTask);
        database.store('tasks', storedTask);
      }

      taskTitle.value = "";
      taskDesc.value = "";
      taskDueDate.value = "";
      taskPriority.value = 0;
      taskProject.value = 0;

      e.preventDefault();
    })

  }
};

export default tasksView;