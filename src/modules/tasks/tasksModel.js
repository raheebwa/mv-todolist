const tasks = [
  {
    title: 'Test Page',
    description: 'This is a test task',
    dueDate: '2021-11-03',
    priority: 0,
    project: 0,
  }, {
    title: 'Some other Task',
    description: 'This is a test task',
    dueDate: '2021-11-03',
    priority: 0,
    project: 0,
  },
];

const tasksModel = {
  allTasks() {
    return tasks;
  },

  addTask(task) {
    tasks.push(task);
  },
};

export default tasksModel;