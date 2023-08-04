const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable CORS middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("http://localhost:3000/api/save-data", (req, res) => {
    const { name, quantasPessoas } = req.body;

    // Save data to a JSON file (for demonstration purposes)
    const postData = {
        nome:name,
        quantasPessoas: quantasPessoas
    };
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    };
    const url = "https://festalucasapi.azurewebsites.net/confirmar_ida"; // Replace with your API endpoint
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log("Response:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
    res.json({ message: "Data saved successfully" });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
