document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Your custom code to handle form submission goes here

    // For example, you can access form data and perform an AJAX request
    const form = event.target;
    const formData = new FormData(form);
    
    const postData = {
        nome:formData.get("nome"),
        quantasPessoas: formData.get("quantas-pessoas")
    };
    
    console.log(postData);
    console.log(JSON.stringify(postData));

    fetch("http://localhost:3000/api/save-data", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });

    let formContent = document.getElementById("myForm")
    formContent.innerHTML = "Confirmação Enviada... </br></br>Esperamos sua presença!</br></br></br>"

});