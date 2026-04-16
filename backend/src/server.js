import app from "./app.js";
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}/api/v2`);
});
