const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

//obtener todas las tareas
//http://loscalhost:3000/api/v1/tasks/
router.get('/',TaskController.getAllTasks);

//Agregar una nueva tarea
router.post('/', TaskController.insertTask);

//Actualizar algunas tareas con (put actualizaría todo)
router.patch('/:id', TaskController.updateTask);

//Eliminar una tarea
router.delete('/:id', TaskController.removeTask);

//Obtener una tarea
router.get('/:id', TaskController.getOneTask);

module.exports = router