import express from "express";

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => res.send("<h1>Hello from the server</h1>"));

app.listen(5000, () => console.log(`Server has been started on port ${PORT}`));
