/**
 * `createInt8TypedArray` - return a new `ArrayBuffer` with an `Int8` value at
 * a specific position
 * Args: `length` (Number), `position` (Number) and `value` (Number)
 * Throws: `Position outside range` if adding the value is not possible.
 */

export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
