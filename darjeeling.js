const destinations = {
    darjeeling: {
        title: "Darjeeling",
        description: "Nestled in the Himalayas, Darjeeling is known for its scenic landscapes, tea plantations, and vibrant culture. Discover breathtaking views and immerse yourself in the charm of this hill station.",
        image: "images/darjeeling.jpg"
    },
    agra: {
        title: "Agra",
        description: "Home to the iconic Taj Mahal, Agra is a city of historical significance and architectural wonders.",
        image: "images/agra2.jpg"
    },
    jaipur: {
        title: "Jaipur",
        description: "Known as the Pink City, Jaipur boasts grand palaces, vibrant markets, and a rich cultural heritage.",
        image: "images/jaipur.jpg"
    }
};

// Update page content based on destination data
function updateDestinationDetails(destination) {
    const data = destinations[destination];
    if (data) {
        document.getElementById("destinationTitle").innerText = data.title;
        document.getElementById("destinationDescription").innerText = data.description;
        document.getElementById("destinationImage").src = data.image;
    }
}

// Show an alert with more information when "Learn More" button is clicked
document.getElementById("moreInfoButton").addEventListener("click", function() {
    alert("More information will be available soon!");
});

// Example: Call this function to update details based on the destination
updateDestinationDetails("darjeeling");
