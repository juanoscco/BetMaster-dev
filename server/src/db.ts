import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOSTNAME,
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  // logging: true,
  entities: [User],
});
