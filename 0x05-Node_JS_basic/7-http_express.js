// Read file asynchronously
const fs = require('fs');

function parseData(data) {
  const lines = data.split('\n');
  const contents = lines.slice(1);
  const content = contents.filter((line) => line !== '');
  const cs = [];
  const swe = [];
  const result = [];

  for (const line of content) {
    const column = line.split(',');
    if (column[3] === 'CS') {
      cs.push(column[0]);
    } else {
      swe.push(column[0]);
    }
  }

  result.push(`Number of students: ${content.length}`);
  result.push(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
  result.push(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  return result.join('\n');
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (!stats.isFile()) {
        reject(new Error('Cannot load the datbase'));
      }
    });
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      try {
        resolve(parseData(data));
      } catch (err) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

// A simple express app
const filepath = process.argv.length > 2 ? process.argv[2] : '';
const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const result = ['This is the list of our students'];
  let students;
  if (filepath !== '') {
    try {
      students = await countStudents(filepath);
    } catch (error) {
      students = error instanceof Error ? error.message : error.toString();
    }
  } else {
    students = '';
  }
  result.push(students);
  res.send(result.join('\n'));
});

app.listen(port, () => {
  console.log(`Started server at http://localhost:${port}`);
});

module.exports = app;
