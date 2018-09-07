import { assert, expect } from 'chai';
import { findPalindromes, isPalindrome } from './palindrome.js';

describe('findPalindromes', () => {
	it('should find "A man, a plan, a canal: Panama!" and "racecar" in a string containing them', () => {
		const str = 'What is a palindrome? Well, some might say "racecar", while others might say "A man, a plan, a canal: Panama!". Science has yet to reach a consensus...';
		const expected = [ 'racecar', 'A man, a plan, a canal: Panama!' ];
		const actual = findPalindromes(str);
		expect(actual).to.eql(expected);
	})
});

describe('isPalindrome', () => {
	it('should return TRUE for "racecar"', () => assert(isPalindrome('racecar')));
	it('should return TRUE for "abcba"', () => assert(isPalindrome('abcba')));
	it('should return TRUE for "abba"', () => assert(isPalindrome('abba')));	
	it('should return TRUE for "AaaA"', () => assert(isPalindrome('AaaA')));
	it('should return TRUE for "A2332A"', () => assert(isPalindrome('A2332A')));
	it('should return TRUE for "abc_cba"', () => assert(isPalindrome('abc_cba')));
	it('should return TRUE for "abc__cba"', () => assert(isPalindrome('abc__cba')));
	it('should return TRUE for "abc_d_cba"', () => assert(isPalindrome('abc_d_cba')));
	it('should return TRUE for "abBA"', () => assert(isPalindrome('abBA')));

	it('should return FALSE for "abbc"', () => assert(!isPalindrome('abbc')));
	it('should return FALSE for "car"', () => assert(!isPalindrome('car')));
	it('should return FALSE for "abcde"', () => assert(!isPalindrome('abcde')));	
	it('should return FALSE for "AaaB"', () => assert(!isPalindrome('AaaB')));
	it('should return FALSE for "A123A"', () => assert(!isPalindrome('A123A')));
	it('should return FALSE for "abc_ba"', () => assert(!isPalindrome('abc_ba')));
	it('should return FALSE for "ab__cba"', () => assert(!isPalindrome('ab__cba')));
	it('should return FALSE for "abc_de_cba"', () => assert(!isPalindrome('abc_de_cba')));
	it('should return FALSE for "bb"', () => assert(!isPalindrome('bb')));
	it('should return FALSE for "b"', () => assert(!isPalindrome('b')));

	it('should throw an error for numbers', () => assert.throws(() => isPalindrome(456)));
	it('should throw an error for boolean', () => assert.throws(() => isPalindrome(true)));
	it('should throw an error for null', () => assert.throws(() => isPalindrome(null)));
	it('should throw an error for undefined', () => assert.throws(() => isPalindrome(undefined)));
})