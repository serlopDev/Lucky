

var validator = require('validator');
var User = require('../Estructura/User');


var controller = {

    save: (req, res) => {
        var params = req.body;
        try {
            var validate_username = !validator.isEmpty(params.username);
            var validate_name = !validator.isEmpty(params.name);
            var validate_surname = !validator.isEmpty(params.surname);
            var validate_birthday = !validator.isEmpty(params.birthday);
            var validate_email = !validator.isEmpty(params.email);
            var validate_password = !validator.isEmpty(params.password);
        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos'
            });
        }
        if (validate_username && validate_name && validate_surname && validate_birthday && validate_email && validate_password) {
            var user = new User();
            user.image = null;
            user.username = params.username;
            user.name = params.name;
            user.surname = params.surname;
            user.birthday = params.birthday;
            user.email = params.email;
            user.password = params.password;
            user.save((err, userStored) => {
                if (err || !userStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'Error al guardar!!'
                    });
                }
                return res.status(200).send({
                    user: userStored
                });
            });
        } else {
            return res.status(404).send({
                status: 'error',
                message: 'Datos NO validos!!'
            });
        }

    },
 /*   signUp(req, res) {
        const user = new User({
            username: req.body.username,
            name: req.body.name,
            surname: req.body.surname,
            birthday: req.body.birthday,
            email: req.body.email,
            password: req.body.password,

        });
        user.save((err) => {
            if (err)
                res.status(500).send({
                    message: `Error al crear usuario`
                })
            return res.status(200).send({
                token: service.createToken(user)
            });       /*service es una funcion que ayuda a realizar acciones que repitas en el codigo 
        });
    },

    signIn(req, res) {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (err)
                return res.status(500).send({
                    message: `Error al ingresar usuario`
                });
            if (!isMatch)
                return res.status(404).send({
                    message: `Error de contraseña`
                });
            req.user = user
            res.status(200).send({
                message: 'Logueado correctamente',
                token: service.createToken(user)
            });
        });
    },*/
    delete: (req, res) => {
        var userId = req.params.id;

        User.findByIdAndDelete({ _id: userId }, (err, userDeleted) => {
            if (err || !userDeleted) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Error al borrar usuario'
                });
            }
            return res.status(200).send({
                user: userDeleted
            });
        });
    },
 
    update: (req, res) => {
        var userId = req.params.id;
        var params = req.body;
        try {
            var validate_username = !validator.isEmpty(params.username);
            var validate_name = !validator.isEmpty(params.name);
            var validate_surname = !validator.isEmpty(params.surname);
            var validate_email = !validator.isEmpty(params.email);
            var validate_password = !validator.isEmpty(params.password);
        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos para actualizar el usuario'
            });
        }
        if (validate_username && validate_name && validate_surname && validate_email && validate_password) {
            User.findByIdAndUpdate({ _id: userId }, params, { new: true }, (err, userChanged) => {
                if (err) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'Cambios no realizados!!'
                    });
                }
                if (!userChanged) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el usuario!!'
                    });
                }
                return res.status(200).send({
                    user: userChanged
                });
            });
        } else {
            return res.status(404).send({
                status: 'error',
                message: 'Usuario no modificado!!'
            });
        }
    },
    upload: (req, res) => {
        var file_name = 'Imagen no subida...';

        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }
        var file_path = req.files.image.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[2];
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];
        if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {

            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'La extension de la imagen no es valida!!'
                });
            });
        } else {

            var userId = req.params.id;
            User.findByIdAndUpdate({ _id: userId }, { image: file_path }, { new: true }, (err, userUpdate) => {

                if (err || !userUpdate) {
                    return res.status(200).send({
                        status: 'error',
                        message: 'Error al guardar la imagen del usuario!!'
                    });
                }
                return res.status(200).send({
                    user: userUpdate
                });
            });
        }
    }
  
}

module.exports = controller;




