import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    return res.send('hello')
});

app.listen(PORT, () => {
  console.log("app is listening to port " + PORT);
});
