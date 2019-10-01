const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-jt7lc.mongodb.net/cinema_app?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
        .catch((error) => { console.log(error); });

module.exports = mongoose;
