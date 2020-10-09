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
}

