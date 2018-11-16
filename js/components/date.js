(function() {
	const now = new Date();
	let currentYear = now.getFullYear();
	
	let el = document.getElementById('footer_date');
	el.innerHTML = currentYear;
})();