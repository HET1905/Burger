var connection = require("./connection.js");

// loop through the keys and push the key/value as a string int arr
  function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

}
// selectAll()
// insertOne()
// updateOne()
var orm = {
  selectAll: function(tableInput,cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(tableInput,cols,vals,cb) {

    var queryString = 'INSERT INTO ' + tableInput
    queryString += " (" + cols.toString() + ")";
    queryString += " VALUES (";
    queryString += printQuestionMarks(vals.length)+ ");";
    console.log(queryString);
    connection.query(queryString,vals ,function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },

  updateOne: function(tableInput, objColVals, condition, cb) {
    var queryString = "UPDATE " + tableInput;

    queryString += " SET ";
    queryString += 'devoured' + '=' + 1;
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};
 
module.exports = orm;
