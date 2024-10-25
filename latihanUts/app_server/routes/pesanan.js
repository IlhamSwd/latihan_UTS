var express = require('express');
var router = express.Router();

const psnController = require('../controllers/pesanan');
router.get("/", psnController.index); //list mahasiswa
router.post("/insert", psnController.insert); //insert mahasiswa
router.patch("/update/:id", psnController.update); //mengupdate mahasiswa
router.get("/show/:id", psnController.show); //show detail mahasiswa by id
router.delete("/delete/:id", psnController.destroy); //delete mahasiswa by id

module.exports = router;