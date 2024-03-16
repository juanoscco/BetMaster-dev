import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';

import * as swaggerDocument from '../swagger.json'; // Importa tu archivo de especificación OpenAPI

import userRoutes from "./routes/user.routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", userRoutes);

export default app;
