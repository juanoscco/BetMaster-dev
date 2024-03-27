import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Teams } from "./entity/Teams"
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "toor",
  database: "betmaster_db",
  synchronize: true,
  // logging: true,
  entities: [User, Teams],
});
