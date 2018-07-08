const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (fileName) => {
    fs.writeFileSync(fileName, "", 'utf8');
};

module.exports.mkdir = (dirName) => {
     fs.mkdirSync(dirName);
};
