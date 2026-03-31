import express from "express"
import cors from "cors"


const app = express();
app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
    res.json({
        message: "Api is running correctly!"
    })
})



export default app;


