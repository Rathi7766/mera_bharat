// Select toggle button and menu
const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.menu');

// Add click event to toggle button
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});


// Adding a hover animation to each highlight-item
document.querySelectorAll('.highlight-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("packageModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");
    const closeModal = document.querySelector(".close");

    // Show modal on button click
    document.querySelectorAll(".package-button").forEach(button => {
        button.addEventListener("click", () => {
            modalTitle.textContent = button.dataset.title;
            modalDescription.textContent = button.dataset.description;
            modalPrice.textContent = `Price: ${button.dataset.price}`;
            modal.style.display = "block";
        });
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById("reviewForm");
    const reviewList = document.getElementById("reviewList");

    reviewForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get user input
        const name = document.getElementById("name").value.trim();
        const reviewText = document.getElementById("review").value.trim();

        if (name && reviewText) {
            // Create a new review item
            const reviewItem = document.createElement("div");
            reviewItem.classList.add("review-item");

            // Add content to the review item
            reviewItem.innerHTML = `
                <h4>${name}</h4>
                <p>${reviewText}</p>
            `;

            // Remove default text if it exists
            if (reviewList.children[0]?.tagName === "P") {
                reviewList.innerHTML = "";
            }

            // Append the new review
            reviewList.appendChild(reviewItem);

            // Reset the form
            reviewForm.reset();
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            // Simulate sending message
            alert(`Thank you, ${name}! Your message has been sent.`);

            // Reset the form
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
