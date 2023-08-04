document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Your custom code to handle form submission goes here

    // For example, you can access form data and perform an AJAX request
    const form = event.target;
    const formData = new FormData(form);

    let nameToSend = formData.get("nome")
    let qtsPessoas = formData.get("quantas-pessoas")
    // Simulate form submission using AJAX


    const url = "https://festalucasapi.azurewebsites.net/confirmar_ida"; // Replace with your API endpoint

    const postData = {
        nome:nameToSend,
        quantasPessoas: qtsPessoas
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    };
    
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log("Response:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });

});