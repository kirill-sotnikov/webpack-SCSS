const fs = require("fs");

const filesArray = [];

fs.readdir("./styles/", (err, files) => {
  if (err) {
    throw new Error("can't find folder");
  }

  files.forEach((item) => {
    filesArray.push(`import './styles/${item}'`);
  });

  fs.writeFileSync("main.js", filesArray.join(";"));
});
