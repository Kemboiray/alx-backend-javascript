interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {firstName: 'John', lastName: 'Doe', age: 18, location: 'New York'};
const student2: Student = {firstName: 'Jane', lastName: 'Doe', age: 19, location: 'New York'};
const studentsList: Student[] = [student1, student2];
// Create a new table element
const table = document.createElement('table');
table.id = 'studentsTable';

// Create a header row
const headerRow = document.createElement('tr');
['First Name', 'Last Name', 'Age', 'Location'].forEach(headerText => {
  const header = document.createElement('th');
  header.textContent = headerText;
  headerRow.appendChild(header);
});
table.appendChild(headerRow);

// Iterate over each student in the list
for (const student of studentsList) {
  // Create a new row
  const row = document.createElement('tr');

  // Create a cell for each property and append it to the row
  for (const property in student) {
    const cell = document.createElement('td');
    cell.textContent = String(student[property as keyof Student]);
    row.appendChild(cell);
  }

  // Append the row to the table
  table.appendChild(row);
}

// Append the table to the body of the document
document.body.appendChild(table);
