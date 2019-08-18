var connection = require("./connection.js");

// loop through the keys and push the key/value as a string int arr
  function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
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
  }
  // findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
  //   var queryString =
  //     "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

  //   connection.query(
  //     queryString,
  //     [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
  //     function(err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     }
  //   );
  // }
};

module.exports = orm;
