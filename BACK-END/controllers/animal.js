var validator = require('validator');
var fs = require('fs');
var path = require('path');
var Animal = require('../Estructura/animal');

var controller = {

    save: (req, res) => {
        var params = req.body;
        try {
            var validate_name = !validator.isEmpty(params.name);
            var validate_city = !validator.isEmpty(params.city);
            var validate_species = !validator.isEmpty(params.species);
            var validate_birthday = !validator.isEmpty(params.birthday);
            var validate_sex = !validator.isEmpty(params.sex);
            var validate_size = !validator.isEmpty(params.size);
            var validate_weight = !validator.isEmpty(params.weight);
            var validate_vaccinated = !validator.isEmpty(params.vaccinated);
            var validate_dewormed = !validator.isEmpty(params.dewormed);
            var validate_healthy = !validator.isEmpty(params.healthy);
            var validate_sterelized = !validator.isEmpty(params.sterelized);
            var validate_identified = !validator.isEmpty(params.identified);
            var validate_microchip = !validator.isEmpty(params.microchip);
            var validate_adoption_requirements = !validator.isEmpty(params.adoption_requirements);
            var validate_adoption_rate = !validator.isEmpty(params.adoption_rate);
            var validate_shipping = !validator.isEmpty(params.shipping);
            var validate_status = !validator.isEmpty(params.status);

        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos'
            });
        }
        if (validate_name && validate_city && validate_species && validate_birthday &&
            validate_sex && validate_size && validate_weight && validate_vaccinated &&
            validate_dewormed && validate_healthy && validate_sterelized && validate_identified &&
            validate_microchip && validate_adoption_requirements && validate_adoption_rate &&
            validate_shipping && validate_status) {
            var animal = new Animal();
            animal.image = null;
            animal.name = params.name;
            animal.city = params.city;
            animal.species = params.species;
            animal.birthday = params.birthday;
            animal.sex = params.sex;
            animal.size = params.size;
            animal.weight = params.weight;
            animal.vaccinated = params.vaccinated;
            animal.dewormed = params.dewormed;
            animal.healthy = params.healthy;
            animal.sterelized = params.sterelized;
            animal.identified = params.identified;
            animal.microchip = params.microchip;
            animal.adoption_requirements = params.adoption_requirements;
            animal.adoption_rate = params.adoption_rate;
            animal.shipping = params.shipping;
            animal.status = params.status;
            animal.history = params.history;
            animal.save((err, animalStored) => {
                if (err || !animalStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'Error al guardar!!'
                    });
                }
                return res.status(200).send({
                    animal: animalStored
                });
            });
        } else {
            return res.status(404).send({
                status: 'error',
                message: 'Datos NO validos!!'
            });
        }
    },
 
    update: (req, res) => {
        var animalId = req.params.id;
        var params = req.body;
        try {
            var validate_name = !validator.isEmpty(params.name);
            var validate_city = !validator.isEmpty(params.city);
            var validate_species = !validator.isEmpty(params.species);
            var validate_birthday = !validator.isEmpty(params.birthday);
            var validate_sex = !validator.isEmpty(params.sex);
            var validate_size = !validator.isEmpty(params.size);
            var validate_weight = !validator.isEmpty(params.weight);
            var validate_vaccinated = !validator.isEmpty(params.vaccinated);
            var validate_dewormed = !validator.isEmpty(params.dewormed);
            var validate_healthy = !validator.isEmpty(params.healthy);
            var validate_sterelized = !validator.isEmpty(params.sterelized);
            var validate_identified = !validator.isEmpty(params.identified);
            var validate_microchip = !validator.isEmpty(params.microchip);
            var validate_adoption_requirements = !validator.isEmpty(params.adoption_requirements);
            var validate_adoption_rate = !validator.isEmpty(params.adoption_rate);
            var validate_shipping = !validator.isEmpty(params.shipping);
            var validate_status = !validator.isEmpty(params.status);
        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos para actualizar el usuario'
            });
        }
        if (validate_name && validate_city && validate_species && validate_birthday &&
            validate_sex && validate_size && validate_weight && validate_vaccinated &&
            validate_dewormed && validate_healthy && validate_sterelized && validate_identified &&
            validate_microchip && validate_adoption_requirements && validate_adoption_rate &&
            validate_shipping && validate_status) {
            Animal.findByIdAndUpdate({ _id: animalId }, params, { new: true }, (err, animalChanged) => {
                if (err) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'Cambios no realizados!!'
                    });
                }
                if (!animalChanged) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el animal!!'
                    });
                }
                return res.status(200).send({
                    animal: animalChanged
                });
            });
        } else {
            return res.status(404).send({
                status: 'error',
                message: 'Animal no modificado!!'
            });
        }
    },
    getAnimals: (req, res) => {

        var query = Animal.find({})

        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(3);

        }
        query.sort('-_id').exec((err, animals) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los animales!!'
                });
            }
            if (!animals) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay animales para mostrar!!'
                });
            }
            return res.status(200).send({
                animals
            });
        });
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

            var animalId = req.params.id;
            Animal.findByIdAndUpdate({ _id: animalId }, { image: file_path }, { new: true }, (err, animalUpdated) => {

                if (err || !animalUpdated) {
                    return res.status(200).send({
                        status: 'error',
                        message: 'Error al guardar la imagen del animal!!'
                    });
                }
                return res.status(200).send({
                    animal: animalUpdated
                });
            });
        }
    },
    delete: (req, res) => {
        var animalId = req.params.id;
        Animal.findByIdAndDelete({ _id: animalId }, (err, animalDeleted) => {
            if (err || !animalDeleted) {
                return res.status(404).sen({
                    status: 'error',
                    message: 'Error al borrar animal'
                });
            }
            return res.status(200).send({
                animal: animalDeleted
            });
        });
    },
    animalSearch: (req, res) => {
        var animalId = req.params.id;
        Animal.find({ _id: animalId }, (err, animal) => {
            if (err || !animal) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Error al obtener animal'
                });
            }
            return res.status(200).send({
                animal: animal
            });
        });
    },
    search: (req, res) => {
        var searchString = req.params.search;
        Animal.find({
            "$or": [
                { "name": { "$regex": searchString, "$options": "i" } },
                { "city": { "$regex": searchString, "$options": "i" } },
                { "sex": { "$regex": searchString, "$options": "i" } },
                { "species": { "$regex": searchString, "$options": "i" } },]
        })
            .sort([['date', 'descending']])
            .exec((err, animals) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error en la peticion'
                    });

                }
                if (!animals || animals.length <= 0) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay animales que coincidan con tu busqueda!!'
                    });

                }
                return res.status(200).send({
                    animals
                });

            })
    },
    filters: (req, res) => {
        var filtersString = req.params.filters;
        Animal.find({
            "$or": [
                { "size": { "$regex": filtersString, "$options": "i" } },
                { "city": { "$regex": filtersString, "$options": "i" } },
                { "sex": { "$regex": filtersString, "$options": "i" } },
                { "species": { "$regex": filtersString, "$options": "i" } },]
        })
            .sort([['date', 'descending']])
            .exec((err, animals) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error en la peticion'
                    });
                }
                if (!animals || animals.length <= 0) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay animales que coincidan con tus filtros!!'
                    });

                }
                return res.status(200).send({
                    animals
                });

            });
    },

    status: (req, res) => {
        var animalStatus = req.params.status;
        Animal.find({ status: animalStatus }).sort([['date', 'descending']])
            .exec((err, animals) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error en la peticion'
                    });

                }
                if (!animals || animals.length <= 0) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay animales que coincidan con tu busqueda!!'
                    });

                }
                return res.status(200).send({
                    animals
                });
            });
        }
    }



    module.exports = controller;