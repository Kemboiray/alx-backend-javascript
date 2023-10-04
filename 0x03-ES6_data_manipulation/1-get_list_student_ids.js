/**
 * `getListStudentIds` - return an array of ids from a list of objects
 */

export default function getListStudentIds(objects) {
  if (objects instanceof Array) return objects.map((object) => object.id);
  return [];
}
