const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 3000;

app.use("/api/users", authRoutes);

app.listen(PORT, () => {
  console.log(`the server is running on ${PORT}`);
});
