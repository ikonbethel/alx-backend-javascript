interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
  firstName: 'Mike',
  lastName: 'James',
  age: 8,
  location: 'Lagos'
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Chris',
  age: 9,
  location: 'Abuja'
}

const studentsList: Student[] = [student1, student2];

// Create Table
const newTable = document.createElement('table');

const tableHead = newTable.createTHead().insertRow(0);
const firstName = tableHead.insertCell();
firstName.textContent = 'First Name';

const headLocation = tableHead.insertCell();
headLocation.textContent = 'Location';

const tableBody = newTable.createTBody()

for (const student of studentsList) {
  const newRow = tableBody.insertRow();
  const newRowFirstName = newRow.insertCell();
  newRowFirstName.textContent = student.firstName;
  const newRowLocation = newRow.insertCell();
  newRowLocation.textContent = student.location;
}
