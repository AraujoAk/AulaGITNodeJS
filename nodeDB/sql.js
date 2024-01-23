const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "usbw",
  database:"escola"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM alunos", function (err, result, fields) {
      if (err) throw err;
      console.log (result);
    });
  });