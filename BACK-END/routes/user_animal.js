var express = require('express');
var UserController = require('../controllers/user');
var AnimalController = require('../controllers/animal');
var router = express.Router();
var multipart = require('connect-multiparty');
var md_uploadanimals = multipart({ uploadDir: './upload/animals' });
var md_uploadusers = multipart({ uploadDir: './upload/users' });
var auth = require('../middlewares/auth')



router.post('/save', UserController.save);
router.delete('/user/:id', UserController.delete);
router.put('/user/:id', UserController.update);
router.post('/upload-image/:id', md_uploadusers, UserController.upload);


router.post('/save/animal', AnimalController.save);
router.delete('/animal/:id', AnimalController.delete);
router.put('/animal-update/:id', AnimalController.update);
router.get('/animals/:last?', AnimalController.getAnimals);
router.post('/upload-image/animal/:id', md_uploadanimals, AnimalController.upload);
router.get('/search/:search', AnimalController.search);
router.get('/filtros/:filters', AnimalController.filters);
router.get('/animals/status/:status', AnimalController.status);
router.get('/animal/:id', AnimalController.animalSearch);





module.exports = router;