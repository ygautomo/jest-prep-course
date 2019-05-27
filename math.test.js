const { sum, mul, sub, div } = require ('./math');

/*
// script to confirm file is running
// node math.test
console.log(sum(1,2));
console.log(mul(1,2));
console.log(sub(1,2));
console.log(div(1,2));
console.log('Current directory: ' + process.cwd());
*/

/*
describe('add', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
*/

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('adds 57 + 8 to equal 65', () => {
	expect(sum(57, 8)).toBe(65);
});

test('adds 0 + 8 to equal 8', () => {
	expect(sum(0, 8)).toBe(8);
});

test('adds 9 + -3 to equal 6', () => {
	expect(sum(9, -3)).toBe(6);
});

test('multiply 1 * 2 to equal 2', () => {
	expect(mul(1, 2)).toBe(2);
});

test('multiply 57 * 8 to equal 456', () => {
	expect(mul(57, 8)).toBe(456);
});

test('multiply 0 * 8 to equal 0', () => {
	expect(mul(0, 8)).toBe(0);
});

test('multiply 9 * -3 to equal -27', () => {
	expect(mul(9, -3)).toBe(-27);
});

test('subtract 1 - 2 to equal -1', () => {
	expect(sub(1, 2)).toBe(-1);
});

test('subtract 57 - 8 to equal 49', () => {
	expect(sub(57, 8)).toBe(49);
});

test('subtract 0 - 8 to equal -8', () => {
	expect(sub(0, 8)).toBe(-8);
});

test('subtract 9 - -3 to equal 12', () => {
	expect(sub(9, -3)).toBe(12);
});

test('div 1 * 2 to equal 0.5', () => {
	expect(div(1, 2)).toBe(0.5);
});

test('div 57 / 8 to equal 7.125', () => {
	expect(div(57, 8)).toBe(7.125);
});

test('div 0 / 8 to equal 0', () => {
	expect(div(0, 8)).toBe(0);
});

test('div 9 / -3 to equal -3', () => {
	expect(div(9, -3)).toBe(-3);
});