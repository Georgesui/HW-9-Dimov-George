const ourInputOnPage = document.querySelector('#input');
const ourList = document.querySelector('#list');
const buttonNeeded = document.querySelector('#button');
const containerBody = document.querySelector('.container')

containerBody.addEventListener('click', (event) => {
	let newLiInList = document.createElement('li');
	if (event.target === buttonNeeded && ourInputOnPage.value !== '') {
		newLiInList.innerHTML = `${ourInputOnPage.value} <button class = "remove">REMOVE</button>`
		ourInputOnPage.value = '';
		ourList.appendChild(newLiInList).setAttribute('class', 'process');
		return;
	}
	else if (event.target.className === "remove") {
		event.target.closest('li').remove();
		return;
	}
	else if (event.target.closest('li')) {
		event.target.closest('li').classList.toggle('done');
		return;
	}
})

