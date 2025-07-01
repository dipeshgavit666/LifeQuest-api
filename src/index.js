import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js"

import 'dotenv/config'

const PORT = process.env.PORT || 7000;

connectDB()
.then(() => {
    app.listen(PORT, () => {
    console.log(`server is runnig on port: ${PORT}`)
})
})
.catch((err) => {
    console.log("mongodb conection error", err);
    
})