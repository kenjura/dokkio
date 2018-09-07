import { lower} from './util.js';

export { 
		findPalindromes,
		isPalindrome, 
		markupPalindromes,
	};

function findPalindromes(text) {
	let slice;
	const palindromes = [];
	for (let start = 0; start < text.length - 1; start++) {
		for (let width = text.length - start; width > 2; width--) {
			slice = text.substr(start, width).replace(/\W/g, '');
			if (isPalindrome(slice)) { 
				palindromes.push(slice);
				// palindromes.push(`${slice}_${start}_${width}`);
				break;
			}
		}
	}
	const deduped = [];
	palindromes.forEach(p => {
		if (!deduped.includes(p)) deduped.push(p);
	});
	return deduped;
}
function formatPalindrome(word) {
	return `<span class="palindrome">${word}</span>`;
}
function isPalindrome(word) {
	if (typeof word !== 'string') throw new Error('only strings can be palindromes');
	if (word.length < 3) return false;
	const isEven = word.length % 2 === 0;
	const lword = lower(word).replace(/\W/g, '');
	return isEven
		? lword.substr(0,word.length/2) === lword.substr(word.length/2, word.length/2).split('').reverse().join('')
		: lword.substr(0,(word.length-1)/2) === lword.substr(word.length/2+1, word.length/2).split('').reverse().join('');
}
function markupPalindromes(text) {
	return text.replace(/\w+/g, em => isPalindrome(em) ? formatPalindrome(em) : em);
}



/* 
Arbitrary palindrome rules:
 - case-insensitive
 - must be 3 characters or longer
 - only words can be palindromes

Thoughts on multi-word palindromes:
 - They aren't hard to detect, but I'm worried about performance
 - Essentially, I'd need to re-implement regex lookahead
   - e.g.: (.*)(?=$1,but backwards)
 - Pretty sure there's a reason that isn't a thing for good reason
 - For each character of position i, you'd have to read a substr(i,2n) where n ranges from length - i to length, then check for a palindrome
 - Roughly speaking, this sounds like O(n^2) space, which, for a given paragraph, is probably not too nasty, but I'm not sure that this level of intensity was implied by the challenge
 - In any case, isPalindrome() could be easily modified to work on multi-word strings (i.e. word = word.replace(/\W/g, '')), but we wouldn't be able to rely on the regex in markupPalindromes()
*/
