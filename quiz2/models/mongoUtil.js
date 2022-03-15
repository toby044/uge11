const mongoose = require('mongoose');

module.exports = {
    mongoConnect: async function () {    // utility function: connect to mongodb server
        const DBS = "127.0.0.1"; // Database Server
        const DBN = "quizdatabase"; // Database Name
        const CONSTR = `mongodb://${DBS}:27017/${DBN}`; // Connection String
        const PARAMS = { useNewUrlParser: true, useUnifiedTopology: true };
        await mongoose.connect(CONSTR, PARAMS); // Afvent forbindelse før der må gøres mere
        return mongoose.connection;
    }
};