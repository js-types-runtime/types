import test from 'node:test';
import assert from 'node:assert/strict';
import { number } from '../lib/index.js';

test('number returns true for finite numbers', () => {
  assert.strictEqual(number(42), true);
  assert.strictEqual(number(0), true);
  assert.strictEqual(number(-1), true);
  assert.strictEqual(number(3.14), true);
});

test('number returns false for non-finite numbers', () => {
  assert.strictEqual(number(Infinity), false);
  assert.strictEqual(number(-Infinity), false);
  assert.strictEqual(number(NaN), false);
});

test('number returns false for non-numbers', () => {
  assert.strictEqual(number('42'), false);
  assert.strictEqual(number(null), false);
  assert.strictEqual(number(undefined), false);
  assert.strictEqual(number([]), false);
  assert.strictEqual(number({}), false);
  assert.strictEqual(number(true), false);
});
