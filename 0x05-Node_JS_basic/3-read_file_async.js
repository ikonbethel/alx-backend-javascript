// Read file asynchronously
const fs = require('fs');

function parseData(data) {
  try {
    const lines = data.split('\n');
    const contents = lines.slice(1);
    const content = contents.filter((line) => line !== '');
    const cs = [];
    const swe = [];

    for (const line of content) {
      const column = line.split(',');
      if (column[3] === 'CS') {
        cs.push(column[0]);
      } else {
        swe.push(column[0]);
      }
    }

    console.log(`Number of students: ${content.length}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (error) {
    // throw new Error('Cannot load the database');
  }
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // fs.stat(path, (err, stats) => {
    //   if (err.code === 'ENOENT' || !stats.isFile()) {
    //     reject(new Error('Cannot load the datbase'));
    //   }
    // });
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      resolve(parseData(data));
    });
  });
}

module.exports = countStudents;
