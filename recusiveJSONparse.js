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
