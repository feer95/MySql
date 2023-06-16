const { Router } = require("express");
const router = Router();
const usersCtrl = require("../controller/user.controller");
const mediaCtrl = require("../controller/medias");


// Reto 1
router.get('/students/:student_id', usersCtrl.getStudentsById);
router.get('/students', usersCtrl.getStudents);
router.post('/students', usersCtrl.postStudent);
router.put('/students', usersCtrl.putStudent);
router.delete('/students', usersCtrl.delStudent);

// Reto 2
router.get('/media/:student_id', mediaCtrl.getMedia);
router.get('/apuntadas/:student_id', mediaCtrl.getApuntadasById);
router.get('/apuntadas/', mediaCtrl.getApuntadas);
router.get('/impartidas/:teacher_id', mediaCtrl.getImpartidasById);
router.get('/impartidas', mediaCtrl.getImpartidas);




module.exports = router;