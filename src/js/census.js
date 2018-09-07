// service for interacting with api.census.gov
//  - understands the unique vernacular of that service

export { getPopulation, getStateList };

const apiKey = '5e562d947f0fb77549cb73938cf1bec320ebe37e';
const apiRoot = 'https://api.census.gov/data/2015';
const populationPath = '/pep/population'; // leaving room for the other endpoints in the future

async function getPopulation(states) {
	if (!states || !Array.isArray(states)) throw new Error('states must be an array');

	const regionStr = states.join(',');
	const url = `${apiRoot}${populationPath}?get=POP,GEONAME&key=${apiKey}&for=state:${regionStr}`;

	const result = await fetch(url);
	const json = await result.json();
	if (!json || !Array.isArray(json)) throw new Error('invalid data');
	const data = json.map(state => ({
	    POP: state[0],
	    GEONAME: state[1],
	    id: state[2],
	}));
	data.shift();
	data.forEach(state => state.POP = parseInt(state.POP));

	return data;
}

function getStateList() {
	// gets the canonical list of valid state IDs, according to this service

	 const states = [];

     // create an array of the numbers 1 through 56, excluding 14, 43, and 52, and padding the single-digits with a leading 0
     for (let i = 0; i < 57; i++) {
        if ([14, 43, 52].includes(i)) continue;
        states.push((i).toString().padStart(2,'0'));
     }
     states.push(72); // add 72

     return states;
}