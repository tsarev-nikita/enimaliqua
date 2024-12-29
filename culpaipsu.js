// Assuming 'vega' is imported and available
import * as vega from 'vega';

// Example function to process a range
function processRange(range) {
    if (Array.isArray(range)) {
        // If range is an array, possibly handle it differently
        console.log("Range is an array:", range);
        // Process array range
    } else if (vega.isObject(range)) {
        // If range is an object, handle it accordingly
        console.log("Range is an object:", range);
        // Process object range
    } else {
        // Handle other types or invalid range
        console.log("Range is of unknown type:", range);
        // Process invalid or unknown range
    }
}

// Example usage
const arrayRange = [1, 2, 3];
const objectRange = { start: 1, end: 3 };
const invalidRange = "invalid";

processRange(arrayRange);    // Output: Range is an array: [1, 2, 3]
processRange(objectRange);   // Output: Range is an object: { start: 1, end: 3 }
processRange(invalidRange);  // Output: Range is of unknown type: invalid
