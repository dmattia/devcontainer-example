import express from "express";
import { addOne } from "@onboarding/utils";
import serverlessExpress from "@vendia/serverless-express";
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN
}));

app.get("/", (req, res) => {
  res.send(`Hello, World! ${addOne(4)}`);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

exports.handler = serverlessExpress({ app });