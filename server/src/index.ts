import app from "./app";
import { AppDataSource } from "./db";
async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(8080);
    console.log(`Server on port http://localhost:${8080}`);
  } catch (error) {
    console.error(error);
  }
}

main();
