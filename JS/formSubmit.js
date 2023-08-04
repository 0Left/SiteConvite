document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Your custom code to handle form submission goes here

    // For example, you can access form data and perform an AJAX request
    const form = event.target;
    const formData = new FormData(form);


    fetch("/api/save-data", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});