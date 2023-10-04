interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {firstName: 'John', lastName: 'Doe', age: 18, location: 'New York'};
const student2: Student = {firstName: 'Jane', lastName: 'Doe', age: 19, location: 'New York'};
const studentsList: Student[] = [student1, student2];
console.table(studentsList);
