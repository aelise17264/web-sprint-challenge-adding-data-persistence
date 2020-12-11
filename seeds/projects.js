
exports.seed = function(knex) {
const projectInfo = [
  {
    name: 'project1',
    project_desc: 'Description of Project1',
    completed: false
  },
  {
    name: 'project2',
    project_desc: 'Description of Project2',
    completed: false
  },
  
  {
    name: 'project3',
    project_desc: 'Description of Project3',
    completed: true
  },
]
      return knex('projects').insert(projectInfo)
    
};
