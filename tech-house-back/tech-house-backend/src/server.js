import app from "./app.js"

const PORT = 3000;


app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})

