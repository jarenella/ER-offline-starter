const fs = require("fs");
const incomingFile = require("./incoming.json");

//change product id and sandbox id to new values
incomingFile.productid = "420";
incomingFile.sandboxid = "420d";
//set the newly, changed, JSON object as a stringified version to the newFile variable
const newFile = JSON.stringify(incomingFile);

//get the first text after first bracket and add a new line to format document properly
const noTitle = newFile.split(`"title"`);
const final = noTitle[0] + `\n "title"` + noTitle[1];

//get the last text after first bracket and add a new line to format document properly
const noBottom = final.split(`"bottom-left"`);
const bottomFinal = noBottom[0] + `"bottom-left" \n` + noBottom[1];

//split at every comma and add a new line to format document properly
const noCommas = bottomFinal.split(",");
const formatted = noCommas.join(", \n");


console.log(formatted);

//overwrite the original file
// fs.writeFile("./output.json", newFile, (err) => {
//     err ? console.log(err) : console.log("File successfully updated");
// })