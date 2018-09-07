import { assert } from 'chai';
import { lower } from './util.js';

describe('lower', () => {
	it('should return abcde for ABCDE', () => assert(lower('ABCDE') === 'abcde'));
	it('should return abc123_x$ for ABC123_x$', () => assert(lower('ABC123_x$') === 'abc123_x$'));
	it('should return empty string null input', () => assert(lower() === ''));
});