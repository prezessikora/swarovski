function getProductLink(id) {
	doc = document.getElementById('crystal_6');
	notes = doc.getElementsByClassName('material_no');
	material = notes[0].innerText
	
	return "https://www.swarovski-professional.com/en-AT/"+ material + "/p"
}

function init() {
	doc = document.getElementById('crystal_6');
	notes = doc.getElementsByClassName('crystal_buy');
	notes[0].setAttribute('href', getProductLink('crystal_6'));
}