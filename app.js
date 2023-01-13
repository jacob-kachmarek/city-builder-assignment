/* Imports */

/* Get DOM Elements */
const locationImg = document.getElementById('location-image');
const partyImg = document.getElementById('party-image');
const guestImg = document.getElementById('guest-image');
const locationDropdown = document.getElementById('location-dropdown');
const partyDropdown = document.getElementById('party-dropdown');
const guestDropdown = document.getElementById('guest-dropdown');
const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
const sloganEl = document.getElementById('slogans');
const locationStat = document.getElementById('location-stat');
const partyStat = document.getElementById('party-stat');
const guestStat = document.getElementById('guest-stat');

/* State */
let locationCount = 0;
let partyCount = 0;
let guestCount = 0;
let slogans = [];
/* Events */
locationDropdown.addEventListener('change', () => {
    locationImg.src = `assets/location-${locationDropdown.value}.jpg`;
    locationCount++;
    displayStats();
});

partyDropdown.addEventListener('change', () => {
    partyImg.src = `assets/party-${partyDropdown.value}.jpg`;
    partyCount++;
    displayStats();
});

guestDropdown.addEventListener('change', () => {
    guestImg.src = `assets/guest-${guestDropdown.value}.jpg`;
    guestCount++;
    displayStats();
});

sloganButton.addEventListener('click', () => {
    slogans.push(sloganInput.value);
    sloganInput.value = '';
    displaySlogans();
});
/* Display Functions */
function displayStats() {
    locationStat.textContent = locationCount;
    partyStat.textContent = partyCount;
    guestStat.textContent = guestCount;
}

function displaySlogans() {
    sloganEl.textContent = '';
    for (let slogan of slogans) {
        const newElement = renderSlogan(slogan);
        sloganEl.append(newElement);
    }
}

function renderSlogan(slogan) {
    const newElement = document.createElement('p');
    newElement.classList.add('slogan');
    newElement.textContent = slogan;
    return newElement;
}

// (don't forget to call any display functions you want to run on page load!)
