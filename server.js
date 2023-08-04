const express = require("express");
const fetch = require("node-fetch");
var bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Enable CORS middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/api/proxy", async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/api/save-data", (req, res) => {
    const { nome, quantasPessoas } = req.body;
    console.log("body:")
    console.log(req.body)
    console.log("name_"+nome)
    console.log("qtd_"+quantasPessoas)
    // Save data to a JSON file (for demonstration purposes)
    const postData = {
        nome:nome,
        quantasPessoas: quantasPessoas
    };

    console.log(`its Me: ${JSON.stringify(postData)}`)

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    };
    console.log(postData)
    const url = "https://festalucasapi.azurewebsites.net/confirmar_ida"; // Replace with your API endpoint
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log("Response:", data);
        res.json("Response:", data)
    })
    .catch(error => {
        console.error("Error:", error);
        res.json("Error:", error)
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
