export default function createIteratorObject(report) {
  const iterator = [];
  for (let i = 0; i < report.getNumberOfDepartments(report.allEmployees); i += 1) {
    const deptEmployees = Object.keys(report.allEmployees)[i];
    for (const item of report.allEmployees[deptEmployees]) {
      iterator.push(item);
    }
  }
  return iterator;
}
