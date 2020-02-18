const tasks = ['Test Page', 'Add New Task(s) Under Each Project', 'Delete Task(s) under Each Project'];


const tasksModel = {
  allTasks() {
    return tasks;
  },

  addTask(task) {
    tasks.push(task);
  },
};

export default tasksModel;