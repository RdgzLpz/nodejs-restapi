// this file is responsible of handling every route that start with '/task'

import  { Router } from 'express';
const router = Router();

//Database connection
import  { connect }  from '../database';
import { ObjectID } from 'mongodb';

/* get tasks */
router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    res.json(result);
});

/* post a task (from a form) */
router.post('/', async (req, res) => {
    const db = await connect();
    const task = {
        title: req.body.title,
        description: req.body.description
    };
    const result = await db.collection('tasks').insertOne(task);
    res.json(result.ops[0]);
});

/* get an specific task */
router.get('/:id', async (req, res) => {
    const { id } = req.params; // req.params es un objeto que trae el id
    const db = await connect();
    const result = await db.collection('tasks').findOne({_id: ObjectID(id)})
    res.json(result);
});

/* delete task */
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = db.collection('tasks').deleteOne({_id: ObjectID(id)});
    res.json({
        message: `Task ${id} deleted`,
        result
    });
});

/* put task (update) */
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updateTask = {
        title: req.body.title,
        description: req.body.description
    }
    const db = await connect();
    db.collection('tasks').updateOne({_id: ObjectID(id)}, {$set: updateTask}); // ( {match}, {update} )
    res.json(`Task ${id} Updated`); 
});


export default router;