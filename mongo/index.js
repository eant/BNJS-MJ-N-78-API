require("dotenv").config();

const { PORT } = process.env;

const api = require("./utils/api");

api.listen(PORT, () => console.log(`server started on ${PORT}`));
