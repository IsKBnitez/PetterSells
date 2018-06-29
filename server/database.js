const mongoose = require('mongoose');
const URI = 'mongodb://localhost/renta'

mongoose.connect(URI)
    .then(db=> console.log('DB Connected'))
    .catch(err => console.error(err));

module.exports = mongoose;