import { assert, expect } from 'chai';
import { analyzePopulationData, findHighestPopulatedState } from './population.js';

describe('analyzePopulationData', () => {
	it('should find 54548498 (California)', () => {
		const data = getTestData();
		const expected = { 
			totalPopulation: 54548498,
			maxPopulation: 'California',
		};
		const actual = analyzePopulationData(data);
		expect(actual).to.eql(expected);
	})
});

describe('findHighestPopulatedState', () => {
	it('should find California', () => {
		const data = getTestData();
		const expected = 'California';
		const actual = findHighestPopulatedState(data).GEONAME;
		expect(actual).to.eql(expected);
	})
});


function getTestData() {
	return [
		{ GEONAME:'Alabama', POP:4858979, id:'01' },
		{ GEONAME:'Alaska', POP:738432, id:'02' },
		{ GEONAME:'Arizona', POP:6828065, id:'04' },
		{ GEONAME:'Arkansas', POP:2978204, id:'05' },
		{ GEONAME:'California', POP:39144818, id:'06' },
	]
}