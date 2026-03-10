const sum = require('./sum.js');


test('should 2 + 2 to 4', () => {
  expect(sum(2,2)).toBe(4);
})
