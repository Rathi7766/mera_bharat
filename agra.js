document.getElementById("moreInfoButton").addEventListener("click", function() {
    const modal = document.getElementById("moreInfoModal");
    modal.style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("moreInfoModal").style.display = "none";
});

window.onclick = function(event) {
    const modal = document.getElementById("moreInfoModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
