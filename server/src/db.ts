import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOSTNAME || 'localhost',
  port: 5432,
  username: process.env.USERNAME || 'postgres',
  password: process.env.PASSWORD || 'toor',
  database: process.env.DATABASE_NAME || 'betmaster_db',
  synchronize: true,
  // logging: true,
  entities: [User],
});
