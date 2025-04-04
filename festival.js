// Function to open the modal with festival information
function openModal(festival) {
    const modal = document.getElementById('festivalModal');
    const modalTitle = document.getElementById('festivalTitle');
    const modalDescription = document.getElementById('festivalDescription');
    const modalImage = document.getElementById('festivalImage');

    if (festival === 'diwali') {
        modalTitle.textContent = "Diwali";
        modalDescription.textContent = "Diwali, also known as the Festival of Lights, is one of the most celebrated festivals in India, symbolizing the victory of light over darkness.";
        modalImage.src = "images/diwali.jpg";
    } else if (festival === 'holi') {
        modalTitle.textContent = "Holi";
        modalDescription.textContent = "Holi, the Festival of Colors, is a joyful celebration of spring, love, and the triumph of good over evil.";
        modalImage.src = "images/holi.jpg";
    } else if (festival === 'eid') {
        modalTitle.textContent = "Eid";
        modalDescription.textContent = "Eid is a significant festival for Muslims, celebrated with prayers, feasts, and acts of charity.";
        modalImage.src = "images/eid.jpg";
    } else if (festival === 'christmas') {
        modalTitle.textContent = "Christmas";
        modalDescription.textContent = "Christmas is celebrated across India by Christians and non-Christians alike, with vibrant decorations and festive meals.";
        modalImage.src = "images/christmas.jpg";
    }

    modal.style.display = "block"; // Show modal
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('festivalModal');
    modal.style.display = "none"; // Hide modal
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function (event) {
    const modal = document.getElementById('festivalModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
