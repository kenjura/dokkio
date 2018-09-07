// business logic for population analysis

import { getPopulation } from './census.js';

export { analyzePopulationData, findHighestPopulatedState };

function analyzePopulationData(states) {
   if (!states || !Array.isArray(states)) throw new Error('states must be an array');

   const totalPopulation = states.reduce((prev, cur) => prev += cur.POP,0);
   const maxPopulation = findHighestPopulatedState(states).GEONAME;

   return { totalPopulation, maxPopulation };
}


function findHighestPopulatedState(states) {
   let max = { POP: 0 };
   for (let state of states) {
      if (state.POP > max.POP) max = state;
   }
   return max;
}