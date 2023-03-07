const fs = require("fs");

//outputs to desktop or folder main repo is in
fs.writeFile("../outerOutput.js", "test", (err) => {
    err ? console.log(err) : console.log("File successfully updated");
})