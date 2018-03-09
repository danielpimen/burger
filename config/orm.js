var connection = require('./connection.js');

connection.connect(function(err) {
    if (err) {
        console.log('Error "ORM"');
        return;
    };
    console.log('You are connected');

});

var orm = {

    //selectAll
    selectAll: function(callback) {
        connection.query('SELECT * FROM burgers', function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    //insertOne
    insertOne: function(burgerName, callback) {
        connection.query('INSERT INTO burgers SET ?', {
                burger_name: burgerName,
                devoured: false
            },
            function(err, result) {
                if (err) throw err;
                callback(result);
            })
    },

    //updateOne
    updateOne: function(burgerID, callback) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }

}

module.exports = orm;