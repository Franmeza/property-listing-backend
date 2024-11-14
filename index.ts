import { database } from "./src/config/db";
import { server } from "./src/server";
import "./src/models/Property";
import "./src/models/Capacity";
import seedDatabase from "./src/utils/seedDatabase";

const PORT = process.env.PORT || 3000;
database
  .sync({ force: true })
  .then(async () => {
    await seedDatabase();

    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
