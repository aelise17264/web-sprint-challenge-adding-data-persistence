const express = require('express')
const model = require('./model')

const Projects = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.getProject()
    .then(project => {
        res.status(200).json(project)
    }).catch(error => {
        res.status(500).json({message: "Failed to load projects"})
    })
})

router.post('/', (req, res) => {
    Projects.addProject(req.body)
    .then(project => {
        res.status(201).json(project)
    }).catch(error => {
        res.status(500).json({message: 'Failed to add Project'})
    })
})

router.get('/resources', (req, res) => {
    Projects.getResource()
    .then(resource => {
        res.status(200).json(resource)
    }).catch(error => {
        res.status(500).json({message: "Failed to load resources"})
    })
})

router.post('/resources', (req,res)=> {
    Projects.addResource(req.body)
    .then(resource => {
        res.status(201).json(resource)
    }).catch(error => {
        res.status(500).json({message: 'Failed to add Resource'})
    })
})

router.get('/:id/tasks', (req, res) => {
    const {id} = req.params
    
    Projects.getTask(id)
    .then(task => {
        if(task.length){
        res.status(200).json(task)
    }else{
        res.status(404).json({message: 'Can not find your tasks'})
    }
    }).catch(error => {
        res.status(500).json({message: "Failed to load tasks"})
    })
})

router.post('/:id/tasks', (req, res) => {
    const {id} = req.params
    const taskData = req.body
    const info = {
        ...taskData,
        project_id: id
    }

    Projects.getProjectById(id)
    .then(project => {
        if(project){
            Projects.addTask(info)
            .then(task => {
                res.status(200).json(task)
            }).catch(error =>{
                res.status(500).json({message: 'Could not add Task'})
            })
        }else{
            res.status(400).json({message: 'Could not find project with this id'})
        }
    }).catch(error => {
        res.status(500).json({message: "Failed to add task to this project"})
    })
})

module.exports = router