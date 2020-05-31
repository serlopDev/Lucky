var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = Schema({
    image: { type: String },
    name: { type: String },
    city: { type: String },
    datos: {
        type: {
            species: { type: String },
            birthday: { type: String },
            sex: { type: String },
            size: { type: String },
            weight: { type: String },
            status: { type: String },
            history: { type: String }
        }
    },
    salud: {
        type: {
            vaccinated: { type: String },
            dewormed: { type: String },
            healthy: { type: String },
            sterelized: { type: String },
            identified: { type: String },
            microchip: { type: String },
        }
    },
    adopcion: {
        type: {
            adoption_requirements: { type: String },
            adoption_rate: { type: String },
            shipping: { type: String }
        }
    }
});

module.exports = mongoose.model('Animal', animalSchema);