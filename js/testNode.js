var mysql = require("mysql");

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "jay",
    password: "jay",
    db: "c9",
    port: "3306"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});