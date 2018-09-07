# Changes to problem2 code

## General
* Beautified HTML and JS
* Removed jQuery
* Cleaned up URL construction
* Wrapped key functionality in functions

## Finding highest-populated state
I considered reducing the states array to find the highest population value, then plucking the state name from the state matching that value. However, that takes unnecessary CPU cycles, and could potentially match the wrong state in the event of a tie or bad data. Also considering sorting the array by population size, but that's even less CPU-efficient. The for loop was simpler.

## Performance Enhancements
I checked the documentation at api.census.gov and determined that a single call could request information for all 57 regions. A single API call will also be much more performant and put less strain on the API.

If not for this feature, I would make the API calls in parallel, using asynchronous mode in XHR to avoid locking the main thread. I would also construct a throttling function to limit the parallel calls to no more than 5 at a time.