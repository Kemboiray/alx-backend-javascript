// Define class HolbertonClass

export default class HolbertonClass {
  constructor (name, length, students) {
    if typeof (name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    } else if (!students.every(member => typeof member === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
