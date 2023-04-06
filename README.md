# JavaScript Utility Functions


This repository contains a personal collection of useful JavaScript functions that can be used in various applications. The functions are designed to be reusable and efficient, with a focus on solving common programming problems.


## Functions


- Recursive Parser Functions: These functions can be used to parse and traverse complex data structures such as JSON objects and arrays recursively, allowing for easier manipulation and extraction of data.

```javascript
function parseJSON(json) {
	const result = {};

	function recurse(obj, currentPath = '') {
		for (let prop in obj) {
			if (typeof obj[prop] === 'object') {
				if (Array.isArray(obj[prop])) {
					// Handle arrays
					for (let i = 0; i < obj[prop].length; i++) {
						recurse(obj[prop][i], `${currentPath}${prop}[${i}]`);
					}
				} else {
					// Handle nested objects
					recurse(obj[prop], `${currentPath}${prop}.`);
				}
			} else {
				// Add value to result object
				result[`${currentPath}${prop}`] = obj[prop];
			}
		}
	}

	recurse(json);

	return result;
}
```


Other functions will be added as they are developed.


## Getting Started


To use the functions in this repository, simply clone the repository and import the desired function(s) into your own JavaScript project.

Note that these functions are not intended to be used as a comprehensive library, but rather as a collection of utility functions that can be adapted for specific use cases.


## Contributing


If you have a useful JavaScript function that you would like to contribute to this repository, please submit a pull request with a detailed description and use case for the function.


## License


This repository is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use these functions in your own projects, but please give credit where credit is due.
