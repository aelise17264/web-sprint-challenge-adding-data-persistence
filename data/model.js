const db = require('./db-config')

module.exports = {
    addResource,
    getResource,
    getProject,
    addProject,
    getProjectById,
    getTask,
    addTask
    
}

function addResource(newResource){
    return db('resources')
    .insert(newResource, 'id')
}

function getResource(){
    return db('resources')
}

function addProject(newProject){
return db('projects').insert(newProject)
}

function getProject(){
    return db('projects')
}

function getProjectById(){
    return db('projects')
    .where({id})
    .first()
}

function addTask(newTask){
    return db('task').insert(newTask)
}

function getTask(){
    return db('task')
    // .select('p.id', 't.project_id', 't.task_desc', 't.notes', 't.completed')
    // .from('task as t')
    // .join('projects as p', 't.project_id', '=', 'p.id' )
    // .where('project_id', id)
}

