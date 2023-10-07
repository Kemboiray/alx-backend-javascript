import cleanSet from './8-clean_set';

test('returns empty string when no startString is passed in', () => {
  const set = new Set(['id-test', 'id-chicken', 'id-user', 'id-id-']);
  expect(cleanSet(set)).toBe('');
});
