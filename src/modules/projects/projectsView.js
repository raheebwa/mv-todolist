
const renderListItem = (content) => {
  const listItem = document.createElement('a');
  listItem.setAttribute('class', 'border border-dark rounded-0 list-group-item list-group-item-action');
  listItem.innerHTML = content;
  return listItem
}

const projectsView = {
  all(list) {
    const listGroup = document.createElement('div');
    listGroup.setAttribute('class', 'list-group border border-dark');
    listGroup.setAttribute('id', 'project-list-group');

    list.forEach(lItem => {
      const listItem = renderListItem(lItem);
      listGroup.appendChild(listItem);
    });
    return listGroup;
  },

  add(){
    const projValue = document.getElementById('projectName');

    const listGroup = document.getElementById('project-list-group');

    const form = document.getElementById('project-form');
    form.addEventListener('submit', function (e) {
      const listItem = renderListItem(projValue.value);
      listGroup.appendChild(listItem);
      projValue.value = "";
      e.preventDefault(); 
    });

  }
};

export default projectsView;