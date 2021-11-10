const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/driverRoutes")(app);
require("./routes/userRoutes")(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
