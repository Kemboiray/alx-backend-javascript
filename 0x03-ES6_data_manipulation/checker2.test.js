import cleanSet from './8-clean_set';

test('returns jovi-aparte-apetit when bon is passed to a new set containing bonjovi, bonaparte, and bonappetit', () => {
  expect(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit']), 'bon')).toBe('jovi-aparte-appetit');
});
