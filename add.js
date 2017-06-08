var template = document.getElementById('new'),
	nameproj = document.getElementById('nameproj'),
	prior    = document.getElementById('prior'),
	desc     = document.getElementById('desc');

document.getElementById('newbutton').addEventListener('click', function() {
	//open the empty template
	template.style.display = 'block';
});

document.getElementById('savenew').addEventListener('click', function() {
	
	var valuenametask = nametask.value,
		valueproj = nameproj.value,
		valueprior= prior.value,
		valuedesc = desc.value;

	addItem(valuenametask, valueproj, valueprior, valuedesc);
		
	});

function addItem(item1,item2,item3,item4) {
	console.log(item1,item2,item3,item4);
};