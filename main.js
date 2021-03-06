var data     = (localStorage.getItem('todolist')) ? JSON.parse(localStorage.getItem('todolist')) : {
 	todo: []
 },
	template = document.getElementById('new'),
	listnav  = document.getElementById('filter'),
	nametask = document.getElementById('nametask'),
	nameproj = document.getElementById('nameproj'),
	prior    = document.getElementById('prior'),
	desc     = document.getElementById('desc'),
	swipebut = document.getElementById('swipe'),
	dataForm = {
		valuenametask: '',
		valueproj: '',
		valueprior: '',
		valuedesc: ''
	};

renderTodoList();

// NEW TASK
document.getElementById('newbutton').addEventListener('click', function() {
	//open the empty template
	template.style.display = 'block';

	//close list navigation
	listnav.style.display = 'none';
});

	//SAVE BUTTON
	document.getElementById('savenew').addEventListener('click', function() {
		dataForm = {
		valuenametask: nametask.value,
		valueproj: nameproj.value,
		valueprior: prior.value,
		valuedesc: desc.value
		};
			if (nametask.value == "" || nameproj.value == "" || prior.value == "" || desc.value == "") {

				alert('Please fill all fields');

			// }else if(document.getElementById('savenew').textContent === 'Update'){
			// 	document.getElementById('savenew').addEventListener('ch')

			}else{

				addItemToDOM(dataForm);

				nametask.value = '',
				nameproj.value = '',
				prior.value    = '',
				desc.value     = '';

				data.todo.push(dataForm);
			};

			template.style.display = 'none';
			listnav.style.display = 'block';
			dataObjectUpdate();
	});


function renderTodoList() {
 	if (!data.todo.length) return;

	for (var i = 0; i < data.todo.length; i++) {
		var value = data.todo[i];
		addItemToDOM(value);
	}
}

function dataObjectUpdate() {
	localStorage.setItem('todolist', JSON.stringify(data));
};

	// CANCEL BUTTON
	document.getElementById('cancel').addEventListener('click', function() {
		template.style.display = 'none';
		listnav.style.display = 'block';
	});


// TASK NAVIGATION
//SWIPE BUTTON
function swipeIt() {
	var item = this.parentNode.parentNode;

	if (this.innerText == 'Развернуть') {
		this.innerText = 'Свернуть';
		item.childNodes[3].style.display = 'block';
	} else {
	 	this.innerText = 'Развернуть';
	 	item.childNodes[3].style.display = 'none';
	}
};

// CLOSE BUTTON
function closeIt() {
	var item = this.parentNode.parentNode;
	var list = item.parentNode;

	list.removeChild(item);

	for (var i = 0; i < data.todo.length; i++) {
		if (data.todo[i].valuenametask == item.childNodes[0].textContent) {
			data.todo.splice(i,1);
		}
	};

	dataObjectUpdate();
};


// CHANGE BUTTON
function changeIt() {
	listnav.style.display = 'none';
	template.style.display = 'block';

	var item = this.parentNode.parentNode;
	var updateBtn = document.getElementById('savenew')
	updateBtn.innerText = 'Update';

	nametask.value = item.childNodes[0].textContent;
	nameproj.value = item.childNodes[1].textContent;
	prior.value    = item.childNodes[2].textContent;
	desc.value     = item.childNodes[3].textContent;

	// if(item.childNodes[0].textContent === dataForm.valuenametask) {
	// 	return;
	// 	}else{
	// 		item.childNodes[0].textContent = dataForm.valuenametask;
	// 	}
	 
};


function addItemToDOM(todoItem) {	
	var list = document.getElementById('list');

	var item = document.createElement('li');

	var taskname = document.createElement('h2');
 	taskname.innerText = todoItem.valuenametask;

	var pname = document.createElement('p');
	pname.innerText = "Project: " + todoItem.valueproj;

	var pr = document.createElement('p');
	pr.innerText = "Priority: " + todoItem.valueprior;
	pr.classList.add('right');

	var description = document.createElement('p');
	description.innerText = todoItem.valuedesc;
	description.classList.add('descr');

	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var change = document.createElement('button');
	change.classList.add('left');
	change.innerHTML = 'Изменить';

	change.addEventListener('click', changeIt);

	var close = document.createElement('button');
	close.innerHTML = 'Закрыть';

	close.addEventListener('click', closeIt);

	var swipe = document.createElement('button');
	swipe.classList.add('right');
	swipe.innerHTML = 'Развернуть';

	swipe.addEventListener('click', swipeIt);

	var projFilter = document.createElement('option');
	projFilter.innerHTML = todoItem.valueproj;


	buttons.appendChild(change);
	buttons.appendChild(close);
	buttons.appendChild(swipe);
	list.appendChild(item);
	item.appendChild(taskname);
	item.appendChild(pname);
	item.appendChild(pr);
	item.appendChild(description);
	item.appendChild(buttons);

	var select = document.getElementById('select');
	var options = document.querySelectorAll('#select option');
	for (var i = 0; i<options.length; i++) {
		if (options[i].value !== projFilter.textContent) {
			select.appendChild(projFilter);
		};
	};

	list.insertBefore(item, list.childNodes[0]);
};

// BY PRIORITY
function compareIt(itemA, itemB) {
	return itemB.valueprior-itemA.valueprior;
};

document.getElementById('byprior').addEventListener('click', function() {
	data.todo.sort(compareIt);

	dataObjectUpdate();
	window.location.reload();

});
	




	



