import dotenv from "dotenv";
import app from "./app";
import { AppDataSource } from "./db";

dotenv.config();

async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(process.env.PORT || 8080);
    console.log(
      `Server on port http://localhost:${process.env.PORT || 8080}/api-docs`
    );
  } catch (error) {
    console.error(error);
  }
}

main();
