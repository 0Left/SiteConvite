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
    

    fetch(`https://script.google.com/macros/s/AKfycbwW45HYIA37vDa4Hg6hAoGijIcVvRILoNgJbjaA1no8F-gcQZASa2hZPvXN2S3j8QvqTw/exec?key=LucasFesta&modo=post&nome=${postData.nome}&qtsPessoas=${postData.quantasPessoas}`, {
        method: "GET"
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