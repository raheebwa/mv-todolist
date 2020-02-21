
import database from "./../database";
//  Database of Projects
const projects = ['Default'];


const projectsModel = {
  allProjects() {
   if (!database.retrieve('projects')) {
     return projects;
   } else {
     return database.retrieve('projects'); 
   }
  },

  addProject(project) {
    projects.push(project);
  },
};

export default projectsModel;