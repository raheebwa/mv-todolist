const renderCard = (title, desc) => {
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
  all(list) {
    const cardContainer = document.getElementById('tasks-list');

    list.forEach(lItem => {
      const card = renderCard(lItem.title, lItem.description);
      cardContainer.appendChild(card);
    });
    return cardContainer;
  },

  add(){
    const taskTitle = document.getElementById('taskName');
    const taskDesc = document.getElementById('taskDesc');
    
    const cardContainer = document.getElementById('tasks-list');

    const form = document.getElementById('task-form');
    form.addEventListener('submit', function (e) {
      const card = renderCard(taskTitle.value, taskDesc.value);
      cardContainer.appendChild(card);
      taskTitle.value = "";
      taskDesc.value = "";
      e.preventDefault();
    })

  }
};

export default tasksView;