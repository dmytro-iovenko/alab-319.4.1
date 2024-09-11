import express from "express";
const app = express();
const port = 3000;

// Start express server
app.listen(port, () => console.log("Server is running on port:", port));
