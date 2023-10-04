/**
 * `updateStudentGradeByCity`- return array of students for a specific city with their new grade
 * `students` is filtered to retain an array of students who's location matches `city` (String)
 * Each object in the filtered array is updated with the `grade` property of
 * the object with a matching `id` in the array `newGrades`
 * If no grade is available for a student, the grade property should be 'N/A'
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);
  const studentsWithGrades = studentsByCity.map((student) => {
    const grade = newGrades.filter((newGrade) => newGrade.id === student.id);
    if (grade[0]) {
      return { ...student, grade: grade[0].grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return studentsWithGrades;
}
