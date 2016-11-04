export function getNext(items, index) {
	if (items[index+1]) {
		return items[index + 1];
	}
}

export function getPrevious(items, index) {
	if (items[index - 1]) {
		return items[index - 1];
	}
}

export function getCurrent(items, name) {
	const navCurrentCategory = items.filter(item => item.slug === name);
	if ( navCurrentCategory ) { return navCurrentCategory[0]; }
	return null;
}

export function getIndex(items, current) {
	return items.findIndex(item => item.slug === current.slug);
}