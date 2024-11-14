import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_HOST, DB_PORT, DB_NAME, DB_PASSWORD } = process.env;

export const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false }
);

database
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => console.error("Unable to connect to the database:", error));
