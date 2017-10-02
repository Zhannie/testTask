var xhr = new XMLHttpRequest(),
	post = document.getElementById('item');

	xhr.open('GET', 'data.json', true);

	xhr.onload = function() {
		var jobs = JSON.parse(xhr.responseText);

		populateHeader(jobs);
	};

	xhr.onerror = function() {
		console.log('error');
	};

	xhr.send();

	function populateHeader(obj) {

		var headers = obj.posts;


		headers.forEach(function(item) {
			var myH2 = document.createElement('h2'),
				divs = document.createElement('div');
			myH2.textContent = item.name;
			divs.className = 'item';
			divs.appendChild(myH2);
			post.appendChild(divs);

			var optionsList = document.createElement('ul'),
				optLis = item.options;

				for (var keys in optLis) {
					var option = document.createElement('li'),
						propNames = document.createElement('span');

					propNames.textContent = (`${optLis[keys]}`);

					option.textContent = (`${keys} :`);
					option.appendChild(propNames);
					optionsList.appendChild(option);
				};

				var proposal = document.createElement('li'),
					propLink = document.createElement('a');

					propLink.textContent = optLis.proposals + " Proposals";
					propLink.setAttribute('href', '#');
					proposal.appendChild(propLink);
					
					optionsList.removeChild(optionsList.lastChild);
					optionsList.appendChild(proposal);

					divs.appendChild(optionsList);
					post.appendChild(divs);


			var desc = document.createElement('p');
		 	desc.textContent = item.description;
		 	desc.classList.add('desc');
		 	divs.appendChild(desc);
		 	post.appendChild(divs);

		 	var catList = document.createElement('ul'),
		 		category = document.createElement('p'),
		 		skillsHeader = document.createElement('h3'),
		 		catDesc = document.createElement('span');

		 	category.textContent = 'Category : ';
		 	category.appendChild(catDesc);

			catList.classList.add('catList');

		 	catDesc.textContent = item.category;
		 	category.classList.add('category');
		 	divs.appendChild(category);
		 	post.appendChild(divs);

		 	var skillsList = document.createElement('li'),
		 		skills = item.slils;

		 		catList.appendChild(skillsHeader);

		 		skills.forEach(function(item) {
		 			var skillObj = item;

		 			for(var keys in skillObj){
		 				var skillset = document.createElement('li');
		 				skillset.textContent = skillObj.name;

		 			};
		 			skillsHeader.textContent = "Skills : ";
		 			catList.appendChild(skillset);
		 			divs.appendChild(catList);
		 			post.appendChild(divs);

		 		});

		 	var clientList = item.client,
		 		client = document.createElement('p'),
		 		clientDiv = document.createElement('div'),
		 		clientSpan = document.createElement('span');

		 	client.textContent = "Client: ";
		 	clientSpan.textContent = clientList.country;
		 	client.classList.add('client');
		 	client.appendChild(clientSpan);
		 	clientDiv.appendChild(client);
		 	divs.appendChild(clientDiv);
		 	post.appendChild(divs);

		 	var rating = document.createElement('p');
		 	rating.textContent = clientList.rating;
		 	rating.classList.add('rating');
		 	clientDiv.appendChild(rating);
		 	divs.appendChild(clientDiv);
		 	post.appendChild(divs);

		});

	};

	function capitalizeFirstLetter(string) {
    	return string.charAt(0).toUpperCase() + string.slice(1);
	};

window.addEventListener('resize', fullMain);

function fullMain() {
	var main = document.querySelector('.md-col9');
	if(outerWidth < 780) {
		main.classList.add('md-col12');
	}else{
		main.className = 'md-col9';
	}
};

$('.chosen-select').chosen({width: '160px'});



