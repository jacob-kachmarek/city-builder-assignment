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
const locationStat = document.getElementById('location-stat');
const partyStat = document.getElementById('party-stat');
const guestStat = document.getElementById('guest-stat');

/* State */
let locationCount = 0;
let partyCount = 0;
let guestCount = 0;
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
/* Display Functions */
function displayStats() {
    locationStat.textContent = locationCount;
    partyStat.textContent = partyCount;
    guestStat.textContent = guestCount;
}

// (don't forget to call any display functions you want to run on page load!)
