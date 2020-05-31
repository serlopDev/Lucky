var mongoose = require('mongoose');
var app = require('./app');
var port = 2020;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://JS:1234@lucky-db-1ozr2.mongodb.net/test?retryWrites=true&w=majority', { 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => {
       app.listen(port, () => { 
         console.log('servidor corriendo en http://localhost:' + port)});
    });