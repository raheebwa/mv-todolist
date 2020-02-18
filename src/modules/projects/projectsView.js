
const projectsView = {
  all(list) {
    const listGroup = document.createElement('div');
    listGroup.setAttribute('class', 'list-group border border-dark');

    list.forEach(lItem => {
      const listItem = document.createElement('a');
      listItem.setAttribute('class', 'border border-dark rounded-0 list-group-item list-group-item-action');
      listItem.innerHTML = lItem;
      listGroup.appendChild(listItem);
    });
    return listGroup;
  },
};

export default projectsView;