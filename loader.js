
// window.addEventListener("load", function () {
//     const loader = document.getElementById("loader");
//     loader.style.display = "none";
// });


document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");

    // Ensure the loader exists before applying logic
    if (loader) {
        // Hide the loader after the page is fully loaded
        window.addEventListener("load", function () {
            loader.style.opacity = "0"; // Add fade-out effect
            setTimeout(() => {
                loader.style.display = "none"; // Remove loader
            }, 500); // Matches fade-out duration
        });
    } else {
        console.error("Loader element not found!");
    }
});
