import "reflect-metadata";
import { DataSource } from "typeorm";
import { Font } from "./entity/font.js";

const AppDataSource = new DataSource({
  logging: true,
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "fonts",
  entities: [Font],
  migrations: ["src/migrations/*.ts"],
  synchronize: process.env.NODE_ENV === "development",
});

export default AppDataSource;
