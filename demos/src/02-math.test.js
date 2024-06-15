const {divide, sum, multiply } = require('./02-math');

test('add 1 + 3 should be 4', () => {
  const result = sum( 1, 3);
  expect(result).toBe(4);
});

test('multiply', () => {
  const result = multiply(1, 4);
  expect(result).toBe(4);

  const restul2 = multiply(10, 5);
  expect(restul2).toBe(50);
})

test('divide', () => {
  const result = divide(6, 3);
  expect(result).toBe(2);

  const result2 = divide(5, 2);
  expect(result2).toBe(2.5);
});

test('divide for zero', () => {
  const result = divide(6, 0);
  expect(result).toBeNull();

  const result2 = divide(5, 0);
  expect(result2).toBeNull();
})
