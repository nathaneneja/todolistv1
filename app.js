// npm packages
const express = require("express");
const bodyParser = require("body-parser");
// express variable
const app = express();

let items = [""];

// ejs
app.set('view engine', 'ejs');
// body-parser activation
app.use(bodyParser.urlencoded({extended: true}));
// public files activation
app.use(express.static("public"));
// home route
app.get("/", (req, res)  => {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItems: items});

});

app.post("/", (request, response) => {
    item = request.body.newItem;

    items.push(item);
    
    response.redirect("/")
})

// listen on the port "3000"
app.listen(4000, () => {
    console.log("Server has started on port 5000");
});
