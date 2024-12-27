const router = require('express').Router();
const { getToDo,saveToDo, updateToDo, deleteToDo } = require('../controllers/TodoController');


router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)


module.exports = router;