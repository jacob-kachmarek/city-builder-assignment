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

/* State */

/* Events */
locationDropdown.addEventListener('change', () => {
    locationImg.src = `assets/location-${locationDropdown.value}.jpg`;
});

partyDropdown.addEventListener('change', () => {
    partyImg.src = `assets/party-${partyDropdown.value}.jpg`;
});

guestDropdown.addEventListener('change', () => {
    guestImg.src = `assets/guest-${guestDropdown.value}.jpg`;
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
