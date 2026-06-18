// dev workflow: npm run build  → compiles this file to dist/server.js
//              npm start       → runs the compiled file (not the .ts directly)
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

// load env variables first before anything else
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// middlewares
app.use(cors());
app.use(express.json()); // so we can read JSON from request body

// basic test route
app.get("/", (req, res) => {
    res.send("Hello World, its now changed, everytime? ")
});

app.listen(port, () => {
    console.log(`server started successfully at port ${port}`);
})