//  Database of Projects
const projects = ['Default', 'Javascript', 'HTML5', 'CSS3', 'Ruby', 'Ruby On Rails'];


const projectsModel = {
  allProjects() {
    return projects;
  },

  addProject(project) {
    projects.push(project);
  },
};

export default projectsModel;