import database from '../database';

const tasks = [
  {
    title: 'Test Task',
    description: 'This is a test task, You can edit or delete it',
    dueDate: '2021-11-03',
    priority: 0,
    project: 0,
  },
];

const tasksModel = {
  allTasks() {
    if (!database.retrieve('tasks')) {
      return tasks;
    }
    return database.retrieve('tasks');
  },

  addTask(task) {
    tasks.push(task);
  },
};

export default tasksModel;