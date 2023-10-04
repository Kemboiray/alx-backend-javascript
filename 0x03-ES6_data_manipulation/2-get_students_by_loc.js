/**
 * `getStudentsByLocation` - return an array of objects with a specified `location` value
 */
export default function getStudentsByLocation(students, location) {
  if (students instanceof Array) return students.filter((student) => student.location === location);
  return [];
}
