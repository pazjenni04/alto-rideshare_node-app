const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "images")));

require("./routes/driverRoutes")(app);
require("./routes/userRoutes")(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
