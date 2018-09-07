
export { 
		debounce,
		lower,
		translateTextToHTML,
	};

function debounce(fn, timeout=300, _window=window) {
	let timer;
	return function() {
		const _this = this;
		const args = arguments;
		_window.clearTimeout(timer);
		timer = _window.setTimeout(() =>	fn.apply(_this, args), timeout);
	}
}
function lower(text) {
	if (!text) return '';
	return text.replace(/\w/g, em => em.toLowerCase());
}
function translateTextToHTML(text) {
	return text.split('\n').map(p => `<p>${p}</p>`).join('');
}

