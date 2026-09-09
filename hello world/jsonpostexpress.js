

const express = require("express");
const app = express();

// Parse incoming JSON
app.use(express.json());

app.post("/echo", (req, res) => {
  res.json({ received: req.body });
});


app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
}); 