const fs = require("fs");
const incomingFile = require("./incoming.json");

// const incomingFileText = JSON.stringify(incomingFile).split(`"productid"`);

// const info = `{
//     "test": "test"
// }`

// fs.writeFile("./output.json", info, (err) => {
//     err ? console.log(err) : console.log("Anti-Cheat file updated")
// });

//save users original product id and sandbox id to revert changes when re-enabling anti-cheat and online-mode
const userInfo = `{
    "productid": "${incomingFile.productid}",
    "sandboxid": "${incomingFile.sandboxid}"
}`
fs.writeFile("./db.json", userInfo, (err) => {
    err ? console.log(err) : console.log("Original ID values saved to database")
})

//change product id and sandbox id to new values
incomingFile.productid = "420";
incomingFile.sandboxid = "420d";
//set the newly, changed, JSON object as a stringified version to the newFile variable
const newFile = JSON.stringify(incomingFile);
//overwrite the original file
fs.writeFile("./output.json", newFile, (err) => {
    err ? console.log(err) : console.log("File successfully updated");
})