const reverseInteger = require('./index');

test('reverseInteger is a function', () => {
  expect(typeof reverseInteger).toEqual('function');
});

test('reverseInteger flips a positive number', () => {
  expect(reverseInteger(5)).toEqual(5);
  expect(reverseInteger(15)).toEqual(51);
  expect(reverseInteger(90)).toEqual(9);
  expect(reverseInteger(2359)).toEqual(9532);
});

test('ReverseInt flips a negative number', () => {
  expect(reverseInteger(-5)).toEqual(-5);
  expect(reverseInteger(-15)).toEqual(-51);
  expect(reverseInteger(-90)).toEqual(-9);
  expect(reverseInteger(-2359)).toEqual(-9532);
});