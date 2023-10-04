// `getStudentIdsSum` - return the sum of all the student ids.
import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  const studentIds = getListStudentIds(students);
  return studentIds.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
}
