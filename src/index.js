// console.log("Hello");
import express from "express";
import ip from "ip";
import dotenv from "dotenv";
import cors from "cors";
import Response from "./domain/response.js";
import logger from './util/logger.js'
import httpStatus from "./controller/patient.controller.js";
import patientRoutes from "./route/patients.route.js";

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());


app.use('/patients', patientRoutes);

app.get('/', (req, res) => res.send(new Response(httpStatus.OK.code, httpStatus.OK.status, 'Patient API, v1.0.0 - All System Go')));

app.all('*', (req, res) => res.status(httpStatus.NOT_FOUND.code).send(new Response(httpStatus.NOT_FOUND.code, httpStatus.NOT_FOUND.status, 'Route Dose not Exist on tyhe Server')));


app.listen(PORT, () => logger.info(
    `Server Running on: ${ip.address()}:${PORT}`
));