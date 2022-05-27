(function(){
    'use strict';

    const detailsForm = document.querySelector('#destination_details_form');

    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
    event.preventDefault();

    const destName = event.target.elements["name"].value;
    const destLocation = event.target.elements["location"].value;
    const destPhoto = event.target.elements["photo"].value;
    const destDesc = event.target.elements["description"].value;

    for(let i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = '';
    }

    // create card here
    const destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

    const wishListContainer = document.getElementById('destinations_container');

    if(wishListContainer.children.length === 0) {
        document.getElementById("title").innerHTML = 'My Wish List';
    }

    // add the card
    document.querySelector('#destinations_container').appendChild(destCard);

}

function createDestinationCard(name, location, photoURL, description) {

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.setAttribute('alt', name);

    const constantPhotoUrl = 'images/signpost.jpg';

    if(photoURL.length === 0) {
        img.setAttribute('src', constantPhotoUrl);
    } else {
        img.setAttribute('src', photoURL);
    }

    card.appendChild(img);

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement('h4');
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if (description.length !== 0) {
        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    const cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.innerText = 'Remove';

    cardDeleteBtn.addEventListener('click', removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);

    return card;

}

function removeDestination(event) {
    const card = event.target.parentElement.parentElement;
    card.remove();
}
//  make it possible to edit the contents of a card
const editBtn = document.querySelector('#edit_btn');
// when the edit button is clicked, the card should be editable
editBtn.addEventListener('click', editCard);
function editCard(event) {
    const card = event.target.parentElement.parentElement;
    const cardBody = card.querySelector('.card-body');
    const cardTitle = card.querySelector('.card-title');
    const cardSubtitle = card.querySelector('.card-subtitle');
    const cardText = card.querySelector('.card-text');
    const cardDeleteBtn = card.querySelector('.card-delete-btn');

    cardBody.classList.toggle('editable');
    cardTitle.classList.toggle('editable');
    cardSubtitle.classList.toggle('editable');
    cardText.classList.toggle('editable');
    cardDeleteBtn.classList.toggle('editable');
}








})();

