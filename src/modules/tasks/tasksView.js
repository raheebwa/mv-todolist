const tasksView = {
  all(list) {
    const cardContainer = document.getElementById('tasks-list');

    list.forEach(lItem => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card text-dark border-dark');

      const cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body');

      const cardTitle = document.createElement('h4');
      cardTitle.setAttribute('class', 'card-title');
      cardTitle.innerText = lItem.title;

      const cardText = document.createElement('p');
      cardText.setAttribute('class', 'card-text');
      cardText.innerText = lItem.description;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);

      card.appendChild(cardBody);

      cardContainer.appendChild(card);
    });
    return cardContainer;
  },

  add(){
    
  }

  // todo
  // find(project){}
  // show(project)
  // delete(project){}
};

export default tasksView;