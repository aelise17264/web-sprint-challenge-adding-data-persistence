
exports.seed = function(knex) {
 
const taskInfo = [
  {
    task_desc: 'Description of task 1',
    notes: 'All of the little things you need to know about task 1',
    completed: false,
    project_id: 1
  }, {
    task_desc: 'Description of task 2',
    notes: 'All of the little things you need to know about task 2',
    completed: false,
    project_id: 1
  }, {
    task_desc: 'Description of task 3',
    notes: 'All of the little things you need to know about task 3',
    completed: false,
    project_id: 1
  }, {
    task_desc: 'Description of task 1',
    notes: 'All of the little things you need to know about task 1',
    completed: false,
    project_id: 2
  }, {
    task_desc: 'Description of task 2',
    notes: 'All of the little things you need to know about task 2',
    completed: false,
    project_id: 2
  }, {
    task_desc: 'Description of task 3',
    notes: 'All of the little things you need to know about task 3',
    completed: false,
    project_id: 2
  }, {
    task_desc: 'Description of task 1',
    notes: 'All of the little things you need to know about task 1',
    completed: false,
    project_id: 3
  }, {
    task_desc: 'Description of task 2',
    notes: 'All of the little things you need to know about task 2',
    completed: false,
    project_id: 3
  }, {
    task_desc: 'Description of task 3',
    notes: 'All of the little things you need to know about task 3',
    completed: false,
    project_id: 3
  },

]

      return knex('task').insert(taskInfo);
    
};
