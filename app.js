const express = require("express");

const app = express();
app.use(express.static(__dirname + '/public'));
const server = app.listen(3000, (req, res) => {
    console.log("Server started on port", server.address().port);
});

app.get("/", (req, res) => {
    res.sendFile("index.html");
});
app.get('*', function(req, res){
    res.send('Page Not Found 404', 404);
  });