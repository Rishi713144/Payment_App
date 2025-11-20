const express = require('express');
const cors = require("cors");
const rootRouter = require("../routes/index");

const app = express();

app.use(cors({
  origin:["https://payment-app-delta-two.vercel.app/"]
}));
app.use(express.json());

app.use("/api/v1", rootRouter);

// Remove app.listen(3000)
// Export for Vercel
module.exports = app;
