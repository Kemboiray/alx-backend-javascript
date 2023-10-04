// `updateStudentGradeByCity`- return array of students for a specific city with their new grade
export default function updateStudentGradeByCity(students, city, newGrades) {
  const filtered = students.filter((student) => student.location === city);
}
