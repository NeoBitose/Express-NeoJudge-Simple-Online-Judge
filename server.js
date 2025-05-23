const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const judgeRoute = require("./routes/judge");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/judge", judgeRoute);
app.use(express.static("public")); // Serve frontend

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
